import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tapioka from './Tapioka';

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
const TapiokaCooking = [
  { count: 0, Name: '抹茶', Topping: 'きな粉', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYjawxsADevYO5C6omq2Z8-L2gp95ozhBhlGrKYD9blcjTDTsJ&s' },
  { count: 0, Name: 'ココア', Topping: '生クリーム', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh9J9MaTdr4YDyBGlPXvJP43EjHquxSRrGu_6mOJkhr2Ff5E09lg&s' },
  { count: 0, Name: '北海道牛乳', Topping: '黒蜜', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DLm75Tbq-ookaTFbGIc8V3KXVVKfdRIe_C4jtNAFhhJ86hHr&s' }
];


export default function FullWidthGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Grid container spacing={3}>
        <Grid item xs={6} sm={4} >
          <Paper className={classes.paper}>
            <Tapioka count={TapiokaCooking[0].count} Name={TapiokaCooking[0].Name} Topping={TapiokaCooking[0].Topping} img={TapiokaCooking[0].img}></Tapioka>

          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <Tapioka count={TapiokaCooking[1].count} Name={TapiokaCooking[1].Name} Topping={TapiokaCooking[1].Topping} img={TapiokaCooking[1].img}></Tapioka>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <Tapioka count={TapiokaCooking[2].count} Name={TapiokaCooking[2].Name} Topping={TapiokaCooking[2].Topping} img={TapiokaCooking[2].img}></Tapioka>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}