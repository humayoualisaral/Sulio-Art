// components/Layout.js
'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '@/../public/LOGO.png'
import { Collection, Contact, Dashboard, Pipeline } from '@/utils/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const drawerWidth = 80;

function Layout(props) {
  const { children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
 const pathname = usePathname();
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const menuItems = [
  { text: 'Dashboard', path: '/', icon: Dashboard },
  { text: 'Collection', path: '/collection', icon: Collection },
  { text: 'Contact', path: '/contact', icon:Contact},
  { text: 'Pipeline', path: '/pipeline', icon: Pipeline},
];

const drawer = (
    <div>
      <Toolbar />
      <List>
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = pathname === item.path;
          
          return (
            <ListItem key={item.text} disablePadding>
              <ListItemButton 
                component={Link}
                href={item.path}
                sx={{ 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  py: 2,
                  bgcolor: isActive ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
                }}
              >
                <ListItemIcon sx={{ minWidth: 'auto', mb: 0.5 }}>
                  <IconComponent fill={isActive ? '#000000' : '#828282'} />
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  primaryTypographyProps={{ 
                    fontSize: '10px', 
                    textAlign: 'center',
                    lineHeight: 1.2,
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? '#000000' : '#828282',
                  }} 
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );



  return (
    <Box sx={{ display: 'flex',padding:"0px"}}>
      <CssBaseline />
      <AppBar
        position="absolute"
         sx={{
          width: '100%',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor:'#fff',
          border:"1px solid #000000",
          boxShadow:"none",
          color:"#000",
          height:"65px"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <img src={Logo.src} width={'100%'} height={"100%"}/>
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth ,bgcolor:"#D9D9D9",boxShadow:"none",border:"none"},
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;