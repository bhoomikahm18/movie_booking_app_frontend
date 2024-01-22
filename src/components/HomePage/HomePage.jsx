import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import MovieItem from '../Movies/MovieItem';

function HomePage() {
    return (
        <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={2} >
            <Box margin={"auto"} width={"80%"} height={"40vh"} padding={2}>
                <img
                    src='https://upload.wikimedia.org/wikipedia/en/b/b4/At-the-movies.jpg'
                    alt='atmovies' width={"100%"} height={"100%"} />
            </Box>
            <Box padding={5} margin={"auto"}>
                <Typography variant='h4' textAlign={"center"}>Latest Reliases</Typography>
            </Box>
            <Box display={"flex"} width={"80"} justifyContent={"center"} flexWrap={"wrap"}>
                {[1, 2, 3, 4].map((item) => <MovieItem key={item} />)}
            </Box>
            <Box display={"flex"} padding={5} margin={"auto"}>
                <Button variant='outlined' sx={{ margin: "auto", color: "#2b2d42" }}>View All Movies</Button>
            </Box>
        </Box>
    )
}

export default HomePage;