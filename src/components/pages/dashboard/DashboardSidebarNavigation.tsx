import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  Toolbar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles } from '@mui/styles';
import { useEffect } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    link: { textDecoration: 'none', color: 'inherit' },
    logoWithLink: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'inherit',
    },
  }),
);

function DashboardSidebarNavigation() {
  const classes = useStyles();
  // const match = useMatch();

  useEffect(() => {}, []);

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Toolbar
          style={{ width: '6rem', height: 'auto' }}
          className={classes.toolbar}
        >
          <Link to="/dashboard" className={classes.logoWithLink}>
            Logo
          </Link>
        </Toolbar>
        <div className={classes.drawerContainer}>
          <List>
            <Link className={classes.link} to="/dashboard/settings-and-privacy">
              <ListItem button>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="settings and privacy" />
              </ListItem>
            </Link>
            <a className={classes.link} href="/">
              <ListItem button>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="logout" />
              </ListItem>
            </a>
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default DashboardSidebarNavigation;
