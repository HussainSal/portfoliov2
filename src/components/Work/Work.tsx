import React, { useEffect } from "react";
import "../../App.css";
import { Typography } from "@material-ui/core";
import Projectcontainerleft from "../Projectcontainer/Projectcontainerleft";
import { projectData } from "../../assets/projectText";
import classes from "./Work.module.css";
import Light from "../Light/Light";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { useAppContext } from "../../store/authContext";

gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

const Work = () => {
  const ctx = useAppContext();

  ctx.deviceSize > 850 &&
    useEffect(() => {
      gsap.fromTo(
        "#latestWork",
        {
          x: "-65vw",
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
    }, []);

  return (
    <section id="work" className="section work">
      <div className="mainContainer">
        <Typography
          id="latestWork"
          className={`${classes.heading} styledText`}
          variant="h3"
        >
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
