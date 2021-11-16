import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

const  Header = () => {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(isMobile);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
   
    <Box sx={{ flexGrow: 1 }} >
      
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctors Portal
          </Typography>
        
            <div>
                {
                    isMobile ? 
                    <>
                    <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link style={{textDecoration:'none'}} to='/home'><Button onClick={handleClose}>Home</Button></Link><br />
                <Link style={{textDecoration:'none'}} to='/appoinments'><Button onClick={handleClose}>Appoinments</Button></Link><br />
                <Link style={{textDecoration:'none'}} to='/dashboard'><Button onClick={handleClose}>Dashboard</Button></Link>
              </Menu>
                    </>
                    :
                    <>
                       <Button color="inherit">Home</Button>
                       <Button color="inherit">Appoinments</Button>
                       <Button color="inherit">Dashboard</Button>
                       <Button color="inherit">Login</Button>
                    </>
                }
          
            </div>
        </Toolbar>
      </AppBar>
    </Box>

  );
}

export default Header;
