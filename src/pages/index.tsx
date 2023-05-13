import React, { useEffect, useRef, useState } from "react";
import { useSpring, useScroll, animated } from "@react-spring/web";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { Page1, Page2, Page3 } from "@/components/paralax/Pages";
import { Oswald } from "next/font/google";
import Cursor from "@/components/Cursor";
import Menu from "@/components/menu/menu";

const roboto = Oswald({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const parallax = useRef<IParallax>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);
  const [scroll, setScroll] = useState<number>(0);
  const handleScrollCapture = (event: any) => {
    // Lógica para manipular a captura do evento de rolagem
    const scrollTop: number = event.target.scrollTop;

    setScroll(scrollTop);
    console.log("Valor de rolagem capturado:", parseInt(scrollTop.toString()));
  };

  const [to, setTo] = useState<number | null>(null);
  console.log(to);
  useEffect(() => {
    if (to != null) {
      parallax.current.scrollTo(to);
    }
  }, [to]);

  return (
    <div id="paralax">
      <Cursor />

      <div ref={containerRef} id="container">
        <Parallax
          ref={parallax}
          pages={3}
          className={`gradientBackGround ${roboto}`}
          id="paralax"
          onScrollCapture={handleScrollCapture}
        >
          <ParallaxLayer
            offset={2}
            speed={1}
            className={` gray-blue-gradient`}
            id="c1"
          />
          <ParallaxLayer
            offset={1}
            speed={1}
            className={` blue-amber-gradient`}
            id="c2"
          />
          <ParallaxLayer
            offset={0}
            speed={1}
            className={` slate-gray-gradient`}
            id="c3"
          />

          <Page1 scroll={scroll} />
          <Page2 scroll={scroll} />
          <Page3 scroll={scroll} />
        </Parallax>
        <Menu to={setTo} />
      </div>
    </div>
  );
}
