import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>Placeholder</div>
    </ThemeProvider>
  );
};

export default App;
