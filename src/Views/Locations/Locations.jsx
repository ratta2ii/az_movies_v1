import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Grid, Typography, Box, Divider, Button, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import useStyles from "./Locations.Styles";
import GiantScreenImage from "../../Assets/Images/GalleryImages/gallery6.webp";
import ConcessionsImage from "../../Assets/Images/e2.webp";
import FoodTruckImage from "../../Assets/Images/ice-cream-truck-two.webp";
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

  const city = location.pathname.split("/")[1]; // '' for /locations (general route)
  const isGeneralAreaPage = city === "locations" || city === "";

  const formattedCity = !isGeneralAreaPage
    ? (() => {
        const formatted = city
          .split("-")
          .map((word) =>
            word.toLowerCase() === "d" ? "d'" : word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join(" ")
          .replace("d' ", "d'");
        return `${formatted}, Arizona`;
      })()
    : null;

  const regionLabel = "Phoenix Metro Area, including Maricopa, Pinal, and surrounding counties";

  const mainTitle = isGeneralAreaPage ? (
    <>
      Outdoor Movie Pros offers Outdoor Movie Nights, Concessions, and an Ice Cream Food Truck.{" "}
      <span style={{ color: "#fff798", textDecoration: "underline", fontWeight: 600 }}>
        Our Service Areas include all of {regionLabel}
      </span>
      .
    </>
  ) : (
    <>
      Outdoor Movie Pros offers Outdoor Movie Nights, Concessions, and an Ice Cream Food Truck in{" "}
      <span style={{ color: "#fff798", textDecoration: "underline", fontWeight: 600 }}>
        {formattedCity}, and the Surrounding Areas
      </span>
      . Our Service Areas include all of {regionLabel}.
    </>
  );

  return (
    <section className={classes.root}>
      <Helmet>
        {/* Leaving your existing Helmet block as-is per your request */}
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

      {/* Section 1: Outdoor Movie Nights */}
      <Grid container spacing={4} className={classes.sectionContainer}>
        <Grid item xs={12} id="sampling-section" className={classes.serviceSection}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box className={classes.imageButtonWrapper}>
                {/* alt updated: outdoor movie screen context + dynamic geography */}
                <img
                  src={GiantScreenImage}
                  alt={`Outdoor movie screen setup${
                    isGeneralAreaPage ? " in the Phoenix metro area" : ` in ${formattedCity}`
                  }`}
                  className={classes.sectionImage}
                />
                <Box className={classes.buttonContainerDesktop}>
                  {/* CHANGED: single CTA */}
                  <Button
                    size="medium"
                    className={classes.contactButton}
                    component={Link}
                    to="/movie-nights-options"
                  >
                    View Options
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
                Outdoor Movie Pros provides turnkey outdoor cinema experiences in{" "}
                <span>{isGeneralAreaPage ? "the Phoenix metro area" : `${formattedCity}, and nearby areas`}</span>.
                We bring the screen, bright HD projector, pro audio, and an on-site technician to set up, run, and tear
                down your event. Choose front or rear projection, time the show around sunset, and enjoy a smooth,
                professional presentation guests will love.
              </Typography>
              <List className={classes.bulletList}>
                {[
                  "Multiple screen sizes for any crowd",
                  "HD projector with easy media hookup",
                  "Pro PA speakers & pre-show music",
                  "Full setup, on-site tech & teardown",
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
                {/* CHANGED: single CTA (mobile) */}
                <Button
                  size="medium"
                  className={classes.contactButton}
                  component={Link}
                  to="/movie-nights-options"
                >
                  View Options
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Section 2: Concessions & Add-Ons */}
        <Grid item xs={12} id="productivity-section" className={classes.serviceSection}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box className={classes.imageButtonWrapper}>
                {/* alt updated: concessions table context + dynamic geography */}
                <img
                  src={ConcessionsImage}
                  alt={`Concessions setup (popcorn, candy, drinks)${
                    isGeneralAreaPage ? " in the Phoenix metro area" : ` in ${formattedCity}`
                  }`}
                  className={classes.sectionImage}
                  loading="lazy"
                />
                <Box className={classes.buttonContainerDesktop}>
                  {/* CHANGED: single CTA */}
                  <Button
                    size="medium"
                    className={classes.contactButton}
                    component={Link}
                    to="/concessions-options"
                  >
                    View Options
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={7} className={classes.sectionContent}>
              <Typography variant="h4" className={classes.sectionTitle}>
                Concessions & Add On&apos;s
              </Typography>
              <Divider className={classes.divider} />
              <Typography variant="body1" className={classes.sectionText}>
                Elevate your movie night with fresh popcorn, sweet treats, and convenient equipment add-ons. We offer
                concessions, seating, generators, microphones, sponsor slides, and more—everything you need to keep the
                crowd happy in{" "}
                <span>{isGeneralAreaPage ? "the Phoenix metro area" : `${formattedCity}`}</span>. Build a package that
                fits your audience, venue, and budget.
              </Typography>
              <List className={classes.bulletList}>
                {[
                  "Fresh popcorn machine & supplies",
                  "Candy, cotton candy & cold drinks",
                  "Chairs, tables, generators & cables",
                  "Mic, pre-show music & sponsor slides",
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
                {/* CHANGED: single CTA (mobile) */}
                <Button
                  size="medium"
                  className={classes.contactButton}
                  component={Link}
                  to="/concessions-options"
                >
                  View Options
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Section 3: Ice Cream & Coffee Food Truck */}
        <Grid item xs={12} id="system-inspection-section" className={classes.serviceSection} style={{ marginBottom: -15 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box className={classes.imageButtonWrapper}>
                {/* alt updated: ice cream & coffee truck context + dynamic geography */}
                <img
                  src={FoodTruckImage}
                  alt={`Ice cream & coffee food truck serving events${
                    isGeneralAreaPage ? " in the Phoenix metro area" : ` in ${formattedCity}`
                  }`}
                  className={classes.sectionImage}
                  loading="lazy"
                />
                <Box className={classes.buttonContainerDesktop}>
                  {/* CHANGED: single CTA */}
                  <Button
                    size="medium"
                    className={classes.contactButton}
                    component={Link}
                    to="/ice-cream-food-truck"
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={7} className={classes.sectionContent}>
              <Typography variant="h4" className={classes.sectionTitle}>
                Ice Cream & Coffee Food Truck
              </Typography>
              <Divider className={classes.divider} />
              <Typography variant="body1" className={classes.sectionText}>
                Add a memorable treat to your movie night with our full-service ice cream and coffee truck. From
                build-your-own sundaes and novelties to espresso, lattes, and cold brew, we serve guests quickly and
                professionally in{" "}
                <span>{isGeneralAreaPage ? "the Phoenix metro area" : `${formattedCity} and the surrounding areas`}</span>.
                Dairy-free options are available.
              </Typography>
              <List className={classes.bulletList}>
                {[
                  "Premium ice cream, sundaes & novelties",
                  "Espresso drinks, coffee & hot cocoa",
                  "Fast, friendly, uniformed staff",
                  "Great for schools, HOAs & corporate",
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
                {/* CHANGED: single CTA (mobile) */}
                <Button
                  size="medium"
                  className={classes.contactButton}
                  component={Link}
                  to="/ice-cream-food-truck"
                >
                  Learn More
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
