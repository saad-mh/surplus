import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { Auth0Provider } from '@auth0/auth0-react';
import { theme } from './styles/theme';
import Layout from './components/layout/Layout';
import AppRoutes from './routes/index';
import { auth0Config } from './auth/auth0-config';
import './App.css';
import BusinessRoute from './components/auth/BusinessRoute';

function App() {
  return (
    <Auth0Provider {...auth0Config}>
      <ThemeProvider theme={theme}>
        
          <Layout>
            <AppRoutes />
          </Layout>
      </ThemeProvider>
    </Auth0Provider>
  );
}

export default App; 