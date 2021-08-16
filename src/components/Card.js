import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch,useSelector } from 'react-redux';
import { setStorage, deleteFavorite } from '../redux/product/photo.action';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:10,
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
    
  },
});

export default function ImgMediaCard({img,earth_date,sol,cameraName,roverName,favorite}) {
  const classes = useStyles();
   const dispatch = useDispatch()
   const favorites = useSelector(state => state.photoReducer.favorites)

   function handleClick(e) {
    dispatch(setStorage([...favorites,{img,earth_date,sol,cameraName,roverName}]))
   }
   function handleDelete(e) {
    dispatch(deleteFavorite({img,earth_date,sol,cameraName,roverName}))
   }

  return (
    <Card data-testid={`card`} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="photoMars"
          image={img}
          title="photoMars"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="h5">
            Earth date:{earth_date} 
         
            Solar number:{sol}
          </Typography>
          <Typography gutterBottom variant="h7" component="h5">
            Camera:{cameraName} 
      
            Rover:{roverName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {favorite?( <Button onClick={handleDelete} size="small" variant="outlined" color="primary">
          remove from favorites
        </Button>):(
          <Button onClick={handleClick} size="small" variant="outlined" color="primary">
          Add to favorite
        </Button>

        )}
  
      </CardActions>
    </Card>
  );
}