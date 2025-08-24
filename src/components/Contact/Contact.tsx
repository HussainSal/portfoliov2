import { Typography } from "@mui/material";
import React from "react";
import "../../App.css";
import classes from "./Contact.module.css";
import SocialAccounts from "../Navigation/SocialAccounts";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className={classes.mainContainer}>
        <div className={classes.contactMe}>
          <div className={`${classes.contactMe_sub1} flex`}>
            <Typography color="primary" variant="subtitle1">
              I would like to have your contact!
            </Typography>
            <SocialAccounts className={classes.socialMediaOptions} />
          </div>
        </div>
        <div className={`${classes.contactMe_sub1} ${classes.sub2} flex`}>
          <Typography color="primary" variant="subtitle1">
            {`Do you have a project in mind? Let's make it happen!`}
          </Typography>

          <Typography
            variant="subtitle1"
            style={{ fontWeight: "normal" }}
            color="secondary"
          >
            salmanmian54321@gmail.com
          </Typography>
        </div>
      </div>
      <div className={classes.copyrightContainer}>
        <div className={classes.border} />
        <Typography color="primary" className={classes.rights} variant="body2">
          {new Date().getFullYear()} - All rights reserved
        </Typography>
      </div>
    </section>
  );
};

export default Contact;
