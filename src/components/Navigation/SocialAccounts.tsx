import React from "react";
import classes from "./Navigation.module.css";
import Github from "../../assets/icons/Github";
import Linkedin from "../../assets/icons/Linkedin";
import Twitter from "../../assets/icons/Twitter";
import "../../App.css";
import { Link } from "@material-ui/core";

const SocialAccounts: React.FC<{ className: string }> = (props) => {
  return (
    <div className={`${classes.socialmediaOptions} ${props.className} flex`}>
      <Link
        className={classes.link}
        href="https://www.linkedin.com/in/salman-hussain-a92867194/"
        target="_blank"
      >
        <Linkedin />
      </Link>
      <Link
        className={classes.link}
        target="_blank"
        href="https://github.com/HussainSal"
      >
        <Github />
      </Link>
      <Link
        className={classes.link}
        target="_blank"
        href="https://twitter.com/salmanmian54321"
      >
        <Twitter />
      </Link>
    </div>
  );
};

export default SocialAccounts;
