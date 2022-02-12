import React from "react";
import { Typography } from "@material-ui/core";
import img1 from "../../assets/projectsImages/frame.png";
import img2 from "../../assets/projectsImages/framemobile.png";

import classes from "./About.module.css";

const Info = () => {
  return (
    <div className={classes.aboutmeContainer}>
      <img src={img1} className={classes.image} alt="" />
      <div className={classes.aboutmeText}>
        <div className={classes.text}>
          <Typography color="primary">
            <span className={classes.aboutme}>.About </span>
            {"{"}
          </Typography>
          <Typography color="primary">
            <span className={classes.property}>Profession:</span> Developer
          </Typography>
          <Typography color="primary">{"}"}</Typography>
        </div>
        <div className={classes.text}>
          <Typography color="primary">
            <span className={classes.aboutme}>.Education </span>
            {"{"}
          </Typography>
          <Typography color="primary">
            <span className={classes.property}>
              {" "}
              SecondarySchoolPercentage:
            </span>{" "}
            60%
          </Typography>
          <Typography color="primary">
            <span className={classes.property}>
              {" "}
              HigherSecondaryPercentage:
            </span>{" "}
            92%
          </Typography>

          <Typography color="primary">{"}"}</Typography>
        </div>
        <div className={classes.text}>
          <Typography color="primary">
            <span className={classes.aboutme}>.Skills </span>
            {"["}
          </Typography>
          <Typography className={classes.skillText} color="primary">
            Html5, Css, Javascript, Typescript, GSAP, React, Material-UI,{" "}
            {<br />} Redux, NextJs, RestAPI, Firebase
          </Typography>
          <Typography color="primary">{"]"}</Typography>
        </div>
      </div>
    </div>
  );
};

export default Info;
