// Setup 01 : Simple setup Row2
import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import { useGetKpisQuery, useGetProductsQuery } from "@/state/api";
import { Box, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

// Creat pieData array which didn't fetching data from database just hard code
const pieData = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 400 },
];

const Row2 = () => {
  const { palette } = useTheme();
  // Adding palette for pieColor
  const pieColors = [palette.primary[800], palette.primary[300]];
  // Adding fetching data route from backend
  const { data: operationalData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  // Log fetching data from server complete
  console.log("data:", operationalData);

  // Setup 10 : Adding data from MongoDB database
  // productExpenseData data to our chart
  const productExpenseData = useMemo(() => {
    return (
      productData &&
      productData.map(({ _id, price, expense }) => {
        return {
          id: _id,
          price: price,
          expense: expense,
        };
      })
    );
  }, [productData]);

  // Setup 8 : Adding data from MongoDB database
  // operationalExpenses data to our chart
  const operationalExpenses = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3),
            // Name in ".." must be same as dataKey in return tag
            "Operational Expenses": operationalExpenses,
            "Non-Operational Expenses": nonOperationalExpenses,
          };
        },
      )
    );
  }, [operationalData]);

  return (
    <>
      {/* Setup 08 : operationalExpenses using Line Chart */}
      <DashboardBox gridArea="d">
        {/* Header and Title of graphs */}
        <BoxHeader
          title="Operational vs Non-Operational Expenses"
          // subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+4%"
        />
        {/* Styling graphs for Revenue and Expenses */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            data={operationalExpenses}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            {/* Kept XAxis to be the same */}
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            {/* Modify YAxis as  */}
            <YAxis
              yAxisId="left"
              orientation="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            {/* Change area to line */}
            <Line
              // Left is Non-Operational value axis
              yAxisId="left"
              type="monotone"
              dataKey="Non-Operational Expenses"
              stroke={palette.tertiary[500]}
            />
            <Line
              // Right is Operational Expenses value axis
              yAxisId="right"
              type="monotone"
              dataKey="Operational Expenses"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>

      {/* Setup 09 : Campaigns and Targets using Pie-Chart */}
      <DashboardBox gridArea="e">
        <BoxHeader title="Campaigns and Targets" sideText="+4%" />
        <FlexBetween mt="0.25rem" gap="1.5rem" pr="1rem">
          <PieChart
            width={110}
            height={100}
            margin={{
              top: 0,
              right: -10,
              left: 10,
              bottom: 0,
            }}
          >
            <Pie
              stroke="none"
              data={pieData}
              innerRadius={18}
              outerRadius={38}
              paddingAngle={2}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index]} />
              ))}
            </Pie>
          </PieChart>
          {/* Adding Hardcode for column 2 and column 3 details */}
          <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
            <Typography variant="h5">Target Sales</Typography>
            <Typography m="0.3rem 0" variant="h3" color={palette.primary[300]}>
              83
            </Typography>
            <Typography variant="h6">
              Finance goals of the campaign that is desired
            </Typography>
          </Box>
          <Box flexBasis="40%">
            <Typography variant="h5">Losses in Revenue</Typography>
            <Typography variant="h6">Losses are down 25%</Typography>
            <Typography mt="0.4rem" variant="h5">
              Profit Margins
            </Typography>
            <Typography variant="h6">
              Margins are up by 30% from last month.
            </Typography>
          </Box>
        </FlexBetween>
      </DashboardBox>

      {/* Setup 10 : Product Prices VS Expenses using Scatter-Chart */}
      <DashboardBox gridArea="f">
        <BoxHeader title="Product Prices VS Expenses" sideText="+4%" />
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            // responsive
            margin={{
              top: 20,
              right: 25,
              bottom: 40,
              left: -10,
            }}
          >
            <CartesianGrid stroke={palette.grey[800]} />
            <XAxis
              type="number"
              dataKey="price"
              name="price"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <YAxis
              type="number"
              dataKey="expense"
              name="expense"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <ZAxis type="number" range={[20]} />
            <Tooltip formatter={(v) => `$${v}`} />
            <Scatter
              name="Product Expense Ratio"
              data={productExpenseData}
              fill={palette.tertiary[500]}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row2;

// Setup 02 : Final setup Row2
// import BoxHeader from "@/components/BoxHeader";
// import DashboardBox from "@/components/DashboardBox";
// import FlexBetween from "@/components/FlexBetween";
// import { useGetKpisQuery, useGetProductsQuery } from "@/state/api";
// import { Box, Typography, useTheme } from "@mui/material";
// import React, { useMemo } from "react";
// import {
//   Tooltip,
//   CartesianGrid,
//   LineChart,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
//   ScatterChart,
//   Scatter,
//   ZAxis,
// } from "recharts";

// const pieData = [
//   { name: "Group A", value: 600 },
//   { name: "Group B", value: 400 },
// ];

// const Row2 = () => {
//   const { palette } = useTheme();
//   const pieColors = [palette.primary[800], palette.primary[300]];
//   const { data: operationalData } = useGetKpisQuery();
//   const { data: productData } = useGetProductsQuery();

//   const operationalExpenses = useMemo(() => {
//     return (
//       operationalData &&
//       operationalData[0].monthlyData.map(
//         ({ month, operationalExpenses, nonOperationalExpenses }) => {
//           return {
//             name: month.substring(0, 3),
//             "Operational Expenses": operationalExpenses,
//             "Non Operational Expenses": nonOperationalExpenses,
//           };
//         }
//       )
//     );
//   }, [operationalData]);

//   const productExpenseData = useMemo(() => {
//     return (
//       productData &&
//       productData.map(({ _id, price, expense }) => {
//         return {
//           id: _id,
//           price: price,
//           expense: expense,
//         };
//       })
//     );
//   }, [productData]);

//   return (
//     <>
//       <DashboardBox gridArea="d">
//         <BoxHeader
//           title="Operational vs Non-Operational Expenses"
//           sideText="+4%"
//         />
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart
//             data={operationalExpenses}
//             margin={{
//               top: 20,
//               right: 0,
//               left: -10,
//               bottom: 55,
//             }}
//           >
//             <CartesianGrid vertical={false} stroke={palette.grey[800]} />
//             <XAxis
//               dataKey="name"
//               tickLine={false}
//               style={{ fontSize: "10px" }}
//             />
//             <YAxis
//               yAxisId="left"
//               orientation="left"
//               tickLine={false}
//               axisLine={false}
//               style={{ fontSize: "10px" }}
//             />
//             <YAxis
//               yAxisId="right"
//               orientation="right"
//               tickLine={false}
//               axisLine={false}
//               style={{ fontSize: "10px" }}
//             />
//             <Tooltip />
//             <Line
//               yAxisId="left"
//               type="monotone"
//               dataKey="Non Operational Expenses"
//               stroke={palette.tertiary[500]}
//             />
//             <Line
//               yAxisId="right"
//               type="monotone"
//               dataKey="Operational Expenses"
//               stroke={palette.primary.main}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </DashboardBox>
//       <DashboardBox gridArea="e">
//         <BoxHeader title="Campaigns and Targets" sideText="+4%" />
//         <FlexBetween mt="0.25rem" gap="1.5rem" pr="1rem">
//           <PieChart
//             width={110}
//             height={100}
//             margin={{
//               top: 0,
//               right: -10,
//               left: 10,
//               bottom: 0,
//             }}
//           >
//             <Pie
//               stroke="none"
//               data={pieData}
//               innerRadius={18}
//               outerRadius={38}
//               paddingAngle={2}
//               dataKey="value"
//             >
//               {pieData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={pieColors[index]} />
//               ))}
//             </Pie>
//           </PieChart>
//           <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
//             <Typography variant="h5">Target Sales</Typography>
//             <Typography m="0.3rem 0" variant="h3" color={palette.primary[300]}>
//               83
//             </Typography>
//             <Typography variant="h6">
//               Finance goals of the campaign that is desired
//             </Typography>
//           </Box>
//           <Box flexBasis="40%">
//             <Typography variant="h5">Losses in Revenue</Typography>
//             <Typography variant="h6">Losses are down 25%</Typography>
//             <Typography mt="0.4rem" variant="h5">
//               Profit Margins
//             </Typography>
//             <Typography variant="h6">
//               Margins are up by 30% from last month.
//             </Typography>
//           </Box>
//         </FlexBetween>
//       </DashboardBox>
//       <DashboardBox gridArea="f">
//         <BoxHeader title="Product Prices vs Expenses" sideText="+4%" />
//         <ResponsiveContainer width="100%" height="100%">
//           <ScatterChart
//             margin={{
//               top: 20,
//               right: 25,
//               bottom: 40,
//               left: -10,
//             }}
//           >
//             <CartesianGrid stroke={palette.grey[800]} />
//             <XAxis
//               type="number"
//               dataKey="price"
//               name="price"
//               axisLine={false}
//               tickLine={false}
//               style={{ fontSize: "10px" }}
//               tickFormatter={(v) => `$${v}`}
//             />
//             <YAxis
//               type="number"
//               dataKey="expense"
//               name="expense"
//               axisLine={false}
//               tickLine={false}
//               style={{ fontSize: "10px" }}
//               tickFormatter={(v) => `$${v}`}
//             />
//             <ZAxis type="number" range={[20]} />
//             <Tooltip formatter={(v) => `$${v}`} />
//             <Scatter
//               name="Product Expense Ratio"
//               data={productExpenseData}
//               fill={palette.tertiary[500]}
//             />
//           </ScatterChart>
//         </ResponsiveContainer>
//       </DashboardBox>
//     </>
//   );
// };

// export default Row2;
