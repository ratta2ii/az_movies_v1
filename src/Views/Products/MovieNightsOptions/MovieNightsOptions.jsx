import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function MovieNightsOptions() {
    return (
        <div style={{ padding: '20px', color: "white", fontSize: "2.2em" }}>
            <h1>MovieNights Options</h1>
            <p>Details about MovieNights options will go here.</p>
            <Link to='/'>
                <Button sx={{ color: 'cornflowerblue', mx: 1 }}>Return Home</Button>
            </Link>
        </div>
    );
}

export default MovieNightsOptions;