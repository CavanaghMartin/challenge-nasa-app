import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch, useSelector } from 'react-redux';
import {  filterByCams } from '../redux/product/photo.action';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    minWidth:200
  },
}));

export default function SelectCamera() {
  const cameras = useSelector(state => state.photoReducer.cameras)
  const dispatch = useDispatch()
  const classes = useStyles();
  const [camera, setCamera] = React.useState('');


  const handleChange = (event) => {
    setCamera(event.target.value)
    dispatch(filterByCams(event.target.value))

  };

  return (
    <div> 

      <FormControl className={classes.formControl}>
        <FormHelperText>Filter by camera</FormHelperText>
        <Select
          defaultValue={camera}
          value={""}
          onChange={handleChange}
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {
            cameras && cameras.length > 0 && cameras.map((cam) => {
              return <MenuItem key={cam} value={cam}>{cam}</MenuItem>
            })
          }
          
        </Select>
      </FormControl>

    </div>
  );
}