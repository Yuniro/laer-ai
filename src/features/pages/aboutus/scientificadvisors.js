import { Typography } from '@mui/material';
import { advisors } from '../../../config/helper';
import { Box } from '@mui/system';

const ScientificAdvisors = () => (
  <section className="advisors-wrapper">
    <Typography
      variant="h2"
      sx={{
        color: (theme) => theme.palette.blue['700'],
        fontWeight: 600,
        fontFamily: `'Newsreader', serif`,
        fontSize: { xs: '28px', lg: '36px' },
        maxWidth: '880px',
        margin: '0px auto 10px auto',
        textAlign: 'center'
      }}
    >
      Scientific Advisors
    </Typography>
    <div className="advisors-cards">
      {advisors &&
        advisors.map((obj, index) => <AdvisorsCard obj={obj} key={index} />)}
    </div>
  </section>
);

export default ScientificAdvisors;

export const AdvisorsCard = ({ obj }) => (
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
        <img className='advisor-image' src={obj.photo} alt={obj.name} />
      </div>

      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          listStyle: 'none',
          width: '50%',
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
    
    <h4>{obj.name}</h4>
    <p>{obj.career}</p>
  </article>
);
