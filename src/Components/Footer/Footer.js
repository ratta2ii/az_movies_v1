import React from "react";
import { Box } from "@material-ui/core";
import AmericanFlag from './../../Assets/Images/american_flag.png';
import useStyles from './FooterStyles';

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <img
                src={AmericanFlag}
                className={classes.flag}
                alt='American flag representing veteran owned and operated'
                loading="lazy"
            />
            {/* <Typography className={classes.footerText}>
                U.S. Veteran Owned and Operated
            </Typography> */}
        </Box>
    );
};

export default Footer;
