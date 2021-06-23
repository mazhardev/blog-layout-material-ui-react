import { CssBaseline, AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import './App.css';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  }

}))
function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position='relative' >
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap >Album layout</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
