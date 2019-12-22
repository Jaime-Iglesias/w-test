import React from "react";
import { Typography, ButtonBase } from "@material-ui/core";

import useStyles from "./styles";

const MainButton = ({ classNameButton, classNameText, mainButtonText }) => {
  const classes = useStyles();

  return (
    <div className={classes.mainButtonContainer}>
      <ButtonBase
        className={[classes.mainButtonBase, classNameButton].join(" ")}
        disableRipple
      >
        <Typography
          className={[classes.mainButtonTextBase, classNameText].join(" ")}
        >
          {mainButtonText}
        </Typography>
      </ButtonBase>
    </div>
  );
};

export default MainButton;
