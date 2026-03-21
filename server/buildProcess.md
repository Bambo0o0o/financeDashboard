# Build MERN financeDashboard

Last building time :   00:18:32 /5:23:37

link : <https://www.youtube.com/watch?v=uoJ0Tv-BFcQ>
myGitHub : <https://github.com/Bambo0o0o/mernReactDashboard.git>

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
    4) 