import React from "react";
import {
    Grid,
    Typography,
    Box,
    Button,
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IceCreamTruckImage from "./../../../Assets/Images/ice-cream-truck.jpg";
import IceCreamTruckTwo from "./../../../Assets/Images/ice-cream-truck-two.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    sectionLight: {
        backgroundColor: 'rgb(12 15 24 / 75%)',
        marginTop: 200,
        marginBottom: 100, // Update responsive margins TODO:
        padding: "150px 8%",
        [theme.breakpoints.down("lg")]: {
            padding: "100px 12% 150px",
        },
        [theme.breakpoints.down("xs")]: {
            padding: "75px 12%",
        },
    },
    imageColLight: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "center",
    },
    imageWrapper: {
        maxWidth: 475,
        width: "100%",
        marginBottom: theme.spacing(3),
    },
    oblongImage: {
        width: "100%",
        height: "auto",
        maxHeight: 330,
        borderRadius: 10,
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        border: "4px solid rgba(0, 0, 0, 0.05)",
        transition: "transform 0.3s ease",
        "&:hover": {
            transform: "scale(1.02)",
        },
    },
    textContent: {
        maxWidth: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    title: {
        fontWeight: 700,
        fontFamily: "system-ui !important",
        fontSize: "2rem",
        marginBottom: 10,
        // color: "#1b2027",
        color: "#fff",
        [theme.breakpoints.down("sm")]: {
            fontSize: "2.2rem",
        },
    },
    subtext: {
        fontSize: "1.1rem",
        // color: "#444",
        color: "#fff",
        marginBottom: 15,
        lineHeight: "1.4em",
    },
    italicSubtext: {
        fontSize: "1.1rem",
        // color: "#444",
        color: "#fff",
        marginBottom: 15,
        fontStyle: "italic",
        lineHeight: "1.4em",
    },
    bulletList: {
        marginBottom: 25,
        paddingLeft: 8,
    },
    listItem: {
        padding: 0,
        marginLeft: 28,
        "& .MuiListItemText-primary": {
            lineHeight: "1.3em",
        },
    },
    listItemOptions: {
        padding: 0,
        paddingBottom: 5,
        "& .MuiListItemText-primary": {
            lineHeight: "1.3em",
        },
    },
    listItemText: {
        // color: "#444",
        color: "#fff",
        fontSize: "1rem",
        marginLeft: theme.spacing(2), // Indentation for hyphens
    },
    sectionHeader: {
        fontWeight: 600,
        fontSize: "1.2rem",
        // color: "#1b2027",
        color: "#fff",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
    sectionHeaderOptions: {
        fontWeight: 600,
        fontSize: "1.2rem",
        // color: "#1b2027",
        color: "#fff",
        marginTop: -10,
        marginBottom: theme.spacing(1),
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "left",
        marginLeft: 25,
        gap: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
        },
    },
    ctaButton: {
        backgroundColor: "#0264e3",
        color: "#ffffff",
        textTransform: "none",
        fontWeight: 500,
        padding: "10px 24px",
        borderRadius: 8,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        width: "calc(48% - 8px)",
        "&:hover": {
            color: "#358cfd",
            backgroundColor: "#000000",

            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
        },
        [theme.breakpoints.down("xs")]: {
            width: "calc(50% - 8px)",
        },
    },
    secondaryButton: {
        color: "#358cfd",
        border: "2px solid #358cfd",
        // backgroundColor: "#000000",
        textTransform: "none",
        fontWeight: 500,
        padding: "10px 24px",
        borderRadius: 8,
        transition: "all 0.3s ease",
        width: "calc(48% - 8px)",
        "&:hover": {
            backgroundColor: "#1b2027",
            // color: "#fff",
            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
        },
        [theme.breakpoints.down("xs")]: {
            width: "calc(50% - 8px)",
        },
    },
    eventOptionsWrapper: {
        maxWidth: 475,
        width: "100%",
        marginTop: theme.spacing(2),
    },
}));

const IceCreamTruck = () => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.sectionLight}>
                <Box
                    style={{
                        width: "100%",
                        height: 150,
                        border: "5px solid hotpink",
                        marginBottom: 80,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor: 'aliceblue',
                        color: '#fff',
                    }} >
                    <Typography variant="h1" style={{fontSize: "1.8em"}}>Sundae Bar & Barista Coffee Truck for Events in Phoenix</Typography>
                </Box>
                <Grid container spacing={4} alignItems="center" justifyContent="center">
                    {/* Images and Flexible Event Options on left */}
                    <Grid item xs={12} md={6} className={classes.imageColLight}>
                        <Box className={classes.imageWrapper}>
                            <img
                                src={IceCreamTruckImage}
                                alt="Ice Cream Truck Exterior"
                                className={classes.oblongImage}
                            />
                        </Box>
                        <Box className={classes.imageWrapper}>
                            <img
                                src={IceCreamTruckTwo}
                                alt="Coffee and Ice Cream Service"
                                className={classes.oblongImage}
                            />
                        </Box>
                        <Box className={classes.eventOptionsWrapper}>
                            <Typography className={classes.sectionHeaderOptions}>
                                Flexible Event Options:
                            </Typography>
                            <List>
                                <ListItem className={classes.listItemOptions}>
                                    <ListItemText
                                        primary={
                                            <>
                                                - <strong>Rent the Truck</strong>: Treat your employees or
                                                guests to the valley’s best dessert food truck. We offer
                                                full catering with pre-pay options for a seamless
                                                experience.
                                            </>
                                        }
                                        className={classes.listItemText}
                                    />
                                </ListItem>
                                <ListItem className={classes.listItemOptions}>
                                    <ListItemText
                                        primary={
                                            <>
                                                - <strong>Pay As You Go</strong>: Perfect for public
                                                events! We’ll roll up and collect directly from your
                                                event-goers, bringing premium ice cream and coffee without
                                                any upfront cost.
                                            </>
                                        }
                                        className={classes.listItemText}
                                    />
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>

                    {/* Text on right */}
                    <Grid item xs={12} md={6}>
                        <Box className={classes.textContent}>
                            <Typography variant="h4" className={classes.title}>
                                Ice Cream & Coffee Food Truck
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                style={{ fontStyle: "italic", color: "#555", marginBottom: 8 }}
                            >
                                — Rolling Up with Smiles Valley-Wide —
                            </Typography>
                            <Typography className={classes.subtext}>
                                Ice Cream Sociables’ new food truck brings the joy of a full-service sundae bar and barista-quality coffee to any event across the Phoenix valley. Our Ice Cream Socialites, dressed in iconic 50s-style gear, deliver a unique and memorable experience with top-tier service.
                            </Typography>
                            <Typography className={classes.subtext}>
                                Whether it’s a morning corporate meeting, a wedding, a festival, or a late-night party, we roll up on time, ready to serve. From premium lattes to build-your-own sundaes, we’ve got something to make everyone smile.
                            </Typography>
                            <List className={classes.bulletList}>
                                <Typography className={classes.sectionHeader}>
                                    ☕ Premium Coffee Offerings:
                                </Typography>
                                {[
                                    "Lattes",
                                    "Cappuccinos",
                                    "Frappuccinos",
                                    "Macchiatos",
                                    "Espresso Shots",
                                ].map((item, i) => (
                                    <ListItem key={`coffee-${i}`} className={classes.listItem}>
                                        <ListItemText
                                            primary={`- ${item}`}
                                            className={classes.listItemText}
                                        />
                                    </ListItem>
                                ))}
                                <Typography className={classes.sectionHeader}>
                                    🍦 Sundae Bar Delights:
                                </Typography>
                                {[
                                    "Build-your-own Sundae Bar",
                                    "Waffle Cones & Bowls",
                                    "Italian Ice",
                                    "Ice Cream Sandwiches & Bars",
                                    "Classic Milkshakes",
                                ].map((item, i) => (
                                    <ListItem key={`icecream-${i}`} className={classes.listItem}>
                                        <ListItemText
                                            primary={`- ${item}`}
                                            className={classes.listItemText}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                            <Box className={classes.buttonGroup}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.ctaButton}
                                    component={Link}
                                    to="/contact"
                                    aria-label="Get a quote for the Food Truck Experience"
                                >
                                    Get a Quote
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    className={classes.secondaryButton}
                                    href="tel:4802861664"
                                    aria-label="Call now to book the Food Truck Experience"
                                >
                                    (480) 286-1664
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default IceCreamTruck;