import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { Auth0Provider } from '@auth0/auth0-react';
import { theme } from './styles/theme';
import Layout from './components/layout/Layout';
import AppRoutes from './routes/index';
import { auth0Config } from './auth/auth0-config';
import './App.css';

function App() {
  return (
    <Auth0Provider {...auth0Config}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </Auth0Provider>
  );
}

export default App; 