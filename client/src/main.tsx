import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'                 //Using @/ instead of ./ ---> Jump to App.tsx
import '@/index.css'                    //Using @/ instead of ./ ---> Jump to client.d.ts

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
