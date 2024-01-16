import { AppBar, Autocomplete, Box, Tab, Tabs, TextField, Toolbar } from '@mui/material'
import React, { useState } from 'react';
import MovieIcon from '@mui/icons-material/Movie';
const dummyArray = ["Memory", "Brahmastra", "Forest grump"]

function Header() {
    const [value, setValue] = useState(0);
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Box width={'20%'}>
                        <MovieIcon />
                    </Box>
                    <Box width={'50%'} margin={'auto'}>
                        <Autocomplete
                            freeSolo
                            options={dummyArray.map((option) => option)}
                            renderInput={(params) => <TextField variant='standard' {...params} label="Search Across Movies" />}
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