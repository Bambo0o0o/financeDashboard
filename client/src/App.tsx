// Setup 01 : themeSetting
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

// Setup 02 : routePaths
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/scenes/navbar";
// import Dashboard from "@/scenes/dashboard";
// import Predictions from "@/scenes/predictions";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    // Setup 01 : themeSetting
    
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/> 
          {/* Hello This is a First app run */}

          {/* Setup 02 : Routing to each paths */}
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              {/* For render check : Dashboar and Prediction */}
                <Route path="/" element={<div>Dashboard page</div>} />
                <Route path="/predictions" element={<div>Predictions page</div>} />

              {/* Setup 03 : Final complete page Rendering */}
              {/* <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<Predictions />} /> */}
              {/* End Setup 03 */}

            </Routes>
          </Box>
          {/* End Setup 02 */}
          
        </ThemeProvider>
      </BrowserRouter>
    </div>
    // End Setup 01
  );
}


export default App;
