import React, { useState } from "react";
import './App.css';
import Mapcoordinates from "./components/mapcoordinates/mapcoordinates";
// import Switch from "@material-ui/core/Switch";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { lightBlue, deepPurple } from "@material-ui/core/colors";




function App() {
  //const classes = useStyles();
  const [darkState] = useState(true);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? "#272727" : lightBlue[500];
  const mainSecondaryColor = darkState ? lightBlue[500] : deepPurple[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });



  // const handleThemeChange = () => {
  //   setDarkState(!darkState);
  // };
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <header className="App-header">
          {/* <Switch checked={darkState} onChange={handleThemeChange} /> */}
          {/* <Signup /> */}

          <div className="App-map">
            <Mapcoordinates />
          </div>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
