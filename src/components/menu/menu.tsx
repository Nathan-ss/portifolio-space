import * as React from "react";

import { Dock } from "./dock";

import styles from "./styles.module.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";

import { ButtonMenu } from "./btn";

export default function Menu() {
  return (
    <div className={styles.body}>
      <Dock>
        <div className="flex justify-center items-center gap-3">
          <ButtonMenu text="Projects" />
          <ButtonMenu text="Skills" />
          <ButtonMenu text="Contact" />

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
