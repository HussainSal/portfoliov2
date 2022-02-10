import React from "react";

import "../../App.css";
import { Typography } from "@material-ui/core";
import Projectcontainerleft from "../Projectcontainer/Projectcontainerleft";
import Projectcontainerright from "../Projectcontainer/Projectcontainerright";
import { projectData } from "../../assets/projectText";
import Light from "../Light/Light";

const Work = () => {
  return (
    <section id="work" className="section work">
      <div className="mainContainer">
        <Typography
          className="styledText"
          style={{ marginBottom: "150px" }}
          variant="h3"
        >
          Latest Work
        </Typography>
        <Projectcontainerleft
          name={projectData[0].name}
          sitelink={projectData[0].siteLink}
          image={projectData[0].image}
          text={projectData[0].description}
        />
        <Projectcontainerright
          name={projectData[1].name}
          sitelink={projectData[1].siteLink}
          image={projectData[1].image}
          text={projectData[1].description}
        />
        <Projectcontainerleft
          name={projectData[2].name}
          sitelink={projectData[2].siteLink}
          image={projectData[2].image}
          text={projectData[2].description}
        />
        <Projectcontainerright
          name={projectData[3].name}
          sitelink={projectData[3].siteLink}
          image={projectData[3].image}
          text={projectData[3].description}
        />
      </div>
    </section>
  );
};

export default Work;
