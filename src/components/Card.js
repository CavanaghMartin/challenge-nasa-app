import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:10
  },
});

export default function ImgMediaCard({img,earth_date,sol,cameraName,roverName}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="photoMars"
          image={img}
          title="photoMars"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="h5">
            {earth_date}
          </Typography>
          <Typography gutterBottom variant="h7" component="h5">
            {sol}
          </Typography>
          <Typography gutterBottom variant="h7" component="h5">
            {cameraName}-----{roverName}
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}