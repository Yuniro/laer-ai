import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from '@mui/material/styles/styled';

export const H1 = styled((props) => <Typography variant='h1' {...props} />)(() => ({
  fontSize: 26,
  color: '#333',
  textAlign: 'center',
}));

export const H2 = styled((props) => <Typography variant='h2' {...props} />)(() => ({
  fontSize: 22,
  color: '#333',
  margin: '16px 0',
}));

export const H3 = styled((props) => <Typography variant='h3' {...props} />)(() => ({
  fontSize: 18,
  color: '#333',
  margin: '16px 0',
}));

export const Desc = styled(props => <Typography {...props} />)(() => ({
  fontSize: 14,
  textAlign: 'center',
  margin: '8px 0'
}));

export const Text = styled(props => <Typography {...props} />)(() => ({
  fontSize: 16,
  color: '#595959',
  margin: '12px 0',
  lineHeight: 1.4
}));

export const ListItem = styled(props => <Box component='li' {...props} />)(() => ({
  fontSize: 16,
  color: '#595959',
  lineHeight: 1.5,
  listStyleType: 'square'
}));

export const ContactItem = styled(Typography)(() => ({
  fontSize: 16,
  fontWeight: 600,
  color: '#888'
}));