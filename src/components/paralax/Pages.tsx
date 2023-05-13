import { ParallaxLayer } from "@react-spring/parallax";
import { LoopingAnimation } from "./LoopingAnimation";
import { useSpring, a, useSpringRef, animated } from "@react-spring/web";
import Entry, { Second } from "../Entry";
import { useCallback, useEffect } from "react";
import First from "../Entry";

const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;
//bg-gradient-to-b from-gray-900 from-40%  via-blue-800 via-2%  to-slate-500 to-5%

export const Page1 = ({ scroll }: { scroll: number }) => {
  const api = useSpringRef();
  const springs = useSpring({
    ref: api,
    from: { opacity: 0, y: -100 },
  });

  const Meteor = useSpringRef();
  const MeteorAnimation = useSpring({
    ref: Meteor,
    from: { x: 0, y: -200 },
    delay: 20,
  });

  const animateMeteor = useCallback(
    (scroll: number) => {
      Meteor.start({
        to: {
          x: 100 - scroll,
          y: scroll - 200,
        },
      });
    },
    [Meteor]
  );

  const animate = useCallback(
    (n: number) => {
      api.start({
        to: {
          opacity: n,
          y: 0,
        },
      });
    },
    [api]
  );

  useEffect(() => {
    if (parseInt(scroll.toString()) < 450) {
      animate(1);
    }
    if (parseInt(scroll.toString()) > 600) {
      animate(0);
    }
    animateMeteor(scroll);
  }, [animate, scroll]);

  return (
    <>
      <ParallaxLayer
        className="bg-gradient-to-b from-gray-900 to-gray-800 "
        offset={0}
        speed={0.8}
        factor={2}
        style={{
          backgroundImage: url("stars", true),
          backgroundSize: "cover",
        }}
      />
      {/* <ParallaxLayer offset={0} speed={0.4} className="opacity-20">
        <LoopingAnimation
          word={"| NATHAN SOARES SILVA | DESENVOLVEDOR | FRONT-END | BACK-END "}
        />
      </ParallaxLayer> */}

      <ParallaxLayer offset={0} speed={0.2}>
        <div className="animation_layer parallax mt-5/6" id="jungle1"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <animated.div
          style={{
            ...MeteorAnimation,
          }}
        >
          <div className="animation_layer parallax mt-5/6" id="jungle2"></div>
        </animated.div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.2} className="">
        <div className="bg-gradient-to-b from-black 60% ...  opacity-50 w-full h-full" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <animated.div
          style={{
            ...springs,
          }}
        >
          <div className="flex  justify-center px-4" id="#Projects">
            <div className="w-3/6 justify-center items-center ">
              <div className=" active:scale-100 duration-100000 hover:scale-110 transition duration-300 ease-in-out pt-20 pr-10 flex justify-start items-center h-full ">
                <img
                  src={"./images/astronauta.png"}
                  style={{ width: "100%" }}
                  className="floating"
                />
              </div>
            </div>
            <div className="w-full">
              <First />
            </div>
          </div>
        </animated.div>
      </ParallaxLayer>
    </>
  );
};
export const Page2 = ({ scroll }: { scroll: number }) => {
  const api = useSpringRef();
  const api2 = useSpringRef();
  const springs = useSpring({
    ref: api,
    from: { x: 0, y: 200, scale: "100%" },
    delay: 20,
  });
  const showLeft = useSpring({
    ref: api2,
    from: { x: -600, opacity: 0 },
  });

  const animate = useCallback(
    (scroll: number) => {
      api.start({
        to: {
          x: scroll - 100,
          y: 200 - scroll,
          scale: `${1000 - scroll}%`,
        },
      });
    },
    [api]
  );
  const animateShowLeft = useCallback(
    (scroll: number, x: number, opacity: 1 | 0) => {
      api2.start({
        to: {
          x: x,
          opacity: opacity,
        },
      });
    },
    [api]
  );

  useEffect(() => {
    animate(scroll);
    if (scroll > 450 && scroll < 1400) {
      animateShowLeft(scroll, 0, 1);
    }
    if (scroll < 400) {
      animateShowLeft(scroll, 600, 0);
    }
    if (scroll > 1400) {
      animateShowLeft(scroll, 600, 0);
    }
  }, [animate, scroll]);
  return (
    <>
      <ParallaxLayer
        className="bg-gradient-to-b from-gray-900 to-gray-800 "
        offset={1}
        speed={0.8}
        factor={2}
        style={{
          backgroundImage: url("stars", true),
          backgroundSize: "cover",
        }}
      />
      {/* <ParallaxLayer offset={0} speed={0.4} className="opacity-20">
        <LoopingAnimation
          word={"| NATHAN SOARES SILVA | DESENVOLVEDOR | FRONT-END | BACK-END "}
        />
      </ParallaxLayer> */}
      <ParallaxLayer offset={1} speed={0.2}>
        <animated.div
          style={{
            ...springs,
          }}
        >
          <div className="animation_layer parallax " id="rocks"></div>
        </animated.div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.1}>
        <animated.div
          style={{
            ...showLeft,
          }}
        >
          <div className="flex  justify-center px-4">
            <div className="w-full">
              <Second />
            </div>
          </div>
        </animated.div>
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
};
export const Page3 = ({ scroll }: { scroll: number }) => (
  <>
    <ParallaxLayer offset={2} speed={2.3}>
      <img
        src={url("satellite4")}
        style={{ width: "15%", marginLeft: "70%" }}
      />
    </ParallaxLayer>
    <ParallaxLayer offset={2} speed={2.5}>
      <div className="animation_layer parallax mt-5/6" id="planet"></div>
    </ParallaxLayer>
    <ParallaxLayer
      offset={3}
      speed={2}
      factor={3}
      style={{
        backgroundImage: url("stars", true),
        backgroundSize: "cover",
      }}
    />
  </>
);
