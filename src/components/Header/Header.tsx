import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";
import Light from "../Light/Light";
import { Typography } from "@material-ui/core";
import "../../App.css";

import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";

gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

const Header = () => {
  const [mouseOver, setMouseOver] = useState(false);

  // useEffect(() => {
  //   gsap.fromTo(
  //     "#frontendText",
  //     {
  //       y: 0,
  //       scale: 0.8,
  //     },
  //     {
  //       y: "-1vw",
  //       duration: 2,
  //       scale: 1,
  //       yoyo: true,
  //       ease: "back",
  //     }
  //   );
  // }, [mouseOver]);

  return (
    <header className={`${classes.header} section`}>
      <Light top="-10%" left="70%" blur="blur(350px)" />
      <div className={`${classes.mainHeading} mainContainer`}>
        <Typography variant="h3" color="secondary">
          Hello!
        </Typography>
        <Typography variant="h2" color="primary">
          Salman Hussain
        </Typography>

        <div
          className={classes.animation}
          onMouseEnter={() => setMouseOver(!mouseOver)}
          // onMouseLeave={() => setMouseOver(false)}
        >
          <Typography id="frontendText" variant="h1" className="styledText">
            frontend developer.
          </Typography>
        </div>
      </div>
      <Light top="70%" left="0%" blur="blur(600px)" />
    </header>
  );
};

export default Header;
