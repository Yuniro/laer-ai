/* eslint-disable max-len */
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import { StatusContainer } from 'components/status-container';
import { SecurityCards } from './securitycards';


const Page = styled.section({
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'calc(100% - 88px)',
  background: 'transparent !important'
});


export const SecurityPage = () => (
  <StatusContainer Wrapper={Page}>
    <Container maxWidth="lg">
      <SecurityCards />
    </Container>
  </StatusContainer>
);

