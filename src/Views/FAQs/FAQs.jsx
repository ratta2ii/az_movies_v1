import React from "react";
import { Helmet } from "react-helmet";
import { Typography, Box, Button } from "@material-ui/core";
import useStyles from "./FAQs.Styles";

function FAQs() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Helmet>
        <title>Outdoor Movie Rentals | Frequently Asked Questions</title>
        <meta
          name="description"
          content="Find answers to common questions about outdoor movie screen rentals, delivery, setup, projection, and safety."
        />
        <meta
          name="keywords"
          content="outdoor movie rental FAQ, screen rental questions, backyard movie setup, outdoor projection tips"
        />
        <meta
          property="og:title"
          content="Outdoor Movie Rentals | Frequently Asked Questions"
        />
        <meta
          property="og:description"
          content="Answers to frequently asked questions about outdoor movie rentals, including delivery, setup, projection, and wind safety."
        />
        <meta name="author" content="Outdoor Movie Pros" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Outdoor Movie Pros" />
        <meta property="og:url" content="https://outdoormoviepros.com/faqs" />
        <meta property="og:image" content="https://outdoormoviepros.com/logo.jpg" />
        <meta property="og:image:alt" content="Outdoor Movie Pros company logo" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://outdoormoviepros.com/faqs" />
      </Helmet>

      <header className="sr-only">Frequently Asked Questions</header>
 
      <Box className={classes.titleBox}>
        <Typography variant="h1" className={classes.title}>
          Frequently Asked Questions
        </Typography>
      </Box>

      <Box className={classes.contentBox}>
        <Typography variant="h2" className={classes.subheading}>
          Does price include setup and delivery?
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Setup and standard delivery are included. Additional charges may apply if:
          <ul>
            <li>The event location is farther out (trip charge may apply).</li>
            <li>The setup requires unusual accommodations (stairs, rooftop, etc.).</li>
          </ul>
          If you have a unique situation, let us know and we’ll sort it out before the event.
        </Typography>

        <Typography variant="h2" className={classes.subheading}>
          Do you deliver to other cities?
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Absolutely! We can travel anywhere. Call us and we’ll create a custom quote for your
          location.
        </Typography>

        <Typography variant="h2" className={classes.subheading}>
          Are there special licenses or permits needed for the height of the screen?
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Generally no. Local requirements vary, but we have never seen a permit required for
          screens up to 24’. Permits and engineering documents are usually only needed for very
          large screens in stricter states like California.
        </Typography>

        <Typography variant="h2" className={classes.subheading}>
          Does the standard 2.5 hour rental time include your setup time?
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          No. Setup and breakdown are on us. The 2.5 hours begins once the setup is complete, at
          the agreed-upon start time.
        </Typography>

        <Typography variant="h2" className={classes.subheading}>
          Does it have to be dark to see the picture?
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Yes. Outdoor projection works like a movie theater, except the “lights out” is sunset.
          To know when you can start, check{" "}
          <a href="https://www.timeanddate.com/astronomy/usa" style={{ color: '#3f51b5' }} target="_blank" rel="noopener noreferrer">
            local sunset times here
          </a>.
        </Typography>

        <Typography variant="h2" className={classes.subheading}>
          When setting up the screen, does sunset direction affect placement?
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Yes. If the audience faces west (and the screen faces east), you can usually start the
          movie earlier. Direct sunlight on the screen delays the start by about 15 minutes
          because the reflective surface amplifies the brightness.
        </Typography>

        <Typography variant="h2" className={classes.subheading}>
          How much drop-off is there using rear projection versus front projection?
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Light loss is minimal—about 10%. Both methods have advantages:
          <ul>
            <li>
              <strong>Front projection:</strong> Brighter image, requires projector in front of
              audience.
            </li>
            <li>
              <strong>Rear projection:</strong> Cleaner setup with equipment behind the screen,
              but slightly dimmer.
            </li>
          </ul>
          The right choice depends on your event layout.
        </Typography>

        <Typography variant="h2" className={classes.subheading}>
          What about wind and wind rating?
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Safety first: 
          <ul>
            <li>Do not use screens in winds exceeding 15 mph.</li>
            <li>Use extreme caution with approaching storms or high winds.</li>
            <li>Lower the screen immediately if severe weather appears on radar.</li>
          </ul>
          A conservative approach ensures the safety of both your audience and equipment.
        </Typography>

        <Box className={classes.ctaBox}>
          <Typography variant="h5" className={classes.ctaText}>
            Still have questions? Give us a call.
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.ctaButton}
            href="tel:+12083523909"
          >
            (208) 352-3909
          </Button>
        </Box>
      </Box>
    </section>
  );
}

export default FAQs;
