import React from "react";
import { Avatar, AvatarImage } from "../shadcn/avatar";

type ImageAvatarProps = {
  src?: string;
  alt?: string;
  className?: string;
};

const fallbackSrc = "/images/avatar/dummyAvatar.jpg";
const fallbackAlt = "Default Avatar";

const ImageAvatar: React.FC<ImageAvatarProps> = ({ src, alt, className }) => {
  const imageSrc = src && src.trim() !== "" ? src : fallbackSrc;

  return (
    <div
      className={`flex items-center gap-1 w-fit font-medium text-[1rem] cursor-pointer ${className || ""}`}
    >
      <Avatar>
        <AvatarImage
          src={imageSrc}
          alt={alt || fallbackAlt}
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== fallbackSrc) {
              target.src = fallbackSrc;
            }
          }}
        />
      </Avatar>
    </div>
  );
};

export default ImageAvatar;
