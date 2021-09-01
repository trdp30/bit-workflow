import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardView from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {Button} from '@mybittutorial/tutorial.elements.button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export function Card({ text }) {
  const classes = useStyles();

  return (
    <CardView className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button text="Learn More" variant="contained" color="secondary" />
      </CardActions>
    </CardView>
  );
}
