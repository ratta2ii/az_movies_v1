import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CompanyLogo from './../../Assets/Images/company-logo.webp';
import HomeIcon from '@mui/icons-material/Home';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PaidIcon from '@mui/icons-material/Paid';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link, useLocation } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

const drawerWidth = 240;

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width:850px)');
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <nav onClick={handleDrawerToggle} style={{ textAlign: 'center', backgroundColor: '#ffffff' }}>
      <img
        src={CompanyLogo}
        alt='Outdoor Movie Pros logo'
        style={{ width: '120px', marginTop: 20, marginBottom: 10 }}
        loading="lazy"
      />
      <Divider />
      <Box sx={{ backgroundColor: '#f5f5f5' }}>
        <List disablePadding>
          {/* Home */}
          <ListItem disablePadding disableGutters sx={{ padding: 0, margin: 0 }}>
            <Link to='/' style={{ textDecoration: 'none', width: '100%' }}>
              <ListItemButton
                style={{
                  textAlign: 'center',
                  borderLeft: location.pathname === '/' ? '8px solid red' : '8px solid transparent',
                  backgroundColor: location.pathname === '/' ? '#e0e0e0' : 'transparent',
                  padding: '25px 20px',
                  textTransform: 'none',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <HomeIcon fontSize='medium' style={{ marginRight: '10px', color: '#0b0f18', flexShrink: 0 }} />
                  <p style={{ fontSize: "1.2em", fontWeight: 500, margin: 0, flexGrow: 1, textAlign: 'left' }}>Home</p>
                </Box>
              </ListItemButton>
            </Link>
          </ListItem>

          {/* Locations (mobile only: general link) */}
          <ListItem disablePadding disableGutters sx={{ padding: 0, margin: 0 }}>
            <Link to='/locations' style={{ textDecoration: 'none', width: '100%' }}>
              <ListItemButton
                style={{
                  textAlign: 'center',
                  borderLeft: location.pathname === '/locations' ? '8px solid red' : '8px solid transparent',
                  backgroundColor: location.pathname === '/locations' ? '#e0e0e0' : 'transparent',
                  padding: '25px 20px',
                  textTransform: 'none',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <BuildCircleIcon fontSize='medium' style={{ marginRight: '10px', color: '#1a3890', flexShrink: 0 }} />
                  <p style={{ fontSize: "1.2em", fontWeight: 500, margin: 0, flexGrow: 1, textAlign: 'left' }}>Locations</p>
                </Box>
              </ListItemButton>
            </Link>
          </ListItem>

          {/* FAQs */}
          <ListItem disablePadding disableGutters sx={{ padding: 0, margin: 0 }}>
            <Link to='/faqs' style={{ textDecoration: 'none', width: '100%' }}>
              <ListItemButton
                style={{
                  textAlign: 'center',
                  borderLeft: location.pathname === '/faqs' ? '8px solid red' : '8px solid transparent',
                  backgroundColor: location.pathname === '/faqs' ? '#e0e0e0' : 'transparent',
                  padding: '25px 20px',
                  textTransform: 'none',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <PaidIcon fontSize='medium' style={{ marginRight: '10px', color: '#114796', flexShrink: 0 }} />
                  <p style={{ fontSize: "1.2em", fontWeight: 500, margin: 0, flexGrow: 1, textAlign: 'left' }}>FAQs</p>
                </Box>
              </ListItemButton>
            </Link>
          </ListItem>

          {/* Gallery */}
          <ListItem disablePadding disableGutters sx={{ padding: 0, margin: 0 }}>
            <Link to='/gallery' style={{ textDecoration: 'none', width: '100%' }}>
              <ListItemButton
                style={{
                  textAlign: 'center',
                  borderLeft: location.pathname === '/gallery' ? '8px solid red' : '8px solid transparent',
                  backgroundColor: location.pathname === '/gallery' ? '#e0e0e0' : 'transparent',
                  padding: '25px 20px',
                  textTransform: 'none',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <PaidIcon fontSize='medium' style={{ marginRight: '10px', color: '#114796', flexShrink: 0 }} />
                  <p style={{ fontSize: "1.2em", fontWeight: 500, margin: 0, flexGrow: 1, textAlign: 'left' }}>Gallery</p>
                </Box>
              </ListItemButton>
            </Link>
          </ListItem>

          {/* Contact */}
          <ListItem disablePadding disableGutters sx={{ padding: 0, margin: 0 }}>
            <Link to='/contact' style={{ textDecoration: 'none', width: '100%' }}>
              <ListItemButton
                style={{
                  textAlign: 'center',
                  borderLeft: location.pathname === '/contact' ? '8px solid red' : '8px solid transparent',
                  backgroundColor: location.pathname === '/contact' ? '#e0e0e0' : 'transparent',
                  padding: '25px 20px',
                  textTransform: 'none',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <ContactMailIcon fontSize='medium' style={{ marginRight: '10px', color: '#114796', flexShrink: 0 }} />
                  <p style={{ fontSize: "1.2em", fontWeight: 500, margin: 0, flexGrow: 1, textAlign: 'left' }}>Contact</p>
                </Box>
              </ListItemButton>
            </Link>
          </ListItem>

          {/* Close */}
          <ListItem disablePadding disableGutters sx={{ padding: 0, margin: 0 }}>
            <ListItemButton
              onClick={(event) => {
                event.stopPropagation();
                handleDrawerToggle();
              }}
              style={{
                textAlign: 'center',
                borderLeft: '8px solid transparent',
                backgroundColor: 'transparent',
                padding: '25px 20px',
                textTransform: 'none',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <CancelIcon fontSize='medium' style={{ marginRight: '10px', color: '#1a3890', flexShrink: 0 }} />
                <p style={{ fontSize: "1.2em", fontWeight: 500, margin: 0, flexGrow: 1, textAlign: 'left' }}>Close</p>
              </Box>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </nav>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <nav style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: '#0b0f18', minHeight: 75, paddingTop: 12, borderBottom: "5px solid #1c222a" }}>
        {isMobile ? (
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            {/* Hamburger */}
            <Box sx={{ display: 'flex', alignItems: 'center', width: '12%' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: .5 }}
              >
                <MenuIcon sx={{ fontSize: '2rem' }} />
              </IconButton>
            </Box>

            {/* Phone number centered */}
            <Box sx={{ width: '66%', textAlign: 'center' }}>
              <Typography variant="body1" sx={{ fontFamily: 'sans-serif', fontSize: '1em' }}>
                <a href="tel:+12083523909" style={{ textDecoration: "none", color: "inherit" }}>
                  +1 (208) 352-3909
                </a>
              </Typography>
            </Box>

            {/* Logo right aligned */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '22%', pr: .5 }}>
              <Link to="/">
                <img
                  src={CompanyLogo}
                  width="72"
                  alt="Outdoor Movie Pros logo"
                  style={{ border: '3px solid #fff', borderRadius: '50%' }}
                  loading="lazy"
                />
              </Link>
            </Box>
          </Toolbar>
        ) : (
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <Link to='/'>
                <img
                  src={CompanyLogo}
                  width="90"
                  alt='Outdoor Movie Pros logo'
                  style={{ margin: "15px 25px 25px 10px" }}
                  loading="lazy"
                />
              </Link>
              <Typography variant="body1" style={{ fontFamily: "sans-serif", fontSize: "1.2em" }}>
                <a href="tel:+12083523909" style={{ textDecoration: "none", color: "inherit" }}>
                  +1 (208) 352-3909
                </a>
              </Typography>
            </Box>

            {/* Desktop links (no Locations) */}
            <Box sx={{ display: 'flex' }}>
              <Link to='/'><Button sx={{ color: '#fff', mx: 1 }}>Home</Button></Link>
              <Link to='/faqs'><Button sx={{ color: '#fff', mx: 1 }}>FAQs</Button></Link>
              <Link to='/gallery'><Button sx={{ color: '#fff', mx: 1 }}>Gallery</Button></Link>
              <Link to='/contact'><Button sx={{ color: '#fff', mx: 1 }}>Contact</Button></Link>
            </Box>
          </Toolbar>
        )}
      </AppBar>

      <Box component="nav">
        {isMobile && (
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
          >
            {drawer}
          </Drawer>
        )}
      </Box>
    </nav>
  );
}

export default NavBar;
