import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Paginate from '../components/Paginate';
import { getPhotosOfCurrentDay, getPhotos } from '../redux/product/photo.action';
import ImgMediaCard from '../components/Card';
import { makeStyles } from '@material-ui/styles';
import BasicDatePicker from '../components/DatePicker';
import SelectRover from '../components/SelectRover';
import { Button, Box } from '@material-ui/core';
import SearchBySolar from '../components/SearchBySolar';
import SelectCamera from '../components/SelectCamera';
import Bar from '../components/AppBar';
const Home = () => {
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        grid: {
            display: "flex",
            flexWrap: "wrap"
        },
        mainRow: {
            display: "flex",
            width: "100%"
        },
        colMenuBox: {
            margin: "1em",
            minWidth: 200,
            display: "flex",
            flexDirection: "column",
        }


    });

    const classes = useStyles();

    const dispatch = useDispatch()
    const page = useSelector(state => state.photoReducer.page)
    useEffect(() => {
        dispatch(getPhotosOfCurrentDay())

    }, [dispatch])
    return (
        <>
            <Bar />
            <Paginate style={{margin:"auto"}} />
            <Box className={classes.mainRow}>
                <Box className={classes.colMenuBox}>

                    <SelectRover />
                    <p>

                        Querying by Martian sol
                    </p>
                    <SearchBySolar />
                    <p>

                        Querying by Earth date
                    </p>
                    <BasicDatePicker />
                    <SelectCamera />
                </Box>
                <Box className={classes.grid}>

                    {
                        page && page.length > 0 ?(

                            page.map(p => {
                               return <ImgMediaCard
                                   key={p.id}
                                   img={p.img_src}
                                   earth_date={p.earth_date}
                                   sol={p.sol}
                                   cameraName={p.camera.name}
                                   roverName={p.rover.name}
   
                               />
                            })
                        ):("theres not matching results")
                    }

                </Box>
            </Box>
        </>
    )
}

export default Home
