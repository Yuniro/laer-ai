/* eslint-disable jsx-a11y/media-has-caption */
import { Box, Container } from '@mui/system';
import websitechatview from 'assets/images/landing/website_chat_view.png';
import websiteprojectview from 'assets/images/landing/website_project_view.png';
import websiteprotocolview from 'assets/images/landing/website_protocol_view.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import Typography from '@mui/material/Typography';


const DashboardPreview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex)
  };

  const previewslider = [
    {
      title: 'Website Chat View',
      imageURL: websitechatview
    },
    {
      title: 'Website Project View',
      imageURL: websiteprojectview
    },
    {
      title: 'Website Protocol View',
      imageURL: websiteprotocolview
    }
  ];

  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          width: '100%',
          margin: 'auto',
          position: 'relative',
          zIndex: 10
        }}
      >
        <Box
          sx={{
            padding: { xs: '16px', sm: '20px' },
            margin: { xs: '0px', sm: '70px 0' },
            boxShadow:
              '0px 67px 67px 0px rgba(48, 48, 48, 0.05), 0px 17px 37px 0px rgba(48, 48, 48, 0.06)',
            borderRadius: '12px',
            minHeight: { xl: '630px' },
            textAlign: 'center'
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              margintop: '50px',
              marginBottom: '50px',
              color: '#180636',
              fontWeight: 400,
              fontFamily: `'Newsreader', serif`,
              fontSize: { xs: '19px', lg: '20px' }
            }}
          >
            {previewslider[currentSlide].title}
          </Typography>
          <Slider {...settings} className="hero-carousel">
            {previewslider &&
              previewslider.map((obj, index) => (
                <SliderCard obj={obj} key={index} />
              ))}
          </Slider>
        </Box>
      </Container>
    </div>
  );
};

export default DashboardPreview;

export function SliderCard({ obj }) {
  return (
    <div style={{ outline: 'none', border: 0 }}>
      <img
        style={{
          width: '100%',
          outline: 'none',
          border: 0
        }}
        src={obj.imageURL}
        alt={obj.title}
      />
    </div>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        right: '-42px',
        zIndex: 10,
        transform: 'translateY(-50%)',
        backgroundColor: '#F8F9FB',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.8)'
        }
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 17L15 12L10 7"
          stroke="#3E3DFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconButton>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        left: '-42px',
        zIndex: 10,
        transform: 'translateY(-50%)',
        backgroundColor: '#F8F9FB',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.8)'
        }
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 7L9 12L14 17"
          stroke="#3E3DFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconButton>
  );
}
