import React, { useEffect } from "react";
import classes from "./Header.module.css";
import Light from "../Light/Light";
import { Typography } from "@material-ui/core";
import "../../App.css";

import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { useAppContext } from "../../store/authContext";

gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

const Header = () => {
  const ctx = useAppContext();

  ctx.deviceSize > 850 &&
    useEffect(() => {
      gsap.fromTo(
        "#headingText",
        {
          x: "-65vw",
          scale: 0.6,
        },
        {
          delay: 0.3,
          x: "0vw",
          duration: 2,
          scale: 1,
          yoyo: true,
          ease: "back",
        }
      );
      gsap.fromTo(
        "#headingText1",
        {
          x: "-85vw",
          scale: 0.6,
        },
        {
          delay: 0.5,
          x: "0vw",
          duration: 2,
          scale: 1,
          yoyo: true,
          ease: "back",
        }
      );
      gsap.fromTo(
        "#headingText2",
        {
          x: "-100vw",
          scale: 0.6,
        },
        {
          delay: 0.7,
          x: "0vw",
          duration: 2,
          scale: 1,
          yoyo: true,
          ease: "back",
        }
      );
    }, []);

  return (
    <header className={`${classes.header} section`}>
      <Light top="-10%" left="70%" blur="blur(350px)" />
      <div className={`${classes.mainHeading} mainContainer`}>
        <Typography id="headingText" variant="h3" color="secondary">
          Hello!
        </Typography>
        <Typography id="headingText1" variant="h2" color="primary">
          Salman Hussain
        </Typography>

        <div id="headingText2" className={classes.animation}>
          <Typography id="frontendText" variant="h1" className="styledText">
            Full Stack Engineer
          </Typography>
        </div>
      </div>
      <Light top="70%" left="0%" blur="blur(600px)" />
    </header>
  );
};

export default Header;
