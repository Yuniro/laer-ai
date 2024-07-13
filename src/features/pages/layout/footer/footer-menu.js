import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const FooterMenu = ({ title, menus, onClick }) => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        setTimeout(() => targetElement.scrollIntoView({ behavior: 'smooth' }), 0);
      }
    }
  }, []);

  return (
    <Box sx={{ width: { xs: '100%', sm: 'fit-content' } }}>
      <Typography
        variant="h4"
        sx={{
          fontSize: { sm: '0.875rem', md: '1.125rem' },
          color: '#FFFFFF',
          fontWeight: 600,
          lineHeight: 1.4,
          my: 2,
          fontFamily: `'Poppins', sans-serif`
        }}
      >
        {title}
      </Typography>
      {menus.map((menu) => (
        <ActionItem key={menu.title} {...menu} onClick={onClick} />
      ))}
    </Box>
  );
}

function ActionItem({ title, link }) {
  const styles = {
    fontSize: { sm: '0.875rem', md: '0.875rem' },
    fontWeight: 300,
    lineHeight: 1.4,
    display: 'block',
    my: 2,
    textDecoration: 'none',
    color: '#6085B0',
    fontFamily: `'Poppins', sans-serif`
  };

  const handleHashLinkClick = (e, hash) => {
    e.preventDefault();
    const targetElement = document.getElementById(hash.substring(1));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return link.startsWith('#') ? (
    <Typography
      key={title}
      component="a"
      href={link}
      sx={styles}
      onClick={(e) => handleHashLinkClick(e, link)}
    >
      {title}
    </Typography>
  ) : (
    <Typography
      key={title}
      component={Link}
      to={link}
      sx={styles}
    >
      {title}
    </Typography>
  );
}
