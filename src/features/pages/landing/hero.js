
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Box, Stack } from '@mui/system';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';
import { RequestDemoDialog } from '../../../components/request-demo-dlg';



const Hero = () => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      '.gsap-hero-anim',
      {
        opacity: 0,
        duration: 1,
        y: -30,
        stagger: 0.2,
        scale: 0.97,
        delay: 0.7,
      },
      { opacity: 1, y: 0, stagger: 0.2, scale: 1, delay: 0.7 }
    );
  }, []);


  const closeModal = () => setModal(false);

  const onRequest = () => {
    console.log("hello");
    document.body.classList.add('remove-body-padding');
      setModal(true);
  }

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
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: { xs: 'auto', sm: '420px' },
        margin: '0px auto 60px auto',
        paddingTop: '60px',
        position  :"relative",
        zIndex :10
      }}
    >
      <Stack
        sx={{
          width: '100%',
          padding: '32px 0px'
        }}
      >
        <Box
          sx={{
            maxWidth: '970px',
            margin: '0px auto',
            textAlign: 'center'
          }}
        >
          <h1 className="landing-hero-heading gsap-hero-anim">
            <span
              style={{
                color: '#180636'
              }}
            >
              Unpacking the information complexity in
            </span>{' '}
            <span style={{ color: '#3E3DFF' }}>litigation.</span>
          </h1>
        </Box>
        <Box
          sx={{
            maxWidth: '800px',
            margin: '0px auto',
            textAlign: 'center',
          }}
        >
          <h4 className="hero-sub-heading gsap-hero-anim">
            Aida empowers every attorney to deliver exceptional litigation
            outcomes with knowledge-based natural language AI.
          </h4>
          <div className="gsap-hero-anim hero-btn-parent">
            <Button
              color="primary"
              sx={{
                fontFamily: `'Inter', sans-serif`,
                borderRadius: '10px'
              }}
              variant="contained"
              onClick={onRequest}
            >
              Get in touch
            </Button>
            <RequestDemoDialog
              title="Request a demo"
              btnTitle="Request a demo"
              open={modal}
              onClose={closeModal}
            />
          </div>
        </Box>
      </Stack>
    </Container>
  );
};

export default Hero;
