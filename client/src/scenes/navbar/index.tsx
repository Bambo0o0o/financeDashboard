// Setup 01 :
import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";

// Setup 02 :
import FlexBetween from "@/components/FlexBetween";
import PixIcon from "@mui/icons-material/Pix";           //Come from : <https://mui.com/material-ui/material-icons/?query=pi>


type Props = {};

const Navbar = (props: Props) => {
  // Setup 01 : Palette and selected
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");       //setState when we selected the page, default is Dashboard
  return (
    // Setup 01 : Setup simpleFlexBox and move it to FlexBetween.tsx
    // <Box display="flex" justifyContent="space-between" alignItems="center"></Box>

    // Setup 02 : Using FlexBetween component from simpleFlexBox
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE : Logo and finDashboard */}
      <FlexBetween gap="0.75rem">
        {/* Icon come from : https://mui.com/material-ui/material-icons/?query=pi*/}
        <PixIcon sx={{ fontSize: "28px" }} />                 
        <Typography variant="h4" fontSize="16px">
          finnDashboard
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE : dashboard and predicitons button*/}
      <FlexBetween gap="2rem">
        {/* Setup for : Dashboard button decorative by material UI*/}
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            // Decorative by React-Router-DOM
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            dashboard
          </Link>
        </Box>
        
        {/* Setup for : Predictions button decorative by material UI*/}
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            // Decorative by React-Router-DOM
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
