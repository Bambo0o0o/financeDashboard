// Setup 01 : Simple dashboard page to show it work fine
import {Box, useMediaQuery, useTheme} from '@mui/material'

// type Props = {}
// const Dashboard = (props: Props) => {
//   const {palette} = useTheme();
//   return (
//       <Box color={palette.grey[300]}>Dashboard</Box>
//   )
// }

//Setup 02 : Grid layout as ---"static page"
//Grid layout for Normal screen : Each letter is an elemeny on layouts which contain 10 elements
// const gridTemplate =`
//   "a b c"
//   "a b c"
//   "a b c"
//   "a b f"
//   "d e f"
//   "d e f"
//   "d h i"
//   "g h i"
//   "g h j"
//   "g h j"
// `
// const Dashboard = () => {
//   const {palette} = useTheme();
//   return (
//     // Adding responsive page with small-large page as ---"dynamic responsive page"
//     <Box width="100%" height="100%" display="grid"gap="1.5rem"
//       sx={{
//             gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
//             gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
//             gridTemplateAreas:gridTemplate,
//       }}
//     >
//     {/* Setup Dashboard to show layout which we create as a to j  */}
//       <Box bgcolor="#fff" gridArea="a"></Box>
//       <Box bgcolor="#fff" gridArea="b"></Box>
//       <Box bgcolor="#fff" gridArea="c"></Box>
//       <Box bgcolor="#fff" gridArea="d"></Box>
//       <Box bgcolor="#fff" gridArea="e"></Box>
//       <Box bgcolor="#fff" gridArea="f"></Box>
//       <Box bgcolor="#fff" gridArea="g"></Box>
//       <Box bgcolor="#fff" gridArea="h"></Box>
//       <Box bgcolor="#fff" gridArea="i"></Box>
//       <Box bgcolor="#fff" gridArea="j"></Box>
//     </Box>
//   )
// }


//Setup 03 : Grid layout as ---"Dynamic page"
const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`;
const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`;

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  const {palette} = useTheme();
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      {/* Setup Dashboard to show layout which we create as a to j  */}
        <Box bgcolor="#fff" gridArea="a"></Box>
        <Box bgcolor="#fff" gridArea="b"></Box>
        <Box bgcolor="#fff" gridArea="c"></Box>
        <Box bgcolor="#fff" gridArea="d"></Box>
        <Box bgcolor="#fff" gridArea="e"></Box>
        <Box bgcolor="#fff" gridArea="f"></Box>
        <Box bgcolor="#fff" gridArea="g"></Box>
        <Box bgcolor="#fff" gridArea="h"></Box>
        <Box bgcolor="#fff" gridArea="i"></Box>
        <Box bgcolor="#fff" gridArea="j"></Box>
    </Box>
  );
};

// Setup 04 : Complete setup and Layout
// import { Box, useMediaQuery } from "@mui/material";
// import Row1 from "./Row1";
// import Row2 from "./Row2";
// import Row3 from "./Row3";

// // Alphabet a to j is the Grid components on our dashboard which we have 10 elements as : a to j
// // 4x3, 4x3, 3x3
// // 3x3, 2x3, 3x3
// // 3x3, 4x3, 2x3 and 2x3
// // On each elements unit as below, Alphabet will list left-right and top-down
// const gridTemplateLargeScreens = `
//   "a b c"
//   "a b c"
//   "a b c"
//   "a b f"
//   "d e f"
//   "d e f"
//   "d h i"
//   "g h i"
//   "g h j"
//   "g h j"
// `;
// const gridTemplateSmallScreens = `
//   "a"
//   "a"
//   "a"
//   "a"
//   "b"
//   "b"
//   "b"
//   "b"
//   "c"
//   "c"
//   "c"
//   "d"
//   "d"
//   "d"
//   "e"
//   "e"
//   "f"
//   "f"
//   "f"
//   "g"
//   "g"
//   "g"
//   "h"
//   "h"
//   "h"
//   "h"
//   "i"
//   "i"
//   "j"
//   "j"
// `;

// const Dashboard = () => {
//   const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
//   return (
//     <Box
//       width="100%"
//       height="100%"
//       display="grid"
//       gap="1.5rem"
//       sx={
//         isAboveMediumScreens
//         // Setup Grid layout as 3:3:4 units
//           ? {
//               gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",     //Split page to 3 columns, column min-width as 370px, Split as 1 frame page
//               gridTemplateRows: "repeat(10, minmax(60px, 1fr))",        //Split page to 10 rows, rom min-width as 60px, Split as 1 frame page
//               gridTemplateAreas: gridTemplateLargeScreens,
//             }
//           : {
//               gridAutoColumns: "1fr",
//               gridAutoRows: "80px",
//               gridTemplateAreas: gridTemplateSmallScreens,
//             }
//       }
//     >
//       {/* Setup each Unit element on dashboard page */}
//       <Row1 />
//       <Row2 />
//       <Row3 />
//     </Box>
//   );
// };

export default Dashboard;
