import Typography from '@mui/material/Typography';

export const SubTitle1 = ({ children, sx = {} }) => (
  <Typography
    variant='h2'
    sx={{
      fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2.25rem' },
      fontWeight: 500,
      lineHeight: 1.4,
      color: theme => theme.palette.grey['900'],
      my: 3,
      textAlign: 'center',
      ...sx
    }}
  >
    {children}
  </Typography>
);

export const Description = ({ children, sx = {} }) => (
  <Typography
    variant='body1'
    sx={{
      fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
      fontWeight: 400,
      lineHeight: 1.6,
      color: theme => theme.palette.grey['500'],
      my: 3,
      textAlign: 'center',
      ...sx
    }}
  >
    {children}
  </Typography>
)

