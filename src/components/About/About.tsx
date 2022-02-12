import React from "react";
import "../../App.css";
import { Typography } from "@material-ui/core";
import Info from "./Info";
import classes from "./About.module.css";
import Light from "../Light/Light";

const About = () => {
  return (
    <section id="about me" className="section about">
      <div className={`${classes.aboutSection} mainContainer`}>
        <Typography
          className={`${classes.heading} styledText`}
          style={{ marginBottom: "150px" }}
          variant="h3"
        >
          About Me
        </Typography>
        {/* <Light top="60%" left="90%" blur="blur(500px)" /> */}
        <Info />
      </div>
    </section>
  );
};

export default About;
