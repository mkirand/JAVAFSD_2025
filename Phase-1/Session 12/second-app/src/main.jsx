import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ThemeProvider from './components/theme/ThemeContext.jsx';
import AuthProvider from './components/authContext/AuthContext.jsx';

createRoot(document.getElementById('root')).render(

  <ThemeProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ThemeProvider>,
)
