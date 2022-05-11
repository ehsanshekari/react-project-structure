import { Link } from 'react-router-dom';
import { createStyles, makeStyles } from '@mui/styles';
import { AppBar, Button, colors, Theme, Toolbar } from '@mui/material';

// import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      // marginRight: useTheme().spacing(2),
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      color: colors.lightBlue[50],
      textDecoration: 'none',
    },
  }),
);

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link className={`${classes.link} ${classes.title}`} to="/">
            LOGO
          </Link>
          <Button color="inherit">
            <Link className={classes.link} to="/">
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.link} to="/about">
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.link} to="/dashboard">
              Dashboard
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.link} to="/login">
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
