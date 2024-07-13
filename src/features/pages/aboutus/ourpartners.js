import Marquee from "react-marquee-slider";
import { ourpartners } from '../../../config/helper';
import { Typography } from '@mui/material';
import { Stack } from "@mui/system";

const OurPartners = () => (
  <Stack
    sx={{
      padding: { xs: '60px 0px 40px 0px', sm: '100px 0px 40px 0px' }
    }}
  >
    <Typography
      variant="h2"
      sx={{
        fontFamily: `'Newsreader', serif`,
        color: '#180636',
        fontWeight: 'medium',
        fontSize: '40px',
        textAlign: 'center'
      }}
    >
      Our Partners
    </Typography>
    <div className="our-partners">
      <Marquee direction="left" speed={50} pauseOnHover="true">
        {ourpartners &&
          ourpartners.map((obj, index) => (
            <div key={index}>
              <img
                className="mx-auto"
                src={obj.imageURL}
                alt={obj.name}
                style={{
                  maxWidth: `${obj.maxWidth}px`
                }}
              />
            </div>
          ))}
      </Marquee>
    </div>
  </Stack>
);

export default OurPartners;
