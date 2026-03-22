// Setup 01 : To initial run frontend
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'                 //Using @/ instead of ./ ---> Jump to App.tsx
import '@/index.css'                    //Using @/ instead of ./ ---> Jump to client.d.ts

// Setup 02 : To Provider tool for KPIs, Products, Transactions in api.ts
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "@/state/api";

export const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

// Setup 01 : To initial run frontend
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // Setup 02 : Change "React.StrictMode" to be "Provider"
  <Provider store={store}>
    <App />
  </Provider>
)
