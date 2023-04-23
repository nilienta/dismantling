import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { pages } from '../../services/mocks';

const DRAWER_WIDTH = 240;

export const ResponsiveAppBar = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        LOGO
      </Typography>
      <Divider />
      <List>
        {pages.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} href={item.src}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar
          sx={{
            maxWidth: '2000px',
            width: '95%',
            margin: '0px auto',
          }}
        >
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
          >
            LOGO
          </Typography>
          <Box component="div" sx={{ flexGrow: 1, display: { sm: 'none' } }}>
            <Button
              href="tel:8-800-000-0-000"
              size="sm"
              sx={{
                color: '#ffb696',
                '&:hover': {
                  color: '#ffb696',
                  boxShadow: `0px 0px 20px 0px rgb(255 255 255 / 35%) inset`,
                  transition: `box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
                },
              }}
            >
              8-800-000-0-000
            </Button>
            <Button
              href="mailto:mail@mail.com"
              size="sm"
              sx={{
                color: '#ffb696',
                '&:hover': {
                  color: '#ffb696',
                  boxShadow: `0px 0px 20px 0px rgb(255 255 255 / 35%) inset`,
                  transition: `box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
                },
              }}
            >
              mail@mail.com
            </Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ width: '2em', height: '2em' }} />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {pages.map((item) => (
              <Button
                size="sm"
                key={item.text}
                sx={{ color: '#fff' }}
                href={item.src}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          anchor="right"
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ width: '100%' }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
export default ResponsiveAppBar;
