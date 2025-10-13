import React from "react";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ContactForm from "../../Components/ContactForm/ContactForm";
import useStyles from "./Contact.Styles";
import { Typography, Box, Button } from "@material-ui/core";

function Contact() {
    const classes = useStyles();

    return (
        <section>
            <Helmet>
                <title>Contact Chinook Water Testing | North Idaho & Eastern Washington</title>
                <meta name="description" content="Contact Chinook Water Testing for certified well water testing, flow rate testing (GPM), and system inspections. VA, FHA, USDA & HUD compliant." />

                <meta name="keywords" content="well water testing, flow rate monitoring, water system inspections, North Idaho, Eastern Washington" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://outdoormoviepros.com/contact" />

                <meta property="og:title" content="Contact Chinook Water Testing | North Idaho & Eastern Washington" />
                <meta
                    property="og:description"
                    content="Contact Chinook Water Testing for certified well water testing, flow rate testing (GPM), and system inspections. VA, FHA, USDA & HUD compliant."
                />
                <meta name="author" content="Chinook Water Testing" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chinook Water Testing" />
                <meta property="og:url" content="https://outdoormoviepros.com/contact" />
                <meta property="og:image" content="https://outdoormoviepros.com/company-logo.webp" />
                <meta property="og:image:alt" content="Chinook Water Testing company logo" />
            </Helmet>

            <header className="sr-only">
                <h1>Contact Chinook Water Testing for Well Water Testing & System Inspections in North Idaho & Eastern WA</h1>
                <h2>VA, FHA, USDA & HUD Compliant Water Testing</h2>
            </header>


            <main className={classes.root}>
                <div className={classes.titleBox}>
                    <Typography variant="h1" className={classes.title}>
                        Contact Outdoor Movie Pros today for fast service and{' '}
                        <Link to="/faqs" style={{ color: '#fff', textDecoration: 'underline', fontWeight: 600 }}>
                            competitive pricing
                        </Link>
                        !
                    </Typography>
                    <Typography variant="h2" className={classes.subTitle}>
                        Get your free quote now! Fill out the form below, and our team will respond promptly.
                    </Typography>
                    <Box className={classes.infoBox}>
                        <Typography variant="body1" className={classes.infoText}>
                            <strong>Company:</strong>{' '}Outdoor Movie Pros
                        </Typography>
                        <Typography variant="body1" className={classes.infoText}>
                            <strong>Phone:</strong>{' '}
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                href="tel:+12083523909"
                                className={classes.phoneButton}
                            >
                                (208) 352-3909
                            </Button>
                        </Typography>
                        <Typography variant="body1" className={classes.infoText}>
                            <strong>Email:</strong>{' '}
                            <a href="mailto:info@outdoormoviepros.com">info@outdoormoviepros.com</a>
                        </Typography>
                        {/* <Typography variant="body1" className={classes.infoText}>
                            <strong>Address:</strong> 7040 N Colfax St, Dalton Gardens, ID 83815
                        </Typography> */}
                        <Typography variant="body1" className={classes.infoText}>
                            <strong>Website:</strong>{' '}
                            <a href="https://outdoormoviepros.com" target="_blank" rel="noopener noreferrer">outdoormoviepros.com</a>
                        </Typography>
                    </Box>

                    <Box className={classes.formWrapper}>
                        <ContactForm />
                    </Box>
                </div>
            </main>
        </section>
    );
}

export default Contact;
