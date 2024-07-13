import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { LaerAILogo } from 'features/pages/landing/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RequestDemoDialog } from '../../../../components/request-demo-dlg';
import { menus } from '../menus';
import { FooterMenu } from './footer-menu';


const Text = styled(Typography)(({ fontSize }) => ({
  color: '#6085B0',
  fontSize,
  lineHeight: 1.75,
  marginTop: 8,
  marginBottom: 8,
  fontFamily: `'Poppins', sans-serif`
}));

const Footer = () => {
  const [modal, setModal] = useState(false);
const year = new Date().getFullYear()
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const onAction = (subject) => {
    console.log(subject);
    openModal();
  }

  return (
    <>
      <Stack
        sx={{
          padding: '16px'
        }}
      >
        
        <Box
          sx={{
            width: '100%',
            bgcolor: '#180636',
            color: 'white',
            px: { xs: 4, sm: 6, md: 8 },
            py: { xs: 4 },
            maxWidth: { xs: '100%', sm: '90%' },
            margin: { xs: '0px auto 32px auto', sm: '40px auto' },
            borderRadius: '24px'
          }}
        >
         
          <Grid
            container
            sx={{
              pb: 6,
              borderBottom: '1px solid #171449'
            }}
          >
            <Grid
              item
              xs={12}
              md={4}
              sx={{ display: 'flex', flexDirection: 'column', minHeight: 120 }}
            >
              <Box sx={{ my: 2, maxWidth: '240px' }}>
                <Link to="/">
                  <LaerAILogo color="white" />
                </Link>
                <Text fontSize={16}>
                  42 Broadway, 12th Floor #211 New York, NY 10004
                </Text>
              </Box>
            </Grid>
            <Grid item xs={0} md={1} />
            <Grid item xs={12} md={7} container>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 4,
                  width: '100%',
                  flexWrap: 'wrap',
                  maxWidth: '600px',
                  marginLeft: 'auto'
                }}
              >
                {menus.map((menu) => (
                  <FooterMenu {...menu} onClick={onAction} />
                ))}
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: 'flex',
              pt: 2,
              flexWrap: 'wrap',
              justifyContent: 'space-between'
            }}
          >
            <Text fontSize={16}>@ Laer AI {year}. All Rights Reserved.</Text>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <a href="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.2004 9.19995C16.4734 9.19995 17.6943 9.70566 18.5945 
                10.6058C19.4947 11.506 20.0004 12.7269 20.0004 14V19.6H16.8004V14C16.8004 
                13.5756 16.6318 13.1686 16.3318 12.8686C16.0317 12.5685 15.6247 12.4 15.2004 
                12.4C14.776 12.4 14.3691 12.5685 14.069 12.8686C13.769 13.1686 13.6004 13.5756 
                13.6004 14V19.6H10.4004V14C10.4004 12.7269 10.9061 11.506 11.8063 10.6058C12.7065 
                9.70566 13.9274 9.19995 15.2004 9.19995Z"
                    fill="#FEFEFE"
                  />
                  <path d="M7.2 10H4V19.6H7.2V10Z" fill="#FEFEFE" />
                  <path
                    d="M5.6 7.5999C6.48366 7.5999 7.2 6.88356 7.2 5.9999C7.2 5.11625 
                6.48366 4.3999 5.6 4.3999C4.71634 4.3999 4 5.11625 4 5.9999C4 6.88356 4.71634 7.5999 5.6 7.5999Z"
                    fill="#FEFEFE"
                  />
                </svg>
              </a>

              <a href="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 5.48241C19.3036 5.97367 18.5324 6.3494 17.7164 6.59514C17.2784 
                  6.09151 16.6962 5.73455 16.0488 5.57254C15.4013 5.41053 14.7196 
                  5.45128 14.0961 5.68929C13.4725 5.92729 12.937 6.35107 12.5622 
                  6.9033C12.1873 7.45553 11.9911 8.10956 12 8.77696V9.50423C10.7219 
                  9.53737 9.45547 9.25391 8.31346 8.6791C7.17145 8.10429 6.18932 
                  7.25596 5.45455 6.20968C5.45455 6.20968 2.54545 12.7551 9.09091 
                  15.6642C7.59311 16.6809 5.80884 17.1907 4 17.1188C10.5455 20.7551 
                  18.5455 17.1188 18.5455 8.75514C18.5448 8.55256 18.5253 8.35048 18.4873 
                  8.1515C19.2295 7.4195 19.7533 6.49529 20 5.48241Z"
                    fill="#FEFEFE"
                  />
                </svg>
              </a>

              <a href="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4285 17.7147H6.28582C6.28574 18.0147 6.34474 18.3118 
                  6.45948 18.589C6.57421 18.8662 6.74243 19.1182 6.95451 19.3304C7.1666 
                  19.5426 7.41841 19.7109 7.69557 19.8258C7.97272 19.9407 8.2698 19.9999 
                  8.56982 20H15.4272C16.0333 20 16.6145 19.7592 17.0431 19.3306C17.4717 
                  18.9021 17.7125 18.3208 17.7125 17.7147V8.328C17.7127 8.31706 17.7107 8.3062 
                  17.7066 8.29605C17.7025 8.28591 17.6964 8.27668 17.6887 8.26891C17.681 8.26115 
                  17.6718 8.255 17.6617 8.25084C17.6516 8.24668 17.6408 8.24458 17.6298 
                  8.24467H15.5098C15.4878 8.24502 15.4669 8.25404 15.4515 8.26978C15.4362 8.28551 
                  15.4276 8.30668 15.4278 8.32867V17.7153L15.4285 17.7147ZM15.4285 4C16.0347 4.00035 
                  16.6159 4.24145 17.0443 4.67026C17.4727 5.09907 17.7133 5.6805 17.7132 6.28667H8.57116V15.672C8.57098 
                  15.694 8.56215 15.7151 8.54656 15.7307C8.53097 15.7463 8.50987 15.7552 8.48782 15.7553H6.36849C6.34639 
                  15.7553 6.32519 15.7466 6.30956 15.7309C6.29394 15.7153 6.28516 15.6941 6.28516 15.672V6.28533C6.28533 
                  5.67939 6.52607 5.09832 6.95447 4.66979C7.38288 4.24126 7.96388 4.00035 8.56982 4H15.4285Z"
                    fill="#FEFEFE"
                  />
                </svg>
              </a>
            </Box>
          </Box>

          <RequestDemoDialog
            title="Request Resources"
            open={modal}
            onClose={closeModal}
          />
        </Box>
      </Stack>
    </>
  );
}

export default Footer;
