import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {InputLabel,Button} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch,useSelector } from 'react-redux';
import { setRover } from '../redux/product/photo.action';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    minWidth:200
  },
}));

export default function SimpleSelect() {
  const dispatch = useDispatch()
  const classes = useStyles();
  const [rover, setrover] = React.useState('curiosity');


  const handleChange = (event) => {
    console.log(event.target.value)
    setrover(event.target.value)
    dispatch(setRover(event.target.value))


  };

  return (
    <div>

      <FormControl className={classes.formControl}>
        <FormHelperText>Select rover</FormHelperText>
        <Select
          value={rover}
          onChange={handleChange}
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
         
          <MenuItem value="curiosity">Curiosity</MenuItem>
          <MenuItem value="opportunity">Opportunity </MenuItem>
          <MenuItem value="spirit">Spirit</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}