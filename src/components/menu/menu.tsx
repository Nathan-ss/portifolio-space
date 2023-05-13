import * as React from "react";

import { Dock } from "./dock";

import styles from "./styles.module.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

import { ButtonMenu } from "./btn";
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

          <div className="w-1/3 text-2xl font-bold flex gap-2">
            <div className="border-2 rounded-full border-l-2 border-white mx-2 "></div>
            <RiLinkedinFill />
            <AiOutlineGithub />
            <div className="border-2 rounded-full border-l-2 border-white mx-2 "></div>
            <BsFillArrowUpSquareFill />
          </div>
        </div>
      </Dock>
    </div>
  );
}
