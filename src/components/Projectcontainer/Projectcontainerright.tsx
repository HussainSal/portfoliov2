import React from "react";
import classes from "./Projectcontainer.module.css";
import { Link, Typography } from "@material-ui/core";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState, useEffect } from "react";

const Projectcontainerright: React.FC<{
  name: string;
  text: string;
  image: string;
  sitelink: string;
}> = (props) => {
  const [deviceSize, changeDeviceSize] = useState(window.innerWidth);

  useEffect(() => {
    const resizeW = () => changeDeviceSize(window.innerWidth);

    window.addEventListener("resize", resizeW); // Update the width on resize

    return () => window.removeEventListener("resize", resizeW);
  }, [deviceSize]);

  return (
    <div className="mainContainer">
      <div className={classes.Projectcontainer}>
        {deviceSize < 1000 && (
          <div className={classes.imageBox}>
            <img src={props.image} className={classes.image} alt="" />
          </div>
        )}
        <div className={classes.textbox}>
          <Typography
            className={`${classes.textHeading}`}
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

        {deviceSize > 1000 && (
          <div className={classes.imageBox}>
            <img src={props.image} width="600px" height="380px" alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Projectcontainerright;
