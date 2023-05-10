import { ParallaxLayer } from "@react-spring/parallax";
import { LoopingAnimation } from "./LoopingAnimation";
import { useSpring, a, useSpringRef, animated } from "@react-spring/web";
import Entry from "../Entry";
import { useCallback, useEffect } from "react";

const url = (name: string, wrap = false) => `${wrap ? "url(" : ""}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ")" : ""}`;
//bg-gradient-to-b from-gray-900 from-40%  via-blue-800 via-2%  to-slate-500 to-5%

export const Page1 = ({ scroll }: { scroll: number }) => {
  const [{ background, fill }, set] = useSpring({ background: "#f0f0f0", fill: "#202020" }, []);
  const api = useSpringRef();
  const springs = useSpring({
    ref: api,
    from: { opacity: 0, y: -100 },
  });

  const animate = useCallback(() => {
    api.start({
      to: {
        opacity: 1,
        y: 0,
      },
    });
  }, [api]);

  useEffect(() => {
    if (parseInt(scroll.toString()) < 400) {
      animate();
    }
  }, [animate, scroll]);

  return (
    <>
      <ParallaxLayer
        className="bg-gradient-to-b from-gray-900 to-gray-800 "
        offset={0}
        speed={0}
        factor={2}
        style={{
          backgroundImage: url("stars", true),
          backgroundSize: "cover",
        }}
      />
      <ParallaxLayer offset={0} speed={0.2} className="opacity-20">
        <LoopingAnimation word={"| NATHAN SOARES SILVA | DESENVOLVEDOR | FRONT-END | BACK-END "} />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <div className="animation_layer parallax mt-5/6" id="jungle1"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5}>
        <animated.div
          style={{
            ...springs,
          }}
        >
          <div className="flex  justify-center px-4">
            <div className="w-full">
              <Entry />
            </div>
            <div className="w-3/6 justify-center items-center">
              <div className=" active:scale-100 duration-100000 hover:scale-110 transition duration-300 ease-in-out pt-20 pr-10 flex justify-start items-center h-full ">
                <img src={"https://66.media.tumblr.com/6a094472af04215d8e49433750e72530/tumblr_mv1ojjSnx61spo3yuo1_500.gif"} style={{ width: "80%" }} className="floating " />
              </div>
            </div>
          </div>
        </animated.div>
      </ParallaxLayer>
    </>
  );
};
export const Page2 = ({ scroll }: { scroll: number }) => (
  <>
    <ParallaxLayer offset={1} speed={0.6}>
      <div className=" hover:scale-110 transition duration-300 ease-in-out">
        <img src={url("satellite4")} style={{ width: "15%", marginLeft: "70%" }} className="floating " />
      </div>
    </ParallaxLayer>
    {/* <ParallaxLayer offset={3} speed={0.6}>
      <div className=" hover:scale-110 transition duration-300 ease-in-out">
        <img src={"/images/looney-meat-revenge.png"} style={{ width: "15%", marginLeft: "0%" }} className="floating " />
      </div>
    </ParallaxLayer> */}
    <ParallaxLayer
      offset={3}
      speed={0}
      factor={3}
      style={{
        backgroundImage: url("stars", true),
        backgroundSize: "cover",
      }}
    />
  </>
);
export const Page3 = ({ scroll }: { scroll: number }) => (
  <>
    <ParallaxLayer offset={2} speed={0.3}>
      <img src={url("satellite4")} style={{ width: "15%", marginLeft: "70%" }} />
    </ParallaxLayer>
    <ParallaxLayer
      offset={3}
      speed={0}
      factor={3}
      style={{
        backgroundImage: url("stars", true),
        backgroundSize: "cover",
      }}
    />
  </>
);
