"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

type ScramblyTextProps = {
  selector?: string;
  targetRef?: React.RefObject<HTMLDivElement>;
};

const ScramblyText = ({ selector, targetRef }: ScramblyTextProps) => {
  useGSAP(() => {
    const item =
      targetRef?.current ??
      (selector ? document.querySelector(selector) : null);

    if (!item) return;

    const split = SplitText.create(item, { type: "chars" });
    split.chars?.forEach((elem, index) => {
      const tl = gsap.timeline({
        repeatRefresh: true,
        repeat: index * 5 + index,
      });
      tl.from(elem, {
        duration: 0.1,
        ease: "power3",
        rotateX: "random(-360, 360)",
        innerHTML:
          "random([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,1,2,3,4,5,6,7,8,9,0)",
        // color: "random([red, blue, green,yellow,purple])",
        color: gsap.utils.random([
          "var(--color-primary)",
          "var(--color-secondary)",
          "var(--color-accent)",
        ]),
      });
    });
  }, [selector, targetRef]);

  return null;
};

export default ScramblyText;
