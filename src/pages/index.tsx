import Image from "next/image";
import { Inter } from "next/font/google";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import styles from "../styles/styles.module.css";

const inter = Inter({ subsets: ["latin"] });
import React, { useRef } from "react";

// Little helpers ...
const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function Home() {
  const parallax = useRef<IParallax>(null!);
  return (
    <div className={styles.container}>
      <Parallax
        ref={parallax}
        pages={3}
        className="bg-gradient-to-t from-blue-800 ..."
      >
        <ParallaxLayer offset={2} speed={-0.3}>
          <div className="w-full">
            <img src={"/images/gato.png"} style={{ width: "10%" }} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={3}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={url("satellite4")}
            style={{ width: "15%", marginLeft: "70%" }}
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
