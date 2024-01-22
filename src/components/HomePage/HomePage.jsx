import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import MovieItem from '../Movies/MovieItem';
import { Link } from 'react-router-dom';
import { getAllMovies } from '../../api_helpers/api_helpers.jsx';

function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getAllMovies()
            .then((data) => setMovies(data.movies))
            .catch((err) => console.log(err))
    }, [])

    console.log(movies);

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
                {movies && movies.slice(0, 4).map((movie, index) => <MovieItem id={movie.id} title={movie.title} key={index} posterUrl={movie.posterUrl} releaseDate={movie.releaseDate} />)}
            </Box>
            <Box display={"flex"} padding={5} margin={"auto"}>
                <Button LinkComponent={Link} to="/movies" variant='outlined' sx={{ margin: "auto", color: "#2b2d42" }}>View All Movies</Button>
            </Box>
        </Box>
    )
}

export default HomePage;