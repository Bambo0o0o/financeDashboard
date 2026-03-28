# Build MERN financeDashboard

Last building time : 03:10:25 /5:23:37

link : <https://www.youtube.com/watch?v=uoJ0Tv-BFcQ>
myGitHub : <https://github.com/Bambo0o0o/mernReactDashboard.git>

<!-- Shortkey -->
1) In intellisence list we can automatic import tools by : ctrl + click on keyword
2) Run client : npm run dev
3) Run server :  npm run dev
4) Turn on console.log() by highlight word : ctrl + alt + l
5) Move multiple lines left (outdent) : Shift + Tab
6) Move multiple lines right (indent) : Tab

<!-- myGitHub -->
echo "# financeDashboard" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Bambo0o0o/financeDashboard.git
git push -u origin main
<!-- Existed Repository -->
git remote add origin https://github.com/Bambo0o0o/financeDashboard.git
git branch -M main
git push -u origin main

<!-- Project's Tools -->
node: <https://nodejs.org/en/download/>
npx: <https://www.npmjs.com/package/npx>
vscode: <https://code.visualstudio.com/download>
nodemon: <https://github.com/remy/nodemon>
vite: <https://vitejs.dev/guide/>
react router: <https://reactrouter.com/en/v6.3.0/get...>
react dropzone: <https://github.com/react-dropzone/react-dropzone>
redux toolkit: <https://redux-toolkit.js.org/introduction/getting-started>
redux toolkit query: <https://redux-toolkit.js.org/rtk-query/overview>
regression: <https://github.com/tom-alexander/regression-js>
mui: <https://mui.com/material-ui/getting-started/>
mui data grid: <https://mui.com/x/api/data-grid/data-grid/>
recharts: <https://recharts.org/en-US/>
flexbox guide: <https://css-tricks.com/snippets/css/a-guide-to-flexbox/>
css grid cheatsheet: <https://grid.malven.co/>
data model diagram: <https://lucid.app/documents#/home?folder_id=recent>
redux dev tools: <https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en>
pesticide extension: <https://chromewebstore.google.com/detail/pesticide/bakpbgckdnepkmkeaiomhmfcnejndkbi>
fly io node: <https://fly.io/docs/js/>
vercel: <https://vercel.com/>
docker: <https://www.docker.com/products/docker-desktop/>

<!-- Process Time -->
0:00 Build a Complete Finance App Dashboard that has ML Predictions
5:20 Basic and Frontend Installations
20:33 MUI Configurations and Themes
33:50 React Router and Navigation
59:00 Dashboard Layout
1:30:05 Redux Toolkit Setup and Configuration
1:39:40 Backend Installations
1:45:40 MongoDB Installation and Setup
1:54:08 Data Modeling
1:57:00 Key Performance Indicators Route
2:18:43 Recharts and Key Performance Indicators UI
3:03:37 Products UI and API
3:46:52 Transactions UI and API
4:37:20 Predictions and Machine Learning
5:10:18 Deployment of Application
5:22:21 Fully Complete Finance Machine Learning AI App Dashboard

<!-- Frontend tools installed -->

***We will used package.json by EdRoh will better API environment to study case***

  1) Make frontend directory : mkdir client
  2) Go to frontend folder : cd client
  3) Copy {package.json} by EdRoh to frontend root directory
  4) Install tools from {package.json} that file located : npm install
  5) Install vite package : npm create vite@4.1.0
     1) Project name : client
     2) Framework : React
     3) variant :  Typescript
     4) Go to client folder : cd client

**********************************************************************************

## Frontend setup tools and pages

1) NodeJs from : <https://nodejs.org/en/download/>
2) Install npx for npm package : npm install -g npx
3) Install VsCode text edtor : <https://code.visualstudio.com/download>
4) Install vite package : npm create vite@latest
     1) Project name : client
     2) Framework : React
     3) variant :  Typescript
     4) Go to client folder : cd client
     5) Install package from vite@latest : npm install
     6) Run frontend : npm run dev
5) Install packages : npm i react-redux @reduxjs/toolkit react-router-dom @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid
6) Install dependency packages : npm i -D @types/react-dom
7) Delete files : App.css
8) In {App.tsx} clear code in className="app" and delete all import
9) In {index.css} clear all code
10) In {index.css} add "inter" font from google fonts : @import url (...)
11) Setup {index.css} with style : html, body, #root, .app{...}
12) Setup eslint package : npm i -D eslint eslint-config-react-app
13) Create {eslintrc.json} in client folder then adding taq : "extends":"react-app"
14) Go to {App.tsx} checking eslint working fine by : build function as hello(); over return funtion we will see "underline-red-mark" show that this fuction not found in our application
    ***Eslint will help us to alert event abnormally by : Red-wavy-line***
15) Create environment local file {.env.local} then adding taq : VITE_BASE_URL : ....
16) Go to {tsconfig.json} file then adding taq(Let's us use URL in {.env.local} file) at the end as : "types":["vite/client"]
     <!-- Import import method by using @/dir instead of traditional method ../../dir -->
17) To improve import method to be better way by from "../../../ to be @/" instead : npm i -D @types/node
    1) Go to {vit.config.ts} file import path and adding : resolve: {alias:[{find:"@",replacement:path.resolve(__dirname,"src")}]}
    ***Warning Node depreciate : Option 'moduleResolution=node10' is deprecated and will stop functioning in TypeScript 7.0***
    ***Solve using framework as "React + Vite / Next.js" by : {"compilerOptions":"moduleResolution": "bundler"} in {tsconfig.json} file***
    ***Warning Node depreciate : Option 'esModuleInterop=false' is deprecated and will stop functioning in TypeScript 7.0.***
    ***Solve by : {"compilerOptions": {"esModuleInterop": true}}***
    2) In {tsconfig.json} file adding paths as : "paths":{"@/*":["./src/*"]}
    3) When need to jump to that src file can do by : "ctrl+click" on that path

## Setup : MUI Configurations and Themes (20:33)

1) Create {theme.ts} file in src folder
2) Copy data from EdRoh's file to here : <https://github.com/ed-roh/finance-app/blob/master/client/src/theme.ts>
   ***On this {theme.ts} file we can gradiant color by shot key after highlight code as : ctrl+K and ctrl+g***
   ***Which this option come from tailwind shage***
3) This {theme.ts} are configuration for : color shading, color palette and typography
4) Create {expanded-theme.ts} file to expnaded palette color in src folder
   1) Setup interface PaletteColor{} and interface Palette{}
5) Go to {App.tsx} in src folder using themeSetting{} function by adding :useMemo as themeSetting
6) Setup taqs : ThemeProvider and CssBaseline
7) Frontend run apps : npm run dev
8) To check work fine "ctrl+ click" on : <http://localhost:5173/>
   ***This process works fine with black background color and wording as "Hello This is a First app run"***

## Setup : Router navigator to Dashboard and Predictions pages (40:10)

***Keep in mind that folder architecture must be easiest as you can see***

1) Create three folder in src folder
   1) Create components folder to reusable elements on many location in our pages
   2) Create scenes folder to render main page in this case is : Dashboard and Prediciton
      1) Create dashboard folder in scenes folder
      2) Create predicitons folder in scenes folder
      3) Create navbar folder in scenes folder
   3) Create state folder to store data that reused to render many pages too.
2) Create {index.tsx} file in navbar folder
   1) Using shortkey for typescript as tsrafce
   2) Changing index name to be Navbar instead
   3) Import tools as : useState, Link, Box, Typography, useTheme
   4) Create params as : Navbar and palette
   5) Clarify Flexbox mechanism which refer to "justify-content" and "align-item" : <https://css-tricks.com/snippets/css/a-guide-to-flexbox/>
   6) Create {FlexBetween.tsx} in components folder
      1) Import Box and styled
      2) Move simple flexbox from (5) to {FlexBetween.tsx}
      3) Export FlexBetween
   7) Setup Left navbar in {index.tsx} file in navbar folder
      1) Using FlexBetween to layout : Icon and Page name
      2) Setup icon with Pix : <https://mui.com/material-ui/material-icons/?query=pi>
      3) Place PixIcon taq and decorative with fontSize as 28px
      4) Create Page name as "finDashboard" with Typography
   8) Setup Right navbar in {index.tsx} file in navbar folder
      1) Using FlexBetween to layout : Dashboard and Predictions buttons
      2) Setup Hover when mouse place on dashboard will change color
      3) Setup Link to navigate to dashboard page when was click
      4) Setup Hover when mouse place on predictions will change color
      5) Setup Link to navigate to predictions page when was click
3) Go to {App.tsx} to setup routes as : Dashboard and Predictions pages
   1) Import Dashboard
   2) Create route path navigate to dashboard page
   3) Go to Dashboard folder in scenes folder create {index.tsx}
      1) Create template by type : tsrafce
      2) Change name from index to Dashboard
      3) Create simple dashboard show page with lighter color as grey[300]
     ***Now we have to decision to use tools as Gird/FlexBox***
          ***FlexBox : used for one dimentsion as one line***
          ***Grid : used for more complexible as row/column***
          ***Link Grid info : <https://grid.malven.co/> and <https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/grid-template-areas>***
   4) In this project we will use : grid-template-areas
      1) We will design 3 columns and rows as : 3/3/4
      2) Structure of Grid is 10x9 unit
      3) Columns is 3 unit with : Split page to 3 columns, column min-width as 370px, Split as 1 frame page
      4) Rows is 2, 3, 4 units with : Split page to 10 rows, rom min-width as 60px, Split as 1 frame page
   5) Create gridTemplateColumns, gridTemplateRows, gridTemplateAreas
   6) Create each elements on gridTemplateAreas : a to j
      1) Create "a" to "j" element to show Grid layout :
          - (Box) bgcolor="#fff" gridArea="a" (/Box)
          - ...
          - (Box) bgcolor="#fff" gridArea="j" (/Box)
   7) Making responsive layout with small-large display grid
      1) Adding conditon function as : isAboveMediumScreens
      2) Setup conditon between : gridTemplateLargeScreens and gridTemplateSmallScreens
      3) Keep Grid layout as :
          - (Box) bgcolor="#fff" gridArea="a" (/Box)
          - ...
          - (Box) bgcolor="#fff" gridArea="j" (/Box)

   8) Create Styling for Grid elements as : DashboardBox
      1) Using DashboardBox instead of Box taq on each grid
          - (DashboardBox) bgcolor="#fff" gridArea="a" (/DashboardBox)
          - ...
          - (DashboardBox) bgcolor="#fff" gridArea="j" (/DashboardBox)
   9) Split Dashboard to be 3 Rows as : Row1, Row2, Row3
      1) Create {Row1.tsx}, {Row2.tsx}, {Row3.tsx} in scenes/dashboard folder
      2) Each file create template as : tsrafce
         1) Rows1 adding elements : "a", "b", "c"
         2) Rows2 adding elements : "d", "e", "f"
         3) Rows3 adding elements : "g", "h", "i", "j"
      3) Go to {index.tsx} in scenes/dashboard folder Adding taq as : (Row1/), (Row2/), (Row3/)
4) Create {api.tsx} in src/state folder
   1) Setup baseQuery as : getKpis, getProducts, getTransactions
   2) Setup baseURL to render data as : import.meta.env.VITE_BASE_URL
   3) Setup build.query to shows data KPIs, Products, Transactions on Dashboard
   4) To render KPIs to dashboard go to {Row1.tsx} adding : const {data} = useGetKpisQuery();
   5) Go to {main.tsx} file in src folder
      1) Import Provider from react-redux
      2) Import configureStore from @reduxjs/toolkit
      3) Import setupListerners from  @reduxjs/toolkit/query
      4) Import api from @/state/api
      5) Export store from {api.ts} and create api.middleware function
      6) Setup Provider to store
     ***Page ready to render data from backend and Database***

## Setup Backend to fetch data from database

***We will used package.json by EdRoh will better API environment to study case***

1) Back to root project financeDashboard folder : cd ..
2) Create backend folder on root project as : mkdir server
3) Go to server folder : cd server
4) Copy {package.json} by EdRoh to frontend root directory
5) Install tools from {package.json} that file located : npm install

**********************************************************************************

## Backend tools setup

1) Initialize package to create default {package.json} file : npm init -y
2) Install backend packages (1:41:40) : npm i express body-parser cors dotenv helmet morgan mongoose mongoose-currency
3) Install dependency package : npm i -D nodemon --force
4) Create {index.js} in server folder
   1) Import tools for backend : express body-parser cors dotenv helmet morgan mongoose mongoose-currency
   2) Adding "type" to {package.json} to be used import express: "type": "module"
   3) Adding "dev" to {package.json} to allow us run {index.js} file : "dev":"nodemon index.js"
   4) Setup tools app.use() as : express, helmet, morgan, body-parser, cors
   5) Test run server : console.log("Server run")
   6) Run server : npm run dev

## Setup MongoDB for finnDashboard

1) Setup MongoDB with new database
   1) Go to MongoDb as : <https://cloud.mongodb.com/v2#/org/61a38e44e178665975fbd2f9/projects/create>
   2) Create database name : finnDashboard
   3) Option setup : neglect
   4) Create cluster : <https://cloud.mongodb.com/v2/69c14e0929ccca266395266d#/clusters/starterTemplates>
   5) Deploy your cluster : Free
   6) Configurations name : cluster0
   7) Provider :aws
   8) Region : Singapore(ap-southeast-1)
   9) Click : Create Deployment
   10) Setup Username and Password
   11) Setup connection as : Drivers with NodeJs
   ***Password have to carefully when setup otherwise it will meet error when upload to webService**
   12) To be generate new password click as sidebar : Security Quickstart
   13) To be check connection complete on Cluster menu click : Browse Collection
   14) To get IP address go to Database & Network Access on sidebar select : IP Access List
2) Create {.env} file to keept database url
   ***Don't have any space or extra symbole in URL***
   1) Create URL : MONGO_URL='mongodb+srv://(username):(password)@cluster0.0qb99d5.mongodb.net/?appName=Cluster0'
   2) Create PORT(must align as client port in {.env.local} ) : 1337
3) Setup connection on {index.js} file in server folder
   1) Setup connection as : mongoose.connect(process.env.MONGO_URL, {})
   2) Seteup callBack function to check port connect : app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
   3) Setup catch error event : .catch((error) => console.log(`${error} did not connect`))
4) Create {.gitignore} file in server folder then adding taqs as :
      - .env
      - node_modules
5) Create data folder in server folder
   1) Create {data.js} in data folder
   2) Copy all datas from EdRoh's raw datas to {data.js}
   3) See concepts database link : <https://lucid.app/lucidchart/23d63d3a-f89c-472d-99d3-4c0a35c67816/edit?page=0_0#>

## Template Recharts(Reuseable)

      <ResponsiveContainer width="100%" height="100%">
        <BoxHeader
          title="Revenue Month by Month"
          subtitle="graph representing the revenue month by month"
          sideText="+4%"
        />
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
        }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

## Setup KPIs dashboard

   <!-- Backend setup -->
   1) Import kpi route in {index.js} in server folder as : kpiRoutes
   2) Create routes folder in server folder
   3) Create {kpi.js} file in routes folder then configurate kpi route
      1) Import express from express and KPI from models
      2) Create callBack function to monitoring connecting status
   4) Create models folder in server folder
   5) Create {KPI.js}file in models folder
      1) Import mongoose for create kpis schema
      2) Import loadType for mongoose-currency
      3) Create schema format for kpis as : daySchema, monthSchema, KPISchema
      4) In daySchema setup currency as : revenue, expenses, toJSON
      5) In monthSchema setup currency as : revenue, expenses, operationalExpenses, nonOperationalExpenses, toJSON
      6) In KPISchema setup currency as : totalProfit, totalRevenue, totalExpenses, expensesByCategory, monthlyData, dailyData, timestamps, toJSON
      7) Calling KPI schema as : mongoose.model("KPI", KPISchema)
      8) Export KPI schema
   6) In {index.js} in server folder import models as : KPI
   7) In {index.js} in server folder import raw data from {data.js} as : kpis
   8) Toggle dropDatabase taq on to upload data --> Save index.js --> Toggle dropDatabase taq off
   9) Toggle KPIs taq on to upload data --> Save index.js --> Toggle KPIs taq off
   ***Upload data must do one time then have to marks as note : 02:15:15**

   <!-- Frontend setup -->
   1) Go to {Row1.tsx} file create console.log() with data to check fetching data complete on browser development tools as : fetch/XHR
   2) On backend termical (server) got warning 304(mean loging to backend) as : GET /kpi/kpis/ HTTP/1.1" 304
   3) Go to rechart which is chart library : <https://recharts.github.io/?p=/en-US/>
   4) Install rechart to our client folder : npm install recharts
   5) Run client again : npm run dev
   6) Go to example tab and select "SimpleAreaChart" and copy taq : ResponsiveContainer or AreaChart
   7) Place them in {Row1.tsx} file between DashboardBox taq of gridArea "a"
   8) Import recharts tools as : ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area
   9) Adding ResponsiveContainer and AreaChart taq in return function
   10) Adding revenueExpenses getData from database
   11) Changing getKpis taq in {api.ts} from build.query as (void,void) to be Array(GetKpisResponse,void)
   12) Create {types.ts} in state folder setup interface as : ExpensesByCategory, Month, Day, GetKpisResponse
   13) In {api.ts} file import GetKpisResponse
   14) In {Row1.tsx} file change value from data={data} to data={revenueExpenses} in AreaChart<> taq
   ***Server error cannot access database mongoDB atlas from IP adress isn't whitelisted**
   ***Solve by : Go to mongoDB atlas then whitlist IP address**

## Setup Revenue and Expenses Row1Column1

### Setup Revenue area graph(KPIs dash board)

   1) In {Row1.tsx} file change value from dataKey="uv" to dataKey="revenue"
   2) In {Row1.tsx} Indentify palette before const {data} with : const {palette} = useTheme()
   3) Import useTheme from @mui/material
   4) In {Row1.tsx} file change value from stroke="#8884d8" to stroke={palette.primary.main}
   5) In {Row1.tsx} Adding fillOpacity as before fill: 1
   6) In {Row1.tsx} file change value from fill="#8884d8" to fill="url(#colorRevenue)"
   7) In {Row1.tsx} adding dot taq after datakey as : dot={true}

#### Setup Expenses area graph(KPIs dash board)

   1) In {ROw1.tsx} repeat format area taq in dataKey from reveneu to expenses as dataKey="expenses"
   2) In {ROw1.tsx} in expense area then change fill="url(#colorRevenue)" to fill="url(#colorExpenses)"
   3) In {Row1.tsx} in expense area taq adding dot taq after datakey as : dot={true}

#### Setup XAxis and YAxis and Setup fading area under graph

   1) In {Row1.tsx} in XAxis taq cancel tickline as : tickLine={false}
   2) In {Row1.tsx} in XAxis taq styling as : style={{fontSize:"10px"}}
   3) In {Row1.tsx} in XAxis taq datakey name must change "Name" to be "name"
   4) In {Row1.tsx} in YAxis copy taq same XAxis to YAxis then
      1) Delete datakey taq
      2) Adding axisLine as : strokeWidth "0"
      3) Adjusting YAxis gap value as domain(between value) : 8000,23000
      4) Deleting Catesian taq as : CartesianGrid strokeDasharray
   5) Adding Fading(Shaded) under graph area by
      1) Adding defs taq above XAxis taq
      2) Adding linearGradient taq and setup Fading(Shaded) for colorRevenue and colorExpenses as : offset, stopColor, stopOpacity
   6) Custromize graph margins as : top 15, right 25, left -10, bottom 60,

#### Setup Header and Title

   1) Create {BoxHeader.tsx} in components folder
   2) Using template as : tsrafce
   3) Import @mui/material, FlexBetween and React
   4) Setup type Properties as : Props
   5) Setup callBack function as : BoxHeader()
   6) Adding palette constance by useTheme
   7) Create return value as : FlexBetween, Typography and Styling
   8) Export boxHeader
   9) In {Row1.tsx} file import BoxHeader
   10) Adding BoxHeader above ResponsiveContainer taqs
       1) Setup title, subtitle, sideText

## Setup Profit and Revenue Row1Column2

### Setup modified taq from revenue-expenses to be Profit-Revenue using : Biaxial Line Chart

1) Go to Recharts with Biaxial Line Chart as : <https://recharts.github.io/en-US/examples/BiaxialLineChart/>
2) In {Row1.tsx} file copy setup revenue and expenses in </DashboardBox gridArea="a"> taq
3) Place setup in </DashboardBox gridArea="b">
4) Change "Area" taq to be "Line" taq in AreaChart taq
5) Kept XAxis setup to be the same as before
6) Modify YAxis as
   1) Adding yAxisID as : "left"
   2) Modify axisLine as : false
   3) Delete domain taq
   4) Duplicate YAxis below left and set as " right
   5) Setup orientation to be "right"
7) Import Line to recharts
8) Delete defs taq and inside there
9) Adding CartesianGrid taq above XAxis taq then setup : vertical and stroke
10) Clearing taq in first Line taq and adding "yAxisID" as : left
11) In first Line taq adding type as : monotone
12) In first Line taq adding dataKey as : profit
13) In first Line taq adding stroke as : palette.teriary[500]
14) Copy taqs from first Line to second Line and modify as 
    1) Change yAxisId "left" to be "right"
    2) Change dataKey "profit" to be "revenue"
    3) Change stroke to be : palette.primary.main
15) Adding Legend taq above first Line taq then setup : height, wrapperStyle, margin
16) Import Legend to recharts
17) In AreaChart remove width and height
18) Changing AreaChart taq to be LineChart taq
19) Changing source of data from mongoDB on data taq from "revenueExpense" to be revenueProfit
20) Modify margin to be : top 20, right 0,left -10,bottom 55
21) Fetching data from mongoDB to our chart by
    1) Copy "revenueExpense" callBack function and change name to "revenueProfit"
    2) Change return taq from "expenses" to "profit"
    3) Change value from "expenses" to "revenue-expenses"
    4) Setup digit math for revenue-expense to be 2 digit by .toFixed(2) as : profit: (revenue - expenses).toFixed(2)

## Setup Revenue Month by Month Row1Column3

### Setup modified taq from revenue-expenses to be Revenue Month by Month using : Simple Bar Chart

1) Go to Recharts with Simple Bar Chart as : <https://recharts.github.io/en-US/examples/SimpleBarChart/>
   <!-- All here working in {Row1.tsx} -->
2) Copy code in return taq to our {Row1.tsx} as : BarChart
3) Copy BoxHeader and place above Barchart taq
4) Change title as : Revenue Month by Month
5) Cange sutitle as : graph representing the revenue month by month
6) Adding more import to Recharts as : BarChart, Bar
7) Change margin to be : : top 17, right 15,left -5,bottom 58
8) Fetch data from mongoDB to chart by change data value as : data={revenue}
9) Change CartesianGrid to be : vertical={false} stroke={palette.grey[800]}
10) Setup XAxis by adding : dataKey, axisLine, tickLine, style
11) Setup YAxis by adding : axisLine, tickLine, style
12) Delete Legend taq
13) Keep only one Bar taq then
    1) Change dataKey to be : "revenue"
    2) Adding defs taq above above CartesianGrid
    3) Copy linearGradient(Revenue) from revenue-expenses chart then place in defs taq
    4) In Bar taq change fill value to be : "url(#colorRevenue)"
14) Copy callBack function "revenueExpenses() and place above revenueExpenses()
    1) Change name to "revenue"
    2) Delete expense in return taq

***Remind tools : Nivo charts will setup one environtment then reuseable to others charts***
***But Recharts have to setup own environment on every charts***

## Back to Backend setup for Dashbord Row2 : Products

<!-- Backend setup -->
1) Setup {index.js} file in server folder
   1) Adding productRoutes as : app.use("/product", productRoutes)
   2) Import productRoutes from /routes/product.js
   3) Import product from /models/product.js

2) Create {product.js} file in routes folder
   1) Copy code from {kpi.js} in routes folder to {product.js} file
   2) Keep import express and product
   3) Create express Router as : express.Router()
   4) Change name router from "/kpis" to be "/products"
   5) Change find function from KPI to : Product.find()
   6) Keep callBack function to fetch data from MongoDB database as : router.get("/products", async (req, res) => {}
   7) Keep catch up status for : 200 and 400

3) Create {Product.js} file in models folder (Is command to upload data from {data.js} to MongoDB)
   1) Copy code from {KPI.js} file in models folder to {Product.js} file
   2) Keep import mongoose and loadType
   3) Keep only KPISchema then delete month and day schemas
   4) Change name KPISchema to be ProductSchema
   5) Change export KPI to be Product
   6) Change const KPI name to Product name as : mongoose.model("Product", ProductSchema)
   7) Delete other schemas and setup here
      1) Change totalProfit to be price(This is currency)
      2) Change totalRevenue to be expense(This is currency)
      3) Change totalExpense to be transactions(This is array) : Move all and place inside []
      4) In transactions taq change "type" as ==> type: mongoose.Schema.Types.ObjectId
      5) In transactions taq delete other then add "ref" as ==> ref: "Transaction"

4) Create {Transaction.js} in models folder (Is command to upload data from {data.js} to MongoDB)
   1) Copy code from {Product.js} file in models folder to {Transaction.js} file
   2) Keep import mongoose and loadType
   3) Change name ProductSchema to be TransactionSchema
   4) Change export Product to be Transaction
   5) Change const Product name to Transaction name as : mongoose.model("Transaction", TransactionSchema)
   6) Change schema elements as
      1) Change price to be buyer(This is string)
      2) Change expense to be amount(This is currency)
      3) Change transactions to be productIds(This is array) : Move all and place inside []
      4) In productIds taq keep "type" as ==> type: mongoose.Schema.Types.ObjectId
      5) In productIds taq change "ref" value as ==> ref: "Product"
   ***Observation : Transaction and Product are referenced together by ObjectId as this Structure : <https://lucid.app/lucidchart/23d63d3a-f89c-472d-99d3-4c0a35c67816/edit?page=0_0#>***

5) Adding "products" to import data as : import { kpis, products } from "./data/data.js"
6) Upload Products to MongoDB "onetime" as : Product.insertMany(products)
7) Toggle "Product.insertMany" taq on to upload data --> Save index.js --> Toggle Products taq off
   ***Upload data must do one time then have to marks as note : 03:12:15**
