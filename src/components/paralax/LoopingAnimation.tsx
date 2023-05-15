import { title } from "process";
import React from "react";

export const LoopingAnimation = ({ opacity, word }: { opacity?: number; word: string }) => {
  const { useState, useEffect, useRef, useCallback } = React;

  const InfiniteLooper = function InfiniteLooper({ speed, direction, children }: { speed: number; direction: "right" | "left"; children: React.ReactNode }) {
    const [looperInstances, setLooperInstances] = useState(1);
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    function resetAnimation() {
      if (innerRef?.current) {
        innerRef.current.setAttribute("data-animate", "false");

        setTimeout(() => {
          if (innerRef?.current) {
            innerRef.current.setAttribute("data-animate", "true");
          }
        }, 10);
      }
    }

    const setupInstances = useCallback(() => {
      if (!innerRef?.current || !outerRef?.current) return;

      const { width } = innerRef.current.getBoundingClientRect();

      const { width: parentWidth } = outerRef.current.getBoundingClientRect();

      const widthDeficit = parentWidth - width;

      const instanceWidth = width / innerRef.current.children.length;

      if (widthDeficit) {
        setLooperInstances(looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1);
      }

      resetAnimation();
    }, [looperInstances]);

    /*
          6 instances, 200 each = 1200
          parent = 1700
        */

    useEffect(() => setupInstances(), [setupInstances]);

    useEffect(() => {
      window.addEventListener("resize", setupInstances);

      return () => {
        window.removeEventListener("resize", setupInstances);
      };
    }, [looperInstances, setupInstances]);

    return (
      <div className="looper" ref={outerRef}>
        <div className="looper__innerList" ref={innerRef} data-animate="true">
          {[...Array(looperInstances)].map((_, ind) => (
            <div
              key={ind}
              className="looper__listInstance"
              style={{
                animationDuration: `${speed}s`,
                animationDirection: direction === "right" ? "reverse" : "normal",
              }}
            >
              {children}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="app ">
      <InfiniteLooper speed={50} direction="right">
        <div className={`font-extrabold text-transparent bg-clip-text italic bg-white opacity-${opacity} text-xl`}>{word}</div>
      </InfiniteLooper>
    </div>
  );
};
