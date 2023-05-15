import * as React from "react";

import { Dock } from "./dock";

import styles from "./styles.module.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

import { ButtonMenu } from "./btn";
interface MenuProps {
  to: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Menu({ to }: MenuProps) {
  return (
    <div className={styles.body}>
      <Dock>
        <div className="flex w-3/4 justify-center items-center gap-3">
          <ButtonMenu text="Inicio" to={to} />
          <ButtonMenu text="Projetos" to={to} />
          <ButtonMenu text="Contato" to={to} />

          <div className="w-1/4 text-2xl font-bold flex gap-2 justify-center">
            <div className="border-2 rounded-full border-l-2 border-white mx-2 "></div>
            <RiLinkedinFill />
            <AiOutlineGithub />
          </div>
        </div>
      </Dock>
    </div>
  );
}
