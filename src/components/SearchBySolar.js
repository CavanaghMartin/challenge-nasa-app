import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { GET_PHOTOS, setPage, setSolar } from '../redux/product/photo.action';
const SearchBySolar = () => {
    const dispatch = useDispatch()

    const [input, setInput] = useState(120)


    const handleChange = (e) => {
        setInput(e.target.value);
        //dispatch(setSolar)
        console.log(e.target.value)
        dispatch(setSolar(e.target.value))
    };


    return (
        <div>
            <TextField
                defaultValue={input}
                id="standard-number"
                label="sol Number"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={handleChange}
            />

        </div>
    )
}

export default SearchBySolar
