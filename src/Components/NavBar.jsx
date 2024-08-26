import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import FadeMenu from './More';
import SearchBar from './SearchBar';
import SearchIcon from '@mui/icons-material/Search';

const pages = ['World', 'Politics', 'Sports', 'Health'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'black', color: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CrisisAlertIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              marginRight: '50px'
            }}
          >
            MUNSoc
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>


              ))}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Register</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Login</Typography>
              </MenuItem>
            </Menu>

          </Box>
          <CrisisAlertIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MUNSoc
          </Typography>
          <>
            <Typography sx={{ display: { xs: 'flex', md: 'none' } }}>
              <SearchIcon sx={{ marginRight: '0.5rem' ,":hover":{color:"gray",cursor:"pointer"}}} />
            </Typography >
          </>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <FadeMenu />
            </Button>
          </Box>
          <Typography sx={{ display: { xs: 'none', md: 'flex' } }}>
            <SearchBar />
          </Typography>
          <ButtonGroup variant="contained" aria-label="Basic button group"
            sx={{ display: { xs: 'none', md: 'flex' }, padding: '1rem' }}
          >
            <Button
              sx={{ marginRight: '1rem', color: 'black', display: 'block', backgroundColor: 'white' }}
            >Register</Button>
            <Button sx={{ color: 'black', display: 'block', backgroundColor: 'white' }}>Login</Button>
          </ButtonGroup>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;