import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ThemeProvider } from '@mui/material/styles';
import { appTheme } from './theme/index.ts';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={appTheme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
)
