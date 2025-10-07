import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Temp image imports (replace paths as needed)
import AetnaLogo         from "../../Assets/Images/BusinessLogos/aetna-logo.png";
import ApsLogo           from "../../Assets/Images/BusinessLogos/aps-logo.png";
import BannerHealthLogo  from "../../Assets/Images/BusinessLogos/banner-health-logo.png";
import DhlLogo           from "../../Assets/Images/BusinessLogos/dhl-logo.png";
import DignityHealthLogo from "../../Assets/Images/BusinessLogos/dignity-health-logo.png";
import EarlyWarningLogo  from "../../Assets/Images/BusinessLogos/early-warning-logo.png";
import FenderLogo        from "../../Assets/Images/BusinessLogos/fender-logo.jpg";
import HoneywellLogo     from "../../Assets/Images/BusinessLogos/honeywell-logo.png";
import NokiaLogo         from "../../Assets/Images/BusinessLogos/nokia-logo.png";


const useStyles = makeStyles((theme) => ({
  carouselContainer: {
    overflow: "hidden",
    width: "100%",
    background: "#fff",
    padding: "20px 0 30px",
  },
  slider: {
    display: "flex",
    width: "calc(180px * 18)", // two full sets of logos
    animation: `$scroll 40s linear infinite`,
  },
  logoWrapper: {
    flex: "0 0 auto",
    width: 280,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 10px",
  },
  logoImage: {
    maxWidth: "100%",
    maxHeight: 180,
    objectFit: "contain",
    // filter: "grayscale(100%)",
    transition: "filter 0.3s ease-in-out",
    "&:hover": {
      filter: "grayscale(0%)",
    },
    [theme.breakpoints.down("lg")]: {
        maxHeight: 60,
      },
  },
  "@keyframes scroll": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-50%)", // half of width for seamless loop
    },
  },
}));

const logos = [
  { src: AetnaLogo, alt: "Aetna Health Insurance Logo" },
  { src: ApsLogo, alt: "Arizona Public Service (APS) Logo" },
  { src: BannerHealthLogo, alt: "Banner Health Logo" },
  { src: DhlLogo, alt: "DHL Worldwide Express Logo" },
  { src: DignityHealthLogo, alt: "Dignity Health Medical Group Logo" },
  { src: EarlyWarningLogo, alt: "Early Warning Services Logo" },
  { src: FenderLogo, alt: "Fender Musical Instruments Logo" },
  { src: HoneywellLogo, alt: "Honeywell Corporation Logo" },
  { src: NokiaLogo, alt: "Nokia Technologies Logo" },
];

const LogoCarousel = () => {
  const classes = useStyles();

  return (
    <Box className={classes.carouselContainer} aria-label="Trusted companies we’ve worked with">
      <Box className={classes.slider}>
        {[...logos, ...logos].map((logo, i) => (
          <Box key={i} className={classes.logoWrapper}>
            <img
              src={logo.src}
              alt={logo.alt}
              className={classes.logoImage}
              loading="lazy"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LogoCarousel;
