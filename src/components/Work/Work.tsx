import React from "react";

import "../../App.css";
import { Typography } from "@material-ui/core";
import Projectcontainerleft from "../Projectcontainer/Projectcontainerleft";
import { projectData } from "../../assets/projectText";
import classes from "./Work.module.css";
import Light from "../Light/Light";

const Work = () => {
  return (
    <section id="work" className="section work">
      <div className="mainContainer">
        <Typography className={`${classes.heading} styledText`} variant="h3">
          Latest Work
        </Typography>
        <Light top="30%" left="90%" blur="blur(500px)" />

        {projectData.map((item, i) => {
          return (
            <Projectcontainerleft
              class={i == 1 || i == 3 ? classes.reverseRow : ""}
              key={i}
              name={item.name}
              sitelink={item.siteLink}
              image={item.image}
              text={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Work;
