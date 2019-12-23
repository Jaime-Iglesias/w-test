import React from "react";
import { makeStyles } from "@material-ui/styles";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";

import MainContent from "./components/MainContent/MainContent";

const useStyles = makeStyles({
  root: {
    margin: 0,
    position: "absolute",
    padding: 0,
    height: "100%",
    minHeight: 980,
    minWidth: "100%",
    top: 0,
    left: 0
  }
});

const getLibrary = provider => {
  return new Web3(provider);
};

const App = () => {
  const classes = useStyles();

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className={classes.root}>
        <MainContent />
      </div>
    </Web3ReactProvider>
  );
};

export default App;
