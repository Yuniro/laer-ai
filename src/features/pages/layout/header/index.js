import styled from '@mui/material/styles/styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RequestDemoDialog } from '../../../../components/request-demo-dlg';
import AppBar from './app-bar';

const HeaderWrapper = styled('div')(() => ({
  overflowX: 'hidden',
  overflowY: 'clip',
  position : "relative",
  zIndex  :100,
  backgroundColor: "white"
}));

const Header = () => {
  const [modal, setModal] = useState(false);
  const [demo, setDemo] = useState(true);
  const navigate = useNavigate();

  const onRequest = item => {
    if (item.link) {
      navigate(item.link);
    } else {
      if (item.button) {
        setDemo(false);
      } else {
        setDemo(true);
      }
      setModal(true);
    }
  }
  const closeModal = () => setModal(false);

  useEffect(() => {
    if(modal) {
      document.body.classList.add('remove-body-padding');
    }
    else {
      setTimeout(() => {
       document.body.classList.remove('remove-body-padding');
      }, 1000);
    }
  }, [modal])


  return (
    <HeaderWrapper>
      <AppBar onRequest={onRequest} />
      <RequestDemoDialog
        title={demo ? 'Request a demo' : 'Request Resources'}
        btnTitle={demo ? 'Request Demo' : null}
        open={modal}
        onClose={closeModal}
      />
    </HeaderWrapper>
  )
}

export default Header;
