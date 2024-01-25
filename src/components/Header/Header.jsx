import { AppBar, Autocomplete, Box, IconButton, Tab, Tabs, TextField, Toolbar } from '@mui/material'
import React, { useEffect, useState } from 'react';
import MovieIcon from '@mui/icons-material/Movie';
import { getAllMovies } from '../../api_helpers/api_helpers';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminActions, userActions } from '../../store';
// const dummyArray = ["Memory", "Brahmastra", "Forest grump"]

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn)
    const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn)

    const [value, setValue] = useState(0);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState();

    useEffect(() => {
        getAllMovies()
            .then((data) => setMovies(data.movies))
            .catch((err) => console.log(err));
    }, []);

    function logout(isAdmin) {
        dispatch(isAdmin ? adminActions.logout() : userActions.logout());
    }

    const handleChange = (e, val) => {
        setSelectedMovie(val);
        const movie = movies.find((mov) => mov.title === val);
        console.log(movie);
        if (isUserLoggedIn) {
            navigate(`/booking/${movie._id}`);
        }
    };

    return (
        <>
            <AppBar position='sticky' sx={{ bgcolor: "#2b2d42" }}>
                <Toolbar>
                    <Box width={'20%'}>
                        <IconButton LinkComponent={Link} to="/">
                            <MovieIcon />
                        </IconButton>
                    </Box>
                    <Box width={'50%'} margin={'auto'}>
                        <Autocomplete
                            onChange={handleChange }
                            freeSolo
                            options={movies && movies.map((option) => option.title)}
                            renderInput={(params) => <TextField sx={{ input: { color: "white" } }} variant='standard' {...params} placeholder="Search Across Movies" />}
                        />
                    </Box>
                    <Box display={"flex"}>
                        <Tabs value={value} onChange={(e, val) => setValue(val)} textColor='inherit' indicatorColor='secondary'>
                            <Tab LinkComponent={Link} to="/movies" label="Movies" />
                            {!isAdminLoggedIn && !isUserLoggedIn && <>
                                <Tab LinkComponent={Link} to="/admin" label="Admin" />
                                <Tab LinkComponent={Link} to="/auth" label="Auth" />
                            </>}
                            {isUserLoggedIn && <>
                                <Tab LinkComponent={Link} to="/user" label="Profile" />
                                <Tab onClick={() => logout(false)} LinkComponent={Link} to="/" label="Logout" />
                            </>}
                            {isAdminLoggedIn && <>
                                <Tab LinkComponent={Link} to="/add" label="Add Movie" />
                                <Tab LinkComponent={Link} to="/admin" label="Profile" />
                                <Tab onClick={() => logout(true)} LinkComponent={Link} to="/" label="Logout" />
                            </>}
                        </Tabs>
                    </Box>
                </Toolbar>
            </AppBar >
        </>
    )
}

export default Header