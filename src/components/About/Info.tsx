import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import img1 from "../../assets/projectsImages/frame.png";
import img2 from "../../assets/projectsImages/framemobile.png";

import classes from "./About.module.css";

const Info = () => {
  const [deviceSize, changeDeviceSize] = useState(window.innerWidth);

  useEffect(() => {
    const resizeW = () => changeDeviceSize(window.innerWidth);

    window.addEventListener("resize", resizeW); // Update the width on resize

    return () => window.removeEventListener("resize", resizeW);
  }, [deviceSize]);

  return (
    <div className={classes.aboutmeContainer}>
      <img
        src={deviceSize > 600 ? img1 : img2}
        className={classes.image}
        alt=""
      />
      <div className={classes.aboutmeText}>
        <div className={classes.text}>
          <Typography variant="body1" color="primary">
            <span className={classes.aboutme}>.About </span>
            {"{"}
          </Typography>
          <Typography variant="body1" color="primary">
            <span className={classes.property}>Profession:</span> Developer
          </Typography>
          <Typography variant="body1" color="primary">
            {"}"}
          </Typography>
        </div>
        <div className={classes.text}>
          <Typography variant="body1" color="primary">
            <span className={classes.aboutme}>.Education </span>
            {"{"}
          </Typography>
          <Typography variant="body1" color="primary">
            <span className={classes.property}>
              {" "}
              SecondarySchoolPercentage:
            </span>{" "}
            60%
          </Typography>
          <Typography variant="body1" color="primary">
            <span className={classes.property}>
              {" "}
              HigherSecondaryPercentage:
            </span>{" "}
            92%
          </Typography>

          <Typography variant="body1" color="primary">
            {"}"}
          </Typography>
        </div>
        <div className={classes.text}>
          <Typography variant="body1" color="primary">
            <span className={classes.aboutme}>.Skills </span>
            {"["}
          </Typography>
          <Typography
            variant="body1"
            className={classes.skillText}
            color="primary"
          >
            Html5, Css, Javascript, Typescript, GSAP, React, Material-UI,{" "}
            {<br />} Redux, NextJs, RestAPI, Firebase
          </Typography>
          <Typography variant="body1" color="primary">
            {"]"}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Info;
