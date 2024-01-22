import { AppBar, Autocomplete, Box, Tab, Tabs, TextField, Toolbar } from '@mui/material'
import React, { useEffect, useState } from 'react';
import MovieIcon from '@mui/icons-material/Movie';
import { getAllMovies } from '../../api_helpers/api_helpers';
const dummyArray = ["Memory", "Brahmastra", "Forest grump"]

function Header() {
    const [value, setValue] = useState(0);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getAllMovies()
            .then((data) => setMovies(data.movies))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <AppBar sx={{ bgcolor: "#2b2d42" }}>
                <Toolbar>
                    <Box width={'20%'}>
                        <MovieIcon />
                    </Box>
                    <Box width={'50%'} margin={'auto'}>
                        <Autocomplete
                            freeSolo
                            options={movies && movies.map((option) => option.title)}
                            renderInput={(params) => <TextField sx={{ input: { color: "white" } }} variant='standard' {...params} placeholder="Search Across Movies" />}
                        />
                    </Box>
                    <Box display={"flex"}>
                        <Tabs value={value} onChange={(e, val) => setValue(val)} textColor='inherit' indicatorColor='secondary'>
                            <Tab label="Movies" />
                            <Tab label="Admin" />
                            <Tab label="Auth" />
                        </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header