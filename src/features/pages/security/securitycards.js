/* eslint-disable max-len */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { padding } from '@mui/system';
import SocImage from 'assets/images/laer/soc.webp';

const contents = [
  {
    title: 'Infrastructure & Data Security',
    description:
      'Choose between secure ISO 27001/SOC compliant SaaS (any cloud), hybrid, fully on-prem, and dedicated LLM deployment options.'
  },
  {
    title: 'Strong Encryption',
    description:
      'All data at rest is encrypted with AES-256 and all connections with HTTPS via TLS 1.2+.'
  },
  {
    title: 'Role-based Access Controls',
    description: 'Complete and granular data access controls.'
  },
  {
    title: 'Single Sign-On',
    description:
      'Authenticate via leading identity providers such as Microsoft Azure Directory and Google Suite.'
  },
  {
    title: 'Regular Security Tests',
    description:
      'Automated network security testing is performed regularly for vulnerabilities.'
  },
  {
    title: 'Audit Trails',
    description: 'All user actions are tracked and logged and fully auditable.'
  }
];

const Card = ({ title, description }) => (
  <Box
    sx={{
      backgroundColor: '#F8F9FB',
      border: '1px solid #F7F4F2',
      padding: { xs: '16px', lg: '22px' },
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      minHeight: { xs: 'auto', sm: '150px', md: '228px' }
    }}
  >
    <Typography
      sx={{
        fontSize: { xs: 20, sm: 22, md: 24 },
        fontWeight: 600,
        color: '#46385E',
        lineHeight: '32px',
        fontFamily: `'Newsreader', serif`
      }}
    >
      {title}
    </Typography>
    <Typography
      sx={{
        fontSize: { xs: 14, md: 16 },
        fontWeight: 400,
        color: '#46385E',
        lineHeight: '24px'
      }}
    >
      {description}
    </Typography>
    {title === 'Infrastructure & Data Security' && (
      <img
        style={{bottom: '5px', right: '5px', marginLeft: 'auto' }}
        src={SocImage}
        width={50}
        alt="soc"
      />
    )}
  </Box>
);

export const SecurityCards = () => (
  <>
    <section id="security">
      <Grid
        container
        sx={{
          my: 2,
          paddingTop: 4,
          flexDirection: 'column',
          alignItems: 'center',
          width:'100%',
          marginLeft: '0px',
        }}
        spacing={4}
      >
        <Box
          sx={{
            padding: { xs: '24px 0px', lg: '40px 0px' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: (theme) => theme.palette.blue['700'],
              fontWeight: 600,
              fontFamily: `'Newsreader', serif`,
              fontSize: { xs: '28px', lg: '36px' },
              maxWidth: '733px',
              margin: '0px auto 10px auto',
              textAlign: 'center'
            }}
          >
            Security
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: (theme) => theme.palette.blue['700'],
              fontWeight: 400,
              fontFamily: `'Poppins', sans-serif`,
              fontSize: { xs: '16px', lg: '18px' },
              maxWidth: '733px',
              margin: '0px auto 10px auto',
              textAlign: 'center',
            }}
          >
            We understand that data security and protection is tantamount to our
            clients, and so we built in data security from the foundation up.
          </Typography>
        </Box>
      </Grid>
      <Grid
        container
        sx={{ my: 6, paddingBottom: { xs: 0, sm: 6 }, width:'100%', marginLeft:'0px' }}
      >
        {contents.map((content, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx} sx={{padding:1}}>
            <Card {...content} key={idx}/>
          </Grid>
        ))}
      </Grid>
    </section>
  </>
);

