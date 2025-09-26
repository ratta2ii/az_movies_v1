import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Grid, Typography, Box, Divider, Button, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle'; // Added for green check icons
import useStyles from "./Locations.Styles";
import InspectionImg from "../../Assets/Images/inspection.webp";
import ProductivityImg from "../../Assets/Images/productivity.webp";
import CallToAction from "../../Components/CallToAction/CallToAction";
import { Helmet } from "react-helmet";

function Locations() {
    const location = useLocation();
    const classes = useStyles();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    const yOffset = -175; // adjust based on navbar height
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }, 0);
            }
        }
    }, [location]);

    const city = location.pathname.split("/")[1]; // will be '' for /service-areas (general route)
    const isGeneralAreaPage = city === "service-areas" || city === "";

    const formattedCity = !isGeneralAreaPage
        ? (() => {
            const formatted = city
                .split('-')
                .map(word => (word.toLowerCase() === 'd' ? "d'" : word.charAt(0).toUpperCase() + word.slice(1)))
                .join(' ')
                .replace("d' ", "d'");
            return `${formatted}, Arizona`;
        })()
        : null;


    const regionLabel = "Phoenix Metro Area, including Maricopa, Pinal, and surrounding counties";


    const mainTitle = isGeneralAreaPage
        ? <>AZ Movie Nights offers Outdoor Movie Nights, Concessions, and an Ice Cream Food Truck. <span style={{ color: '#fff798', textDecoration: 'underline', fontWeight: 600 }}>Our Service Areas include all of {regionLabel}</span>.</>
        : <>AZ Movie Nights offers Outdoor Movie Nights, Concessions, and an Ice Cream Food Truck in <span style={{ color: '#fff798', textDecoration: 'underline', fontWeight: 600 }}>{formattedCity}, and the Surrounding Areas</span>. Our Service Areas include all of {regionLabel}.</>;



    return (
        <section className={classes.root}>
            <Helmet>
                <title>
                    {isGeneralAreaPage
                        ? "Certified Well Water Testing & System Inspections in North Idaho & Eastern WA"
                        : `Certified Well Water Testing & System Inspection in ${formattedCity}`}
                </title>
                <meta
                    name="description"
                    content={
                        isGeneralAreaPage
                            ? "Certified well water testing, flow rate testing (GPM), and system inspections across North Idaho and Eastern Washington. VA, FHA, USDA & HUD compliant."
                            : `Certified well water testing, GPM flow rate testing, and system inspections in ${formattedCity} and nearby areas. VA, FHA, USDA & HUD compliant.`
                    }
                />
                <meta
                    name="keywords"
                    content={
                        isGeneralAreaPage
                            ? "well water testing, system inspections, well inspections, flow rate testing (GPM), North Idaho, Eastern Washington, VA loan water test, FHA loan water testing, HUD testing, real estate water testing"
                            : `well water testing in ${formattedCity}, system inspections in ${formattedCity}, flow rate testing (GPM), VA loan testing, FHA loan water testing, HUD water testing, real estate water inspection`
                    }
                />
                <meta name="robots" content="index, follow" />
                <link
                    rel="canonical"
                    href={
                        isGeneralAreaPage
                            ? "https://chinookwater.com/service-areas"
                            : `https://chinookwater.com/${city}`
                    }
                />
                <meta
                    property="og:title"
                    content={
                        isGeneralAreaPage
                            ? "Certified Well Water Testing & System Inspections in North Idaho & Eastern WA"
                            : `Certified Well Water Testing in ${formattedCity} | Flow Rate Testing (GPM) & System Inspections`
                    }
                />
                <meta
                    property="og:description"
                    content={
                        isGeneralAreaPage
                            ? "Certified well water testing, flow rate testing (GPM), and system inspections across North Idaho and Eastern Washington. VA, FHA, USDA & HUD compliant."
                            : `Certified well water testing, GPM flow rate testing, and system inspections in ${formattedCity} and nearby areas. VA, FHA, USDA & HUD compliant.`
                    }
                />
                <meta name="author" content="Chinook Water Testing" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chinook Water Testing" />
                <meta
                    property="og:url"
                    content={
                        isGeneralAreaPage
                            ? "https://chinookwater.com/service-areas"
                            : `https://chinookwater.com/${city}`
                    }
                />
                <meta property="og:image" content="https://chinookwater.com/chinookLogo.jpg" />
                <meta property="og:image:alt" content="Chinook Water Testing company logo" />
            </Helmet>

            <header className={classes.header}>
                <Box className={classes.titleBox}>
                    <Typography variant="h1" className={classes.title}>
                        {mainTitle}
                    </Typography>
                    <Typography className={classes.subText}>
                        Ready to schedule your event<span>{isGeneralAreaPage ? "" : ` in ${formattedCity}`}</span>?
                        <br />
                        <a href="tel:+12083523909" className={`${classes.phoneLink}`}>
                            (208) 352-3909
                        </a>
                    </Typography>
                </Box>
            </header>

            {/* Sampling & Testing Section */}
            <Grid container spacing={4} className={classes.sectionContainer}>
                <Grid item xs={12} id="sampling-section" className={classes.serviceSection}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={5}>
                            <Box className={classes.imageButtonWrapper}>
                                <img src="/river.webp" alt="All Service Areas include Sampling and Testing" className={classes.sectionImage} />
                                <Box className={classes.buttonContainerDesktop}>
                                    <Button
                                        size="small"
                                        className={classes.contactButton}
                                        component={Link}
                                        to="/contact"
                                    >
                                        Get a Quote
                                    </Button>
                                    <Button
                                        size="small"
                                        className={classes.contactButton}
                                        component="a"
                                        href="tel:+12083523909"
                                    >
                                        (208) 352-3909
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={7} className={classes.sectionContent}>
                            <Typography variant="h4" className={classes.sectionTitle}>
                                Outdoor Movie Nights
                            </Typography>
                            <Divider className={classes.divider} />
                            <Typography variant="body1" className={classes.sectionText}>
                                Chinook Water Testing offers professional well water sampling and lab-certified testing in{' '}
                                <span>{isGeneralAreaPage ? "the Inland Northwest" : `${formattedCity}, and nearby areas`}</span>.
                                Our services ensure your drinking water meets state health codes, real estate transaction standards,
                                and VA, FHA, USDA & HUD loan requirements. Whether you are a homeowner, real estate agent, or loan officer,
                                we deliver accurate, certified results for peace of mind.
                            </Typography>
                            <List className={classes.bulletList}>
                                {[
                                    "Bacterial and Potability Testing",
                                    "Heavy Metals Testing (upon request)",
                                    "VA, FHA, USDA & HUD Loan Compliance Testing",
                                    "State Certified Lab for all Testing"
                                ].map((item, i) => (
                                    <ListItem key={i} className={classes.listItem}>
                                        <ListItemIcon>
                                            <CheckCircleIcon className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                            <Box className={classes.buttonContainerMobile}>
                                <Button
                                    size="small"
                                    className={classes.contactButton}
                                    component={Link}
                                    to="/contact"
                                >
                                    Get a Quote
                                </Button>
                                <Button
                                    size="small"
                                    className={classes.contactButton}
                                    component="a"
                                    href="tel:+12083523909"
                                >
                                    (208) 352-3909
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Flow Monitoring Section */}
                <Grid item xs={12} id="productivity-section" className={classes.serviceSection}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={5}>
                            <Box className={classes.imageButtonWrapper}>
                                <img src={ProductivityImg} alt="All Service Areas include Flow Rate Testing" className={classes.sectionImage} loading="lazy" />
                                <Box className={classes.buttonContainerDesktop}>
                                    <Button
                                        size="small"
                                        className={classes.contactButton}
                                        component={Link}
                                        to="/contact"
                                    >
                                        Get a Quote
                                    </Button>
                                    <Button
                                        size="small"
                                        className={classes.contactButton}
                                        component="a"
                                        href="tel:+12083523909"
                                    >
                                        (208) 352-3909
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7} className={classes.sectionContent}>
                            <Typography variant="h4" className={classes.sectionTitle}>
                                Flow Rate Monitoring
                            </Typography>
                            <Divider className={classes.divider} />
                            <Typography variant="body1" className={classes.sectionText}>
                                Ensuring sufficient water flow (GPM) is critical for homeowners, real estate transactions, and loan approvals. Chinook Water Testing conducts flow rate monitoring to verify that private wells
                                <span>{isGeneralAreaPage ? " " : ` in ${formattedCity}, `}</span>
                                meet productivity standards, including VA, FHA, USDA & HUD home loan requirements. Our testing provides accurate flow rate measurements and detailed reporting to ensure compliance and system efficiency.
                            </Typography>
                            <List className={classes.bulletList}>
                                {[
                                    "HUD 4000.1 Productivity Verification",
                                    "VA, FHA, USDA, and HUD Loan Compliance Testing",
                                    "System Performance & Flow Rate Analysis",
                                    "Well Production Testing for Real Estate Sales"
                                ].map((item, i) => (
                                    <ListItem key={i} className={classes.listItem}>
                                        <ListItemIcon>
                                            <CheckCircleIcon className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                            <Box className={classes.buttonContainerMobile}>
                                <Button
                                    size="small"
                                    className={classes.contactButton}
                                    component={Link}
                                    to="/contact"
                                >
                                    Get a Quote
                                </Button>
                                <Button
                                    size="small"
                                    className={classes.contactButton}
                                    component="a"
                                    href="tel:+12083523909"
                                >
                                    (208) 352-3909
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Inspection Section */}
                <Grid item xs={12} id="system-inspection-section" className={classes.serviceSection} style={{ marginBottom: -15 }}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={5}>
                            <Box className={classes.imageButtonWrapper}>
                                <img src={InspectionImg} alt="All Service Areas include Water and Wastewater System Inspection" className={classes.sectionImage} loading="lazy" />
                                <Box className={classes.buttonContainerDesktop}>
                                    <Button
                                        size="small"
                                        className={classes.contactButton}
                                        component={Link}
                                        to="/contact"
                                    >
                                        Get a Quote
                                    </Button>
                                    <Button
                                        size="small"
                                        className={classes.contactButton}
                                        component="a"
                                        href="tel:+12083523909"
                                    >
                                        (208) 352-3909
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7} className={classes.sectionContent}>
                            <Typography variant="h4" className={classes.sectionTitle}>
                                System Inspection
                            </Typography>
                            <Divider className={classes.divider} />
                            <Typography variant="body1" className={classes.sectionText}>
                                Chinook Water Testing provides thorough system inspections for private well water and wastewater systems
                                <span>{isGeneralAreaPage ? ". " : ` in ${formattedCity}, and the surrounding areas. `}</span>
                                Our certified inspections ensure your water system operates safely, efficiently, and in compliance with state
                                and local regulations. Whether you're buying, selling, or maintaining a property,
                                our inspections help identify potential issues before they become costly problems.
                            </Typography>
                            <List className={classes.bulletList}>
                                {[
                                    "Operational checks and performance validation",
                                    "Consultation and recommendations for compliance",
                                    "Full compliance with state and local requirements",
                                    "Homebuyer and real estate transaction inspection"
                                ].map((item, i) => (
                                    <ListItem key={i} className={classes.listItem}>
                                        <ListItemIcon>
                                            <CheckCircleIcon className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                            <Box className={classes.buttonContainerMobile}>
                                <Button
                                    size="small"
                                    className={classes.contactButton}
                                    component={Link}
                                    to="/contact"
                                >
                                    Get a Quote
                                </Button>
                                <Button
                                    size="small"
                                    className={classes.contactButton}
                                    component="a"
                                    href="tel:+12083523909"
                                >
                                    (208) 352-3909
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Call to Action */}
            <CallToAction />
        </section>
    );
}

export default Locations;