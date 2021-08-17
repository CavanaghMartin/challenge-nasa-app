import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';
import { useDispatch } from 'react-redux';
import { setPhotosDate } from '../redux/product/photo.action';

export default function BasicDatePicker() {
  const dispatch = useDispatch()
  
  
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Earth date"
        value={value}
        onChange={(date) => {
          setValue(date);
          dispatch(setPhotosDate(date))
        }}
        renderInput={(params) => <TextField style={{maxWidth:"200px"}} {...params} />}
      />
    </LocalizationProvider>
  );
}