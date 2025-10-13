import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, Grid } from "@material-ui/core";
import InsuranceSeal from './../../Assets/Images/insurance-seal.webp';
import useStyles from "./CallToAction.Styles";


function CallToAction() {
    const classes = useStyles();

    return (
        <Box className={classes.ctaBox}>
            <Typography variant="h5" className={classes.ctaText}>
                Ready to schedule your event? Contact us today!
            </Typography>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
                <Grid item>
                    <img
                        src={InsuranceSeal}
                        alt="Chinook Water Testing is Licensed and Insured"
                        className={classes.ctaImage}
                        style={{ width: 120, height: 120 }} // Adjust size as needed
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        component={Link}
                        to="/contact"
                        className={classes.ctaButton}
                    >
                        Contact Us
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default CallToAction;
