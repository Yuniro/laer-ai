import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

export const Person = ({ photo, name, degree, career, links }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2,
      width: 400,
      maxWidth: '100%',
      margin: 'auto',
      my: 2
    }}
  >
    <img src={photo} alt='person' width={80} height={80} />
    <Box>
      <Typography sx={{ fontWeight: 600, color: theme => theme.palette.grey['900'], lineHeight: 2, textAlign: 'center' }}>
        {name}
      </Typography>
      {degree && (
        <Typography sx={{ fontWeight: 400, color: theme => theme.palette.grey['500'], textAlign: 'center', lineHeight: 2 }}>
          {degree}
        </Typography>
      )}
      {career && (
        <Typography sx={{ fontWeight: 400, color: theme => theme.palette.grey['500'], textAlign: 'center', lineHeight: 2 }}>
          {career}
        </Typography>
      )}
      {links && links.length > 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          {links.map((link, idx) => (
            <a href={link.link} target='_blank' rel="noreferrer" key={idx}>
              <SvgIcon sx={{ width: 16 }}>{link.element}</SvgIcon>
            </a>
          ))}
        </Box>
      )}
    </Box>
  </Box>
)