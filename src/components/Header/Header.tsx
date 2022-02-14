import React from "react";
import classes from "./Header.module.css";
import Light from "../Light/Light";
import { Typography } from "@material-ui/core";
import "../../App.css";

const Header = () => {
  return (
    <header className={`${classes.header} section`}>
      <Light top="-15%" left="70%" blur="blur(350px)" />
      <div className={`${classes.mainHeading} mainContainer`}>
        <Typography variant="h3" color="secondary">
          Hello!
        </Typography>
        <Typography variant="h2" color="primary">
          Salman Hussain
        </Typography>

        <Typography variant="h1" className="styledText">
          frontend developer.
        </Typography>
      </div>
      <Light top="70%" left="0%" blur="blur(600px)" />
    </header>
  );
};

export default Header;
