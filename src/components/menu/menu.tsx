import * as React from "react";

import { Dock } from "./dock";

import styles from "./styles.module.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";

import { ButtonMenu } from "./btn";
import { IParallax } from "@react-spring/parallax";
interface MenuProps {
  to: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Menu({ to }: MenuProps) {
  return (
    <div className={styles.body}>
      <Dock>
        <div className="flex justify-center items-center gap-3">
          <ButtonMenu text="Projects" to={to} />
          <ButtonMenu text="Skills" to={to} />
          <ButtonMenu text="Contact" to={to} />

          <div className="border-2 rounded-full border-l-2 border-white mx-2 "></div>
          <div className="w-1/3 text-2xl font-bold flex gap-2">
            <RiLinkedinFill />
            <AiOutlineGithub />
          </div>
        </div>
      </Dock>
    </div>
  );
}
