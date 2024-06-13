import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'


const theme = createTheme({
  palette: {
    primary: {
      main: "#177762",
    },

    secondary: {
      main: "#4b615d",
      lightText: "grey"
    }
  },
  typography:{
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  }
}) ;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
