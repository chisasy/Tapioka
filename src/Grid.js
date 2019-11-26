import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



export default function FullWidthGrid(props) {
  
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3} flag ={props.flag}  >
        <Grid item xs={6} sm={4} flag ={props.flag}>
          <Paper className={classes.paper} onClick={() => props.click(props.flag)}>{props.menu}</Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>{props.storeName}</Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>{props.site}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}