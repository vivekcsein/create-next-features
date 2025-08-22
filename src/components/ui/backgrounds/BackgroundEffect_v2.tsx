"use client";
import clsx from "clsx";
import React, { useMemo } from "react";
import LazyLoadVideo from "../helper/LazyLoadVideo";

interface BackgroundEffect_v2Props {
  // isLazy?: boolean;
  // poster?: string;
  // videoSrc?: string;
  video?: {
    src: string;
    poster?: string;
    isLazy?: boolean;
  };
  className?: string;
  children: React.ReactNode;
  overlayClassName?: string;
}

//video lazy load on background
const BackgroundEffect_v2 = ({
  video,
  children,
  className,
  overlayClassName,
}: BackgroundEffect_v2Props) => {
  const src = useMemo(() => {
    if (video) return { src: video.src, type: "video/mp4" };
    // return { src: "/videos/background-video.mp4", type: "video/mp4" };
    return {
      src: "https://s64-hzfi.freeconvert.com/task/68a86b14c4f07aa0f7378424/large.mp4",
      type: "video/mp4",
    };
  }, [video]);

  return (
    <div className={clsx("relative min-h-screen overflow-hidden", className)}>
      {video?.isLazy ? (
        <LazyLoadVideo
          poster={video?.poster}
          sources={[src]}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      ) : (
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={src.src}
          autoPlay
          muted
          loop
          playsInline
          onLoad={() => {
            console.log(" background video loaded");
          }}
        />
      )}

      <div className={clsx("relative z-10", overlayClassName)}>{children}</div>
    </div>
  );
};

export default BackgroundEffect_v2;
