import React, { useEffect } from "react";
import classes from "./Navigation.module.css";
import { Button, Typography } from "@material-ui/core";
import "../../App.css";
import SocialAccounts from "./SocialAccounts";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";

gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

const scrollintoview = (cur: string) => {
  document.getElementById(cur)?.scrollIntoView({ behavior: "smooth" });
};

const navOptions = ["work", "about me", "contact"];
const Navigation = () => {
  useEffect(() => {
    gsap.fromTo(
      "#navOptions",
      {
        y: "-35vw",
        scale: 0.6,
      },
      { delay: 0.5, y: "0vw", duration: 2, scale: 1, yoyo: true, ease: "back" }
    );
    gsap.fromTo(
      "#socialAccounts",
      {
        y: "-35vw",
        scale: 0.6,
      },
      { delay: 0.5, y: "0vw", duration: 2, scale: 1, yoyo: true, ease: "back" }
    );
  }, []);

  return (
    <nav>
      <div className={`${classes.nav} flex mainContainer`}>
        <div id="navOptions" className={`${classes.navOptions} flex`}>
          {navOptions.map((cur) => {
            return (
              <Button
                onClick={() => scrollintoview(cur)}
                color="primary"
                key={cur}
              >
                <Typography variant="body2">{cur}</Typography>
              </Button>
            );
          })}
          <Button
            href="https://drive.google.com/file/d/13yrhUe014HMxYHII8dEUuchDMesqp0js/view?usp=sharing"
            target="_blank"
            color="primary"
          >
            <Typography variant="body2">Resume</Typography>
          </Button>
        </div>
        <div id="socialAccounts">
          <SocialAccounts className="" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
