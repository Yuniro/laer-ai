/* eslint-disable max-len */
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { StatusContainer } from 'components/status-container';
import OurPartners from '../aboutus/ourpartners';
import OurTeam from '../aboutus/ourteam';
import ScientificAdvisors from '../aboutus/scientificadvisors';
import { SecurityCards } from '../security/securitycards';
import DashboardPreview from './dashboardpreview';
import GenerativeAIKnowledge from './generativeaiknowledge';
import Hero from './hero';
import BackToTopButton from './backtotop';

const Page = styled.section({
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'calc(100% - 88px)',
  background: 'transparent !important'
});

export const LandingPage = () => (
  <>
    <StatusContainer Wrapper={Page}>
      <Box
        sx={{
          position: 'relative'
        }}
      >
        <Hero />
        <DashboardPreview />
        <Box
          sx={{
            position: 'absolute',
            top: '0%',
            left: '0%',
            zIndex: 1
          }}
        >
          <svg
            className="hero-blue-gradient"
            width="1143"
            height="695"
            viewBox="0 0 1143 695"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_1113_11104)">
              <ellipse
                cx="171.05"
                cy="425.112"
                rx="171.05"
                ry="425.112"
                transform="matrix(0.422821 0.906213 -0.813682 0.58131 541.562 -520.282)"
                fill="#0A6DEB"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1113_11104"
                x="-606.729"
                y="-931.154"
                width="1749.41"
                height="1626"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="260.625"
                  result="effect1_foregroundBlur_1113_11104"
                />
              </filter>
            </defs>
          </svg>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            right: { xs: '-200%', sm: '-30%' },
            zIndex: 1
          }}
        >
          <svg
            style={{
              filter: 'blur(340px)'
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="1599"
            height="1290"
            viewBox="0 0 1599 1290"
            fill="none"
          >
            <g filter="url(#filter0_f_17_7238)">
              <path
                d="M2808.79 73.4763C2875.52 346.757 2659.78 797.313 2418.62 1330.74C2047.25 2152.13 1277.73 3326.47 838.003 3346.17C437.077 3364.13 1593.06 1917.18 1450.18 1589.08C1399.33 1472.32 1191.91 1616.26 1206.65 1430.47C1225.25 1196.09 1411.61 877.02 1685.98 527.011C1968.59 166.488 2216.01 -46.5095 2449.86 -137.681C2701.68 -235.858 2762.14 -117.598 2808.79 73.4763Z"
                fill="#3E3DFF"
                fillOpacity="0.7"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_17_7238"
                x="0.11853"
                y="-925.897"
                width="3573.88"
                height="5025.15"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="376.458"
                  result="effect1_foregroundBlur_17_7238"
                />
              </filter>
            </defs>
          </svg>
        </Box>
      </Box>
      <OurPartners />
      <Container maxWidth="lg">
        <GenerativeAIKnowledge />
        <OurTeam />
        <ScientificAdvisors />
        <SecurityCards />
      </Container>
    </StatusContainer>
    <BackToTopButton />
  </>
);
