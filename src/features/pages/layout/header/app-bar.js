import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { ContextMenu } from 'components/context-menu';
import { LaerAILogo } from 'features/pages/landing/icons';
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { headerMenus } from '../menus';

function ElevationScroll({ children, window }) {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      zIndex : 100,
      backgroundColor: trigger ? 'white' : 'transparent',
      transition: theme.transitions.create(['background-color', 'box-shadow'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.short
      })
    }
  });
}

const subMenus = [
  { key: 'benchmarks', title: 'Benchmarks', link: '/benchmarks' },
  { key: 'case_study', title: 'Case studies', link: '/studies' }
];

const AppBar = ({ onRequest, ...others }) => {
  const [drawerToggle, setDrawerToggle] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const drawerToggler = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerToggle(open);
  };

  const onLink = (item) => {
    setDrawerToggle(false);
    onRequest(item);
  };

  const onMenu = (key) => {
    const item = subMenus.find((menu) => menu.key === key);
    setAnchorEl(null);
    setDrawerToggle(false);
    if (item) {
      navigate(item.link);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const appBar = document.querySelector('.MuiAppBar-root');
      if (window.scrollY > 0) {
        appBar.style.backgroundColor = 'white';
      } else {
        appBar.style.backgroundColor = 'transparent';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ElevationScroll {...others}>
      <MuiAppBar
        className="MuiAppBar-root"
        sx={{ position: 'fixed', width: '100%', top: 0, zIndex: 100 }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            margin: 'auto'
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              margin: 'auto',
              paddingLeft: `0 !important`,
              paddingRight: `0 !important`
            }}
          >
            <Typography component="div" sx={{ textAlign: 'left' }}>
              <Link to="/">
                <LaerAILogo color="#180636" />
              </Link>
            </Typography>
            <Stack
              direction="row"
              sx={{ display: { xs: 'none', md: 'flex', width: '100%' } }}
              spacing={5}
              alignItems="center"
              justifyContent="center"
            >
              {headerMenus.map((menu, index) => (
                <Fragment key={index}>
                  {menu.title === 'Blog' ? (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      key={index}
                      href={menu.link}
                      style={{
                        color:
                          menu.link === location.pathname
                            ? '#180636'
                            : '#5D5172',
                        fontSize: '14px',
                        fontFamily: `'Poppins', sans-serif`,
                        textDecoration: 'none',
                        fontWeight: 500,
                        position: 'relative'
                      }}
                    >
                      {menu.link === location.pathname && (
                        <span
                          style={{
                            position: 'absolute',
                            top: '-12px',
                            right: '-5px'
                          }}
                        >
                          <svg
                            width="5"
                            height="5"
                            viewBox="0 0 5 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#047FFF" />
                          </svg>
                        </span>
                      )}
                      {menu.title}
                    </a>
                  ) : (
                    <Link
                      key={index}
                      to={menu.link}
                      style={{
                        color:
                          menu.link === location.pathname
                            ? '#180636'
                            : '#5D5172',
                        fontSize: '14px',
                        fontFamily: `'Poppins', sans-serif`,
                        textDecoration: 'none',
                        fontWeight: 500,
                        position: 'relative'
                      }}
                    >
                      {menu.link === location.pathname && (
                        <span
                          style={{
                            position: 'absolute',
                            top: '-12px',
                            right: '-5px'
                          }}
                        >
                          <svg
                            width="5"
                            height="5"
                            viewBox="0 0 5 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#047FFF" />
                          </svg>
                        </span>
                      )}
                      {menu.title}
                    </Link>
                  )}
                </Fragment>
              ))}
            </Stack>
            <Box>
              <Button
                color="primary"
                sx={{
                  fontFamily: `'Poppins', sans-serif`,
                  whiteSpace: 'nowrap',
                  borderRadius: '10px',
                  fontWeight: 500,
                  width: {xs:'135px'}
                }}
                variant="contained"
                onClick={onRequest}
              >
                Schedule a Demo
              </Button>
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton
                color="black"
                onClick={drawerToggler(true)}
                size="large"
                sx={{
                  padding: 0
                }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="top"
                open={drawerToggle}
                onClose={drawerToggler(false)}
              >
                {drawerToggle && (
                  <Box sx={{ width: 'auto' }} role="presentation">
                    <List
                      sx={{
                        '& > a': {
                          padding: 2,
                          '&:not(:last-child)': {
                            borderBottom: '1px solid #f5f5f5'
                          }
                        }
                      }}
                    >
                      {headerMenus.map((menu) => (
                        <ListItemButton
                          color="inherit"
                          sx={{
                            fontSize: '1rem',
                            fontFamily: "'Inter', sans-serif"
                          }}
                          onClick={() => onLink(menu)}
                          key={menu.key}
                        >
                          {menu.title}
                        </ListItemButton>
                      ))}

                      <ListItemButton variant="contained" color="primary">
                        <Button
                          color="primary"
                          variant="contained"
                          fullWidth
                          onClick={onLink}
                        >
                          Request Demo
                        </Button>
                      </ListItemButton>
                    </List>
                  </Box>
                )}
              </Drawer>
            </Box>
          </Toolbar>
          <ContextMenu
            sx={{
              '& .MuiMenu-paper': { mt: 2 },
              display: { xs: 'none', sm: 'block' }
            }}
            items={subMenus}
            onClose={() => setAnchorEl(null)}
            anchorEl={anchorEl}
            onMenu={onMenu}
          />
        </Container>
      </MuiAppBar>
    </ElevationScroll>
  );
};

export default AppBar;
