import React, { useState } from 'react'
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {  setSolar } from '../redux/product/photo.action';
const SearchBySolar = () => {
    const dispatch = useDispatch()

    const [input, setInput] = useState(120)


    const handleChange = (e) => {
        setInput(e.target.value);
        dispatch(setSolar(e.target.value))
    };


    return (
        <div>
            <TextField
                defaultValue={""}
                id="standard-number"
                label="Solar number"
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
