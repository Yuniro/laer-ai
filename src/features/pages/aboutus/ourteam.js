/* eslint-disable react/no-unescaped-entities */
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ourteamlist } from '../../../config/helper';

const OurTeam = () => (
  <section className="our-team-wrapper" id="about-us">
    <Box
      sx={{
        padding: { xs: '24px 0px', lg: '40px 0px' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: (theme) => theme.palette.blue['700'],
          fontWeight: 600,
          fontFamily: `'Newsreader', serif`,
          fontSize: { xs: '28px', lg: '36px' },
          maxWidth: '1000px',
          margin: 'auto',
          marginBottom: '10px',
          textAlign: 'center'
        }}
      >
        About Us
      </Typography>
      <Typography
        variant="h3"
        sx={{
          color: '#46385E',
          fontWeight: 400,
          fontFamily: `'Poppins', sans-serif`,
          fontSize: { xs: '16px', lg: '18px' },
          maxWidth: '1000px',
          margin: 'auto',
          lineHeight: '130%',
          textAlign: 'center'
        }}
      >
        Laer AI was founded by pioneering natural language and machine learning
        researchers and is supported by some of the world's most elite law
        firms. Our mission is to democratize the true promise of natural
        language AI, helping transform and broaden access to legal services.
      </Typography>
    </Box>

    <Typography
      variant="h2"
      sx={{
        color: (theme) => theme.palette.blue['700'],
        fontWeight: 600,
        fontFamily: `'Newsreader', serif`,
        fontSize: { xs: '28px', lg: '36px' },
        maxWidth: '880px',
        margin: '0px auto 10px auto' ,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Leadership
    </Typography>

    <div className="our-team-card">
      <Box
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: {lg: 'flex-start', sm: 'center'},
          justifyContent: 'space-between',
          paddingTop: { sm: '0px' },
          gap: { xs: 3, sm: 2, lg: 2 }
        }}
      >
        {ourteamlist &&
          ourteamlist.map((obj, index) => <TeamCard key={index} obj={obj} />)}
      </Box>
    </div>
  </section>
);

export default OurTeam;

export const TeamCard = ({ obj }) => (
  <article>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <div
        style={{
          width: '50%'
        }}
      >
        <img className="team-image" src={obj.imageURL} alt={obj.name} />
      </div>

      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          listStyle: 'none',
          padding: 0,
          justifyContent: 'end'
        }}
      >
        {obj.university.map((item, index) => (
          <li
            key={index}
            style={{
              marginLeft: '8px',
              marginRight: '8px',
              marginBottom: '8px'
            }}
          >
            <img
              style={{ maxWidth: item.maxWidth }}
              src={item.imageURL}
              alt={obj.name}
            />
          </li>
        ))}
      </ul>
    </Box>
    <h3>{obj.name}</h3>
    <h4>{obj.designation}</h4>
    <p>{obj.graduations}</p>
    <p>{obj.description}</p>
    <p>{obj.experience}</p>
    <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer" >
      <LinkedInIcon sx={{ color: '#180636' }} />
    </a>
  </article>
);
