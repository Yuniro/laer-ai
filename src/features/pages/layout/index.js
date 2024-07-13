import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import styled from '@mui/material/styles/styled';
import useTheme from '@mui/styles/useTheme';
import { useModalContext } from 'contexts/modal-context';
import { StatusContext } from 'contexts/status-context';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { RequestDemoDialog } from '../../../components/request-demo-dlg';
import Footer from './footer';
import Header from './header';

const Main = styled('main')(
  ({ theme }) => ({
    ...theme.typography.mainContent,
    borderRadius: 0,
    padding: 0,
    flexGrow: 1,
    width: '100%',
    margin: 'auto',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shorter
    }),
    backgroundColor: 'transparent',
  })
);

// ==============================|| MAIN LAYOUT ||============================== //

const PublicLayout = () => {
  const theme = useTheme();
  const { open, demo, closeDialog } = useModalContext();
  const { mounted } = useContext(StatusContext);
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      <Header />

      <Main theme={theme}>
        <Outlet />
      </Main>

      {mounted && <Footer />}

      <RequestDemoDialog
        title={demo ? 'Request a demo' : 'Request Resources'}
        btnTitle={demo ? 'Request Demo' : null}
        open={open}
        onClose={closeDialog}
      />
    </Box>
  );
};

export default PublicLayout;
