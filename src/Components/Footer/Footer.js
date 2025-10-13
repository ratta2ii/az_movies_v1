import React from "react";
import { useLocation, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LogoCarousel from "../LogoCarousel/LogoCarousel";
import AmericanFlagLogo from "./../../Assets/Images/american_flag.png";
import { makeStyles } from "@material-ui/core/styles";
// MUI v5 dropdown
import { Button, Menu, MenuItem, Divider } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "auto",
        color: "#eceff1",
        backgroundColor: "#0d1117",
    },
    customerCommentGridItm: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRight: "1px solid #1c222a",
        [theme.breakpoints.down("md")]: { border: "none" },
        [theme.breakpoints.down("sm")]: { display: "none" },
    },
    referenceBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 300,
        textAlign: "justify",
        color: "#efefef",
        fontFamily: "emoji",
        padding: "0 20%",
        [theme.breakpoints.down("md")]: { width: 775, textAlign: "center" },
        [theme.breakpoints.down("sm")]: { width: 635 },
        [theme.breakpoints.down("xs")]: { textAlign: "left", padding: "0 12%", fontSize: 15 },
    },
    reference: {
        fontFamily: "emoji",
        fontSize: 17,
        lineHeight: 1.1,
        marginTop: 15,
    },
    signatureCon: {
        height: 30,
        textAlign: "right",
        width: "100%",
        marginTop: 10,
        fontFamily: "emoji",
        fontSize: 17,
        color: "#efefef",
        [theme.breakpoints.down("md")]: { textAlign: "right" },
        [theme.breakpoints.down("xs")]: { marginTop: 5, fontSize: 16 },
    },
    signature: { fontFamily: "emoji", display: "inline" },
    stars: { color: "#ffd700", fontSize: 16, marginLeft: 5, display: "inline" },
    aboutMeCardGridItm: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderLeft: "1px solid #1c222a",
        [theme.breakpoints.down("md")]: { border: "none", alignItems: "unset" },
        [theme.breakpoints.down("sm")]: { marginTop: 40 },
        [theme.breakpoints.down("xs")]: {
            marginTop: 0,
            padding: "0 0 10% 0",
            borderLeft: "none",
            borderTop: "none",
        },
    },
    cardBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        height: 300,
        textAlign: "left",
        color: "#efefef",
        fontFamily: "emoji",
        paddingLeft: 40,
        [theme.breakpoints.down("xs")]: { padding: "2%", textAlign: "center" },
    },
    copyrightGridItm: {
        backgroundColor: "#0d1117",
        borderTop: "2px solid #1c222a",
        height: 60,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: { marginTop: 90 },
        [theme.breakpoints.down("xs")]: { height: 60, marginTop: -50 },
    },
    copyrightSig: {
        color: "#ffffff52",
        fontSize: 16,
        fontFamily: "monospace",
        [theme.breakpoints.down("xs")]: { fontSize: 12 },
    },
    infoLine: {
        display: "flex",
        alignItems: "center",
        marginBottom: 10,
        fontSize: 18,
    },
    infoIcon: {
        marginRight: 12,
        fontSize: 20,
    },
    infoText: { fontSize: 18 },
    companyLogo: {
        width: 240,
        display: "block",
        margin: "0 auto 24px auto",
        [theme.breakpoints.down("xs")]: { width: 200, marginTop: -50, marginBottom: 20 },
    },
}));

const Footer = (props) => {
    const classes = useStyles();
    const location = useLocation();
    const showCarousel = location.pathname === "/" || location.pathname === "/ice-cream-food-truck";

    // Locations dropdown state/handlers
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleOpenLocations = (event) => setAnchorEl(event.currentTarget);
    const handleCloseLocations = () => setAnchorEl(null);

    return (
        <>
            {showCarousel && <LogoCarousel />}

            <Grid container className={classes.root}>
                {/* Left side */}
                <Grid item xs={12} lg={6} className={classes.customerCommentGridItm}>
                    <Box className={classes.referenceBox}>
                        <Typography className={classes.reference}>
                            "Just wanted to say THANK YOU SO MUCH for making our company’s Ice Cream Social a Hit! We appreciate you being so accommodating and able to do our event, even with short notice. And we are so glad you were able to offer such a great event and more importantly stay within our budget. We look forward to the next one! Thank you again!"
                        </Typography>
                        <Box className={classes.signatureCon}>
                            <Typography className={classes.signature} component="span">
                                — Sandra, Pheonix
                            </Typography>
                            <span className={classes.stars}>★★★★★</span>
                        </Box>
                    </Box>
                </Grid>

                {/* Right side */}
                <Grid item xs={12} lg={6} className={classes.aboutMeCardGridItm}>
                    <Box className={classes.cardBox}>
                        {/* Email */}
                        <Box className={classes.infoLine}>
                            <i className={`fas fa-envelope ${classes.infoIcon}`}></i>
                            <Typography className={classes.infoText}>
                                <a href="mailto:info@outdoormoviepros.com" style={{ color: "#efefef", textDecoration: "none", fontSize: 18 }}>
                                    info@outdoormoviepros.com
                                </a>
                            </Typography>
                        </Box>

                        {/* Phone */}
                        <Box className={classes.infoLine}>
                            <i className={`fas fa-phone ${classes.infoIcon}`}></i>
                            <Typography className={classes.infoText}>
                                <a href="tel:4802861664" style={{ color: "#efefef", textDecoration: "none", fontSize: 18 }}>
                                    480-286-1664
                                </a>
                            </Typography>
                        </Box>

                        {/* Locations (moved ABOVE the Get a Quote link, styled like others) */}
                        <Box className={classes.infoLine}>
                            <i className={`fas fa-map-marker-alt ${classes.infoIcon}`}></i>
                            <Typography className={classes.infoText} component="span">
                                <Button
                                    id="service-areas-button"
                                    onClick={handleOpenLocations}
                                    sx={{ color: "#efefef", textTransform: "none", p: 0, minWidth: 0, fontSize: 18 }}
                                >
                                    Locations
                                </Button>
                            </Typography>

                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleCloseLocations}
                                keepMounted
                                MenuListProps={{ "aria-labelledby": "service-areas-button" }}
                            >
                                <MenuItem onClick={handleCloseLocations} component={Link} to="/phoenix">Phoenix</MenuItem>
                                <MenuItem onClick={handleCloseLocations} component={Link} to="/mesa">Mesa</MenuItem>
                                <MenuItem onClick={handleCloseLocations} component={Link} to="/scottsdale">Scottsdale</MenuItem>
                                <MenuItem onClick={handleCloseLocations} component={Link} to="/gilbert">Gilbert</MenuItem>
                                <MenuItem onClick={handleCloseLocations} component={Link} to="/chandler">Chandler</MenuItem>
                                <MenuItem onClick={handleCloseLocations} component={Link} to="/tempe">Tempe</MenuItem>
                                <MenuItem onClick={handleCloseLocations} component={Link} to="/paradise-valley">Paradise Valley</MenuItem>
                                <MenuItem onClick={handleCloseLocations} component={Link} to="/glendale">Glendale</MenuItem>
                                <MenuItem onClick={handleCloseLocations} component={Link} to="/peoria">Peoria</MenuItem>
                                <MenuItem onClick={handleCloseLocations} component={Link} to="/queen-creek">Queen Creek</MenuItem>
                                <MenuItem onClick={handleCloseLocations} component={Link} to="/san-tan-valley">San Tan Valley</MenuItem>
                                <MenuItem onClick={handleCloseLocations} component={Link} to="/tolleson">Tolleson</MenuItem>
                                <MenuItem onClick={handleCloseLocations} component={Link} to="/buckeye">Buckeye</MenuItem>
                                <MenuItem onClick={handleCloseLocations} component={Link} to="/goodyear">Goodyear</MenuItem>
                                <MenuItem onClick={handleCloseLocations} component={Link} to="/anthem">Anthem</MenuItem>
                                <Divider />
                                <MenuItem onClick={handleCloseLocations} component={Link} to="/locations">
                                    Other Locations
                                </MenuItem>
                            </Menu>
                        </Box>

                        {/* Get a Quote Now (left as-is, now below Locations) */}
                        <Box className={classes.infoLine} style={{ marginBottom: 0 }}>
                            <i className={`fas fa-paper-plane ${classes.infoIcon}`}></i>
                            <Typography className={classes.infoText}>
                                <a href="/contact" style={{ color: "#efefef", textDecoration: "underline", fontSize: 18 }}>
                                    Get a Quote Now
                                </a>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* Bottom bar */}
                <Grid item className={classes.copyrightGridItm}>
                    <Box className={classes.copyrightSig}>
                        Presented By{" "}
                        <img
                            src={AmericanFlagLogo}
                            alt="American Flag Logo"
                            style={{ height: "1.5em", verticalAlign: "middle" }}
                        />{" "}
                        © 2025
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

Footer.propTypes = {
    location: PropTypes.object,
};

export default Footer;
