import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CallIcon from '@material-ui/icons/Call';
import Fab from '@material-ui/core/Fab';
import Popover from '@material-ui/core/Popover';
import teal from '@material-ui/core/colors/teal';
import { Backdrop } from '@material-ui/core';

const backgroundColor = teal[300]; // #F44336

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 450,
    minWidth:450,
    height: 540,
    border: "2px solid transparent",
    borderRadius: 20,
    // backgroundColor:backgroundColor
    backgroundImage: `linear-gradient(-90deg, #4ECDC4, #012f3a)`,
    backgroundPosition:`50% 50%`
  },
  media: {
    height: 400,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  root: {
    '& > *': {
        backgroundImage: `linear-gradient(-90deg, #4ECDC4, #012f3a)`,
        margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
    position: "relative",
    bottom: "160px",
    right: "-32%",
    // backgroundColor:`rgb(195, 143, 255)`
    backgroundImage: `linear-gradient(-90deg, #4ECDC4, #012f3a)`
  },
  fontClass: {
      color: 'black'
  },
  typography: {
    backgroundImage: `linear-gradient(-90deg, #4ECDC4, #012f3a)`,
    padding: theme.spacing(2),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    // color: '#fff',
    backgroundColor: `rgba(0, 0, 0 , 0.7)`
  },
  fontColor: {
    color: "turquoise"
  }
}));

export default function DescriptionViewCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={props.details.carImage}
        title={props.details.carName}
      />
      <CardContent>
        <Typography variant="h5" className={classes.fontClass}  component="h2">
            {props.details.carName}
        </Typography>
        <Typography  className={classes.fontClass} variant="body2" color="textSecondary" component="p">
             Model : {props.details.Description.model}
        </Typography>
        <Typography  className={classes.fontClass} variant="body2" color="textSecondary" component="p">
            {props.details.Description.about}
        </Typography>
      </CardContent>
        <Fab onClick={() => {setOpen(!open)}} className={classes.extendedIcon} variant="extended">
          <CallIcon  />
          Call Dealer
        </Fab>
        <Backdrop className={classes.backdrop}
            open={open}
            onClick={() => {
            setOpen(false);
            }}>   
            <h2 className={classes.fontColor} >
                Please Contact 8197770091 for further process !!
            </h2>
            <span className={classes.fontColor}>
                (Click anywhere to continue)
            </span>
      </Backdrop>
    </Card>
  );
}
