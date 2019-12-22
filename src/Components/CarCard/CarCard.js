import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import teal from '@material-ui/core/colors/teal';

const backgroundColor = teal[300]; // #F44336

const useStyles = makeStyles({
  card: {
    maxWidth: 450,
    minWidth:450,
    height: 540,
    border: "2px solid transparent",
    borderRadius: 20,
    // background: backgroundColor
    backgroundImage: `linear-gradient(-90deg, #4ECDC4, #012f3a)`
  },
  media: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundPosition:`50% 50%`,
    backgroundSize: `auto 100%`
  },
  fontClass: {
      color: 'black'
  }
});

const  CarCard = (props) => {
  const classes = useStyles();

  let card = <div></div>
  card = (
    <Card className={classes.card}>
    {/* <CardActionArea> */}
        <CardMedia
          className={classes.media}
          image={props.details.carImage}
          title={props.details.carName} >
        </CardMedia>
        <CardContent>
          <Typography variant="h5" className={classes.fontClass}  component="h2">
              {props.details.carName}
          </Typography>
          <Typography  className={classes.fontClass} variant="body2" color="textSecondary" component="p">
              To See Details of Model and Owner swipe right
          </Typography>
        </CardContent>
    </Card>
  )

  return (
      <div>
        {card}
      </div>
  );
}

export default React.memo(CarCard)