import React, { useRef, useEffect, useState } from "react";

interface LazyVideoProps {
  poster?: string;
  sources: { src: string; type: string }[];
  className?: string;
}

const LazyLoadVideo: React.FC<LazyVideoProps> = ({
  poster,
  sources,
  className,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={isVisible}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
    >
      {isVisible &&
        sources.map(({ src, type }) => (
          <source key={src} src={src} type={type} />
        ))}
    </video>
  );
};

export default LazyLoadVideo;
