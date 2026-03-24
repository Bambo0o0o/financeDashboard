# Build MERN financeDashboard

Last building time :   1:57:10 /5:23:37

link : <https://www.youtube.com/watch?v=uoJ0Tv-BFcQ>
myGitHub : <https://github.com/Bambo0o0o/mernReactDashboard.git>

<!-- Shortkey -->
1) In intellisence list we can automatic import tools by : ctrl + click on keyword
2) Run client : npm run dev
3) Run server :  npm run dev

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
   3) See concepts database link : <https://lucid.app/lucidchart/23d63d3a-f89c-472d-99d3-4c0a35c67816/edit?invitationId=inv_863ef5c2-6c3d-42ec-85da-c522ddb15430&page=0_0#>

## Setup KPIs dashboard

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
   ***Upload data must do one time then have to marks as note**
   