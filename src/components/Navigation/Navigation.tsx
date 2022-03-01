import React from "react";
import classes from "./Navigation.module.css";
import { Button, Typography } from "@material-ui/core";
import "../../App.css";
import SocialAccounts from "./SocialAccounts";

const scrollintoview = (cur: string) => {
  document.getElementById(cur)?.scrollIntoView({ behavior: "smooth" });
};

const navOptions = ["work", "about me", "contact"];
const Navigation = () => {
  return (
    <nav>
      <div className={`${classes.nav} flex mainContainer`}>
        <div className={`${classes.navOptions} flex`}>
          {navOptions.map((cur) => {
            return (
              <Button
                onClick={() => scrollintoview(cur)}
                color="primary"
                key={cur}
              >
                <Typography variant="body2">{cur}</Typography>
              </Button>
            );
          })}
          <Button
            href="https://drive.google.com/file/d/13yrhUe014HMxYHII8dEUuchDMesqp0js/view?usp=sharing"
            target="_blank"
            color="primary"
          >
            <Typography variant="body2">Resume</Typography>
          </Button>
        </div>
        <SocialAccounts className="" />
      </div>
    </nav>
  );
};

export default Navigation;
