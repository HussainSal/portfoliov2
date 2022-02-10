import React from "react";
import classes from "./Projectcontainer.module.css";
import { Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const useStyle = makeStyles({
  textHeading: {
    marginBottom: "17px",
  },
});

const Projectcontainerright: React.FC<{
  name: string;
  text: string;
  image: string;
  sitelink: string;
}> = (props) => {
  const style = useStyle();

  return (
    <section>
      <div className="mainContainer">
        <div className={classes.Projectcontainer}>
          <div className={classes.textbox}>
            <Typography
              className={style.textHeading}
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
          <div className={classes.imageBox}>
            <img src={props.image} width="600px" height="380px" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projectcontainerright;
