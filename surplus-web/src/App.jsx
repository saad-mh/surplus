import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';
import Layout from './components/layout/Layout';
import AppRoutes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App; 