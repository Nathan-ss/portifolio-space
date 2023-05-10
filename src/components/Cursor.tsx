import { useSpring, animated } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import styles from "../styles/Cursor.module.css";
interface CursorProps {
  cursorImage?: string;
}

interface CursorStyles {
  left: number;
  top: number;
  scale: number;
}
const cursores = {
  c1: "https://66.media.tumblr.com/22a5497b6b6c07e864b982e7b87048d6/tumblr_pj4nfuQh5Z1uhdr2mo1_250.gif",
  c2: "https://thumbs.gfycat.com/ImperfectIllfatedFoxterrier-size_restricted.gif",
  c3: "https://images.squarespace-cdn.com/content/v1/562516c0e4b095e786b37604/1569883147475-W7AOA31MCE8745OJDPVW/CURSOR.gif",
  c4: "https://thumbs.gfycat.com/PersonalShockedAustraliansilkyterrier-max-1mb.gif",
  c5: "https://rpgmaker.net/media/content/games/7757/screenshots/Cursor_twitter.gif",
  c6: "https://64.media.tumblr.com/f2eb0651f9d689465f92bc0980055a9a/tumblr_nxius1i5sj1rby04wo1_250.gif",
  c7: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/484f349b-77d6-4cbe-a4d3-ec11a1558bee/dd6k4xq-2fbd4b16-303a-486c-ab4c-9074cd728529.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ4NGYzNDliLTc3ZDYtNGNiZS1hNGQzLWVjMTFhMTU1OGJlZVwvZGQ2azR4cS0yZmJkNGIxNi0zMDNhLTQ4NmMtYWI0Yy05MDc0Y2Q3Mjg1MjkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jcN3K3YY5rjprbtPIoY1nYN9A1WEFfD6RJEh_VPO4_U",
};
const Cursor: React.FC<CursorProps> = ({ cursorImage = cursores.c4 }) => {
  const [cursorPos, setCursorPos] = useState({ left: 0, top: 0 });
  const [click, setClick] = useState(false);

  const cursorSize = 50; // ajuste o tamanho do cursor aqui

  const [cursorStyles, setCursorStyles] = useSpring<CursorStyles>(() => ({
    left: 100,
    top: 100,
    scale: 1,
  }));
  const handleClick = () => {
    setClick(true);
    setTimeout(() => setClick(false), 500);
  };

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setCursorPos({
      left: clientX - cursorSize / 2,
      top: clientY - cursorSize / 2,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  useEffect(() => {
    setCursorStyles({
      left: cursorPos.left,
      top: cursorPos.top,
      scale: click ? 0.7 : 1,
      config: {
        tension: 3000, // ajuste a tensão e fricção aqui
        friction: 60,
      },
    });
  }, [cursorPos, click, setCursorStyles]);

  return (
    <animated.div
      className={styles.cursor}
      style={{
        left: cursorStyles.left,
        top: cursorStyles.top,
        transform: cursorStyles.scale.to((scale) => `scale(${scale})`),
      }}
    >
      <img src={cursorImage} alt="cursor" />
    </animated.div>
  );
};

export default Cursor;
