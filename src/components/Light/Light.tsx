import React from "react";
import classes from "./Light.module.css";

//   filter: blur(400px);

const Light: React.FC<{ left: string; top: string; blur: string }> = (
  props
) => {
  return (
    <div
      className={classes.light}
      style={{
        position: "absolute",
        left: props.left,
        top: props.top,
        filter: props.blur,
      }}
    ></div>
  );
};

export default Light;
