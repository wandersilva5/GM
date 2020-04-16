import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { 
    makeStyles, Drawer, AppBar, Toolbar, Typography,
    Hidden, IconButton, CssBaseline, useTheme, 
    Divider, List, ListItem, ListItemText , ListItemIcon
 } from '@material-ui/core';

import Dashboard from '@material-ui/icons/Dashboard';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Menu';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import { logout } from '../../services/auth';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer +1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  alignRigth: {
    position: 'absolute',
    right: theme.spacing(3),
    color: 'white'
  }
}));

Layout.propTypes = {
    container: PropTypes.any,
  };

export default function Layout(props) {
  const { container, children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

const drawer = (
    <div>
        <div className={classes.toolbar} />
          <List>
            <ListItem button key="dashboard" component={Link} to="/dashboard">
              <ListItemIcon><Dashboard /></ListItemIcon>
              <ListItemText primary="DASHBOARD" />
            </ListItem>
          <Divider />
          {['Pedidos'].map((id, index) => (
            <ListItem button key={id} component={Link} to="/pedidos">
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={id} />
            </ListItem>
          ))}
        <Divider />
        </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            WS-SYSTEM
          </Typography>

            <IconButton 
              className={classes.alignRigth} 
              onClick={logout}
              component={Link} 
              to="/"
              >
                <PowerSettingsNewIcon fontSize="large" />
            </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
            {children}
      </main>
    </div>
  );
}

