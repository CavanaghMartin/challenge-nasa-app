import React from 'react'
import ImgMediaCard from '../components/Card';
import Bar from '../components/AppBar';
import { Box, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

const Favorite = () => {
    const favorites = useSelector(state => state.photoReducer.favorites)

    return (
        <div>
            <Bar favorites={true} />
            <Box style={{
                display: "flex",
                flexWrap: "wrap"
            }}>

                {
                    favorites && favorites.length > 0 ? (

                        favorites.map(p => {
                            return <ImgMediaCard favorite={true}
                                key={p.id}
                                img={p.img}
                                earth_date={p.earth_date}
                                sol={p.sol}
                                cameraName={p.cameraName}
                                roverName={p.roverName}

                            />
                        })
                    ) : (<Typography style={{left:"200px"}} variant="h3" gutterBottom>
                        theres no favorites
                    </Typography>
                    )
                }
            </Box>
        </div>

    )
}

export default Favorite
