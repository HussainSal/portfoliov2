import React from "react";
import classes from "./Projectcontainer.module.css";
import "../../App.css";
import { Typography } from "@material-ui/core";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "@material-ui/core";

const Projectcontainerleft: React.FC<{
  name: string;
  text: string;
  sitelink: string;
  image: string;
  class: string;
}> = (props) => {
  return (
    <div className="mainContainer">
      <div className={`${classes.Projectcontainer} ${props.class}  `}>
        <div className={classes.imageBox}>
          <img src={props.image} className={classes.image} alt="" />
        </div>
        <div className={`${classes.textbox} ${classes.textboxLeft}`}>
          <Typography
            className={classes.textHeading}
            color="primary"
            variant="h4"
          >
            {props.name}
          </Typography>
          <Typography color="primary" variant="body1">
            {props.text}
          </Typography>
          <div className={classes.visitProject}>
            <Link
              href={props.sitelink}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Typography
                color="secondary"
                className={classes.seeProject}
                variant="subtitle1"
              >
                See Project
              </Typography>
            </Link>
            <ArrowForwardIcon className={classes.arrowForward} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectcontainerleft;
