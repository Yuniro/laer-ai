import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`back-to-top ${isVisible ? '' : 'show-back-totop'}`}>
      <Button
        color="primary"
        onClick={scrollToTop}
        aria-label="scroll back to top"
      >
        <svg
          width="33"
          height="46"
          viewBox="0 0 33 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.2766 22.2044H8.18164L16.182 0L24.2766 22.2044Z"
            fill="#3E3DFF"
          />
          <path
            d="M32.542 45.072H0L4.69832 32.3047H27.8435L32.542 45.072Z"
            fill="#3E3DFF"
          />
        </svg>
      </Button>
    </div>
  );
};

export default BackToTopButton;
