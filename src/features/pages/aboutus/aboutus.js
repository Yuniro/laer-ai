import styled from '@emotion/styled';
import { StatusContainer } from 'components/status-container';
import OurTeam from "./ourteam";
import ScientificAdvisors from './scientificadvisors';
import { Container } from '@mui/system';

const Page = styled.section({
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'calc(100% - 88px)',
  background: 'transparent !important'
});

export const AboutUsPage = () => (
  <>
    <StatusContainer Wrapper={Page}>
       <Container maxWidth="lg">
        <OurTeam/>
        <ScientificAdvisors />
       </Container>
    </StatusContainer>
  </>
);
