import { Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './common/Navbar';
import AppRoutes from './Routes';
import GlobalStyle from '../styles/global-styles';

function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="React Boilerplate | %s "
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <NavBar />
      <Container>
        <AppRoutes />
      </Container>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
