// Setup 01 : Simple setup Row1
import DashboardBox from "@/components/DashboardBox"
import {useGetKpisQuery} from "@/state/api"

// Setup 02 : Setup recharts components
import {ResponsiveContainer, 
        AreaChart, 
        CartesianGrid, 
        XAxis, 
        YAxis, 
        Legend, 
        Tooltip, 
        Area, 
        Line, 
        LineChart,
        Bar,
        BarChart,
      } from "recharts"
import { useTheme } from "@mui/material";
import { useMemo } from "react";

// Setup 03 : Setup Header and Titles
import BoxHeader from "@/components/BoxHeader";
// Move props setup to BoxHeader.tsx

// Setup ROW1 COL1 as Revenue and Expenses
const Row1 = () => {
  const { palette } = useTheme();
  const { data } = useGetKpisQuery();
  // Logging data from KPI database :
  console.log("data:", data);

  // Setup 7 : Adding data from MongoDB database
  // revenue data to our chart
    const revenue = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
        };
      })
    );
  }, [data]);

  // Setup 3 : Adding data from MongoDB database
  // revenueExpense data to our chart
    const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses,
        };
      })
    );
  }, [data]);

  // Step 6 : Adding data from MongoDB database
  // revenueProfit data to our chart
  const revenueProfit = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          profit: (revenue - expenses).toFixed(2),
        };
      })
    );
  }, [data]);
  
  return (
    <>
    {/* Setup Revenue and Expense Area Chart */}
    <DashboardBox gridArea="a">
      {/* Setup 5 : Header and Title of graphs */}
      <BoxHeader
          title="Revenue and Expenses"
          subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+4%"
      />
      {/* Setup 4 : Styling graphs for Revenue and Expenses */}
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={revenueExpenses}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 60,
            }}
          >
            {/* Styling Fade gradient for Revenue*/}
             <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            {/* Styling Fade gradient for Expense*/}
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            {/* Setup XAxis and YAxis */}
            <XAxis 
              dataKey="name" 
              tickLine={false}
              style={{fontSize:"10px"}}
            />
            <YAxis
              tickLine={false}
              axisLine={{strokeWidth:"0"}}
              style={{fontSize:"10px"}}
              domain={[8000,23000]}
            />
            
            {/* Calling Data from MongoDB database */}
            <Tooltip/>
            <Area 
              type="monotone" 
              dataKey="revenue"
              dot={true}
              stroke={palette.primary.main} 
              fillOpacity={1}
              fill="url(#colorRevenue)" 
            />
            <Area 
              type="monotone" 
              dataKey="expenses"
              dot={true}
              stroke={palette.primary.main} 
              fillOpacity={1}
              fill="url(#colorExpenses)" 
            />
          </AreaChart>
        </ResponsiveContainer>
    </DashboardBox>


{/* Setup 06 : Profit and Revenue Line Chart */}
    <DashboardBox gridArea="b">
        {/* Header and Title of graphs */}
      <BoxHeader
          title="Profit and Revenue"
          subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+4%"
      />
      {/* Styling graphs for Revenue and Expenses */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            data={revenueProfit}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]}/>
            {/* Kept XAxis to be the same */}
            <XAxis 
              dataKey="name" 
              tickLine={false}
              style={{fontSize:"10px"}}
            />
            {/* Modify YAxis as  */}
            <YAxis
              yAxisId="left"
              tickLine={false}
              axisLine={false}
              style={{fontSize:"10px"}}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{fontSize:"10px"}}
            />
            
            {/* Calling Data from MongoDB database */}
            <Tooltip/>
            {/* Adding XAxis taq name as profit and revenue */}
            <Legend
              height={20}
              wrapperStyle={{
                margin: "0 0 10px 0",
              }}
            />
            {/* Change area to line */}
            <Line 
            // Left is Profit value axis
              yAxisId="left"               
              type="monotone"
              dataKey="profit"
              stroke={palette.tertiary[500]}
            />
            <Line 
            // Right is Revenue value axis
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary.main} 
            />
          </LineChart>
        </ResponsiveContainer>
    </DashboardBox>

    {/* Setup 07 : Revenue Month by Month using Simple Bar Chart */}
    <DashboardBox gridArea="c">
      {/* Adding Title and Subtitle */}
      <BoxHeader
          title="Revenue Month by Month"
          subtitle="graph representing the revenue month by month"
          sideText="+4%"
      />
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={revenue}
          margin={{
            top: 17,
            right: 15,
            left: -5,
            bottom: 58,
          }}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={palette.primary[300]}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={palette.primary[300]}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke={palette.grey[800]} />
          <XAxis 
            dataKey="name"
            axisLine={false}
            tickLine={false}
            style={{fontSize:'10px'}}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            style={{fontSize:'10px'}}
          />
          <Tooltip />
          <Bar dataKey="revenue" fill="url(#colorRevenue)"  />
        </BarChart>
      </ResponsiveContainer>
    </DashboardBox>
    </>
  )
}

export default Row1



// Setup 04 : Final setup Row1
// import BoxHeader from "@/components/BoxHeader";
// import DashboardBox from "@/components/DashboardBox";
// import { useGetKpisQuery } from "@/state/api";
// import { useTheme } from "@mui/material";
// import { useMemo } from "react";
// import {
//   ResponsiveContainer,
//   CartesianGrid,
//   AreaChart,
//   BarChart,
//   Bar,
//   LineChart,
//   XAxis,
//   YAxis,
//   Legend,
//   Line,
//   Tooltip,
//   Area,
// } from "recharts";

// const Row1 = () => {
//   const { palette } = useTheme();
//   const { data } = useGetKpisQuery();

//   const revenue = useMemo(() => {
//     return (
//       data &&
//       data[0].monthlyData.map(({ month, revenue }) => {
//         return {
//           name: month.substring(0, 3),
//           revenue: revenue,
//         };
//       })
//     );
//   }, [data]);

//   const revenueExpenses = useMemo(() => {
//     return (
//       data &&
//       data[0].monthlyData.map(({ month, revenue, expenses }) => {
//         return {
//           name: month.substring(0, 3),
//           revenue: revenue,
//           expenses: expenses,
//         };
//       })
//     );
//   }, [data]);

//   const revenueProfit = useMemo(() => {
//     return (
//       data &&
//       data[0].monthlyData.map(({ month, revenue, expenses }) => {
//         return {
//           name: month.substring(0, 3),
//           revenue: revenue,
//           profit: (revenue - expenses).toFixed(2),
//         };
//       })
//     );
//   }, [data]);

//   return (
//     <>
//       <DashboardBox gridArea="a">
//         <BoxHeader
//           title="Revenue and Expenses"
//           subtitle="top line represents revenue, bottom line represents expenses"
//           sideText="+4%"
//         />
//         <ResponsiveContainer width="100%" height="100%">
//           <AreaChart
//             width={500}
//             height={400}
//             data={revenueExpenses}
//             margin={{
//               top: 15,
//               right: 25,
//               left: -10,
//               bottom: 60,
//             }}
//           >
//             <defs>
//               <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
//                 <stop
//                   offset="5%"
//                   stopColor={palette.primary[300]}
//                   stopOpacity={0.5}
//                 />
//                 <stop
//                   offset="95%"
//                   stopColor={palette.primary[300]}
//                   stopOpacity={0}
//                 />
//               </linearGradient>
//               <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
//                 <stop
//                   offset="5%"
//                   stopColor={palette.primary[300]}
//                   stopOpacity={0.5}
//                 />
//                 <stop
//                   offset="95%"
//                   stopColor={palette.primary[300]}
//                   stopOpacity={0}
//                 />
//               </linearGradient>
//             </defs>
//             <XAxis
//               dataKey="name"
//               tickLine={false}
//               style={{ fontSize: "10px" }}
//             />
//             <YAxis
//               tickLine={false}
//               axisLine={{ strokeWidth: "0" }}
//               style={{ fontSize: "10px" }}
//               domain={[8000, 23000]}
//             />
//             <Tooltip />
//             <Area
//               type="monotone"
//               dataKey="revenue"
//               dot={true}
//               stroke={palette.primary.main}
//               fillOpacity={1}
//               fill="url(#colorRevenue)"
//             />
//             <Area
//               type="monotone"
//               dataKey="expenses"
//               dot={true}
//               stroke={palette.primary.main}
//               fillOpacity={1}
//               fill="url(#colorExpenses)"
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </DashboardBox>

//       <DashboardBox gridArea="b">
//         <BoxHeader
//           title="Profit and Revenue"
//           subtitle="top line represents revenue, bottom line represents expenses"
//           sideText="+4%"
//         />
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart
//             width={500}
//             height={400}
//             data={revenueProfit}
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
//             <Legend
//               height={20}
//               wrapperStyle={{
//                 margin: "0 0 10px 0",
//               }}
//             />
//             <Line
//               yAxisId="left"
//               type="monotone"
//               dataKey="profit"
//               stroke={palette.tertiary[500]}
//             />
//             <Line
//               yAxisId="right"
//               type="monotone"
//               dataKey="revenue"
//               stroke={palette.primary.main}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </DashboardBox>
//       <DashboardBox gridArea="c">
//         <BoxHeader
//           title="Revenue Month by Month"
//           subtitle="graph representing the revenue month by month"
//           sideText="+4%"
//         />
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart
//             width={500}
//             height={300}
//             data={revenue}
//             margin={{
//               top: 17,
//               right: 15,
//               left: -5,
//               bottom: 58,
//             }}
//           >
//             <defs>
//               <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
//                 <stop
//                   offset="5%"
//                   stopColor={palette.primary[300]}
//                   stopOpacity={0.8}
//                 />
//                 <stop
//                   offset="95%"
//                   stopColor={palette.primary[300]}
//                   stopOpacity={0}
//                 />
//               </linearGradient>
//             </defs>
//             <CartesianGrid vertical={false} stroke={palette.grey[800]} />
//             <XAxis
//               dataKey="name"
//               axisLine={false}
//               tickLine={false}
//               style={{ fontSize: "10px" }}
//             />
//             <YAxis
//               axisLine={false}
//               tickLine={false}
//               style={{ fontSize: "10px" }}
//             />
//             <Tooltip />
//             <Bar dataKey="revenue" fill="url(#colorRevenue)" />
//           </BarChart>
//         </ResponsiveContainer>
//       </DashboardBox>
//     </>
//   );
// };

// export default Row1;
