import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const GeneralPage = ({ children, sx = {} }) => (
  <Container maxWidth='lg'>
    <Box sx={{ p: { xs: 2, sm: 4, md: 6 }, ...sx }}>
      {children}
    </Box>
  </Container>
);
