import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Paginate from '../components/Paginate';
import { getLastPhotos } from '../redux/product/photo.action';
import ImgMediaCard from '../components/Card';
import { makeStyles } from '@material-ui/styles';
import BasicDatePicker from '../components/DatePicker';
import SelectRover from '../components/SelectRover';
import { Box, Typography } from '@material-ui/core';
import SearchBySolar from '../components/SearchBySolar';
import SelectCamera from '../components/SelectCamera';
import Bar from '../components/AppBar';
const Home = () => {


    const classes = useStyles();
    const dispatch = useDispatch()
    const page = useSelector(state => state.photoReducer.page)

    useEffect(() => {
        dispatch(getLastPhotos())

    }, [dispatch])

    return (
        <>
            <Bar />
            <Paginate style={{ margin: "auto" }} />
            <Box className={classes.mainRow}>
                <Box className={classes.colMenuBox}>

                    <SelectRover />
                    <Typography variant="h6" gutterBottom>

                        Query by Martian sol:
                    </Typography >
                    <SearchBySolar />
                    <Typography variant="h6" gutterBottom>

                        Query by Earth date:
                    </Typography >
                    <BasicDatePicker />
                    <SelectCamera />
                </Box>
                <Box            className={classes.grid}>

                    {
                        page && page.length > 0 ? (

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
                        ) : (
                            <Typography variant="h3" gutterBottom>
                                theres no matching results
                            </Typography>
                        )
                    }

                </Box>
            </Box>
        </>
    )
}
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

export default Home
