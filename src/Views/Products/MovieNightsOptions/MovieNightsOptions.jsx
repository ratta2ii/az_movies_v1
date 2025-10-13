import { Divider, Grid } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import GiantScreenImage from './../../../Assets/Images/giant-screen.jpg';
import PoolImage from './../../../Assets/Images/pool.webp';
import SmallScreenImage from './../../../Assets/Images/GalleryImages/gallery2.webp';
import DoubleScreenImage from './../../../Assets/Images/double-movie-screen.webp';
import CallToAction from "./../../../Components/CallToAction/CallToAction";
import useStyles from './MovieNightsOptions.Styles';
import { Link } from 'react-router-dom';

function MovieNightsOptions() {
  const classes = useStyles();

  const cards = [
    {
      key: 'giant-inflatable',
      to: '/movie-nights-options#giant-inflatable',
      image: GiantScreenImage,
      imageAlt: 'Giant inflatable outdoor movie screen at dusk',
      title: 'Giant Inflatable Movie Night',
      price: '$699.00',
      subtitle: 'Big-crowd outdoor cinema package',
      bullets: [
        '20’+ inflatable screen for large audiences',
        'Bright HD projector & media hookup',
        'Pro PA speakers + pre-show music',
        'Full setup, on-site tech, teardown',
      ],
    },
    {
      key: 'backyard',
      to: '/movie-nights-options#backyard',
      image: SmallScreenImage,
      imageAlt: 'Backyard movie screen with family seating',
      title: 'Backyard Movie Screen',
      price: '$349.00',
      subtitle: 'Perfect for home & small gatherings',
      bullets: [
        '12–14′ screen ideal for 10–40 guests',
        'Compact HD projector, easy media input',
        '2-speaker audio for clear dialogue',
        'Setup included—1 standard outlet needed',
      ],
    },
    {
      key: 'small-event',
      to: '/movie-nights-options#small-event',
      image: SmallScreenImage,
      imageAlt: 'Small event outdoor movie screen at a community park',
      title: 'Small Event Movie Screen',
      price: '$479.00',
      subtitle: 'Community, school, & church friendly',
      bullets: [
        '16′ screen for ~40–100 attendees',
        'Upgraded brightness HD projection',
        'Expanded speaker coverage',
        'Plug-and-play: laptop/streaming ready',
      ],
    },
    {
      key: 'double-screen',
      to: '/movie-nights-options#double-screen',
      image: DoubleScreenImage,
      imageAlt: 'Two outdoor movie screens running simultaneously',
      title: 'Double Screen Movie Night',
      price: '$1,099.00',
      subtitle: 'Two screens, one event—twice the fun',
      bullets: [
        'Two synchronized screens same venue',
        'Great for tournaments or multi-area viewing',
        'Scaled audio coverage for both zones',
        'Requires two separate power circuits',
      ],
    },
    {
      key: 'dive-in',
      to: '/movie-nights-options#dive-in',
      image: PoolImage,
      imageAlt: 'Poolside dive-in movie setup with rear projection',
      title: 'Large Screen Dive-In Movie Night',
      price: '$699.00',
      subtitle: 'Pool party screening with splash-safe layout',
      bullets: [
        'Rear projection option near water',
        'Cable management & GFCI-safe setup',
        'Optimized audio for pool environments',
        'Recommended start around sunset',
      ],
    },
  ];

  return (
    <main>
      <Box className={classes.titleBox}>
        <h1 className={classes.title}>
          Outdoor Movie Nights — Backyard • Corporate • HOA • Pool Parties • Schools • Churches • Community Events
        </h1>
      </Box>

      <Grid container spacing={4} alignItems="stretch" justifyContent="center" className={classes.gridContainer}>
        {cards.map(({ key, to, image, imageAlt, title, price, subtitle, bullets }) => (
          <Grid item xs={12} md={4} key={key}>
            <Card className={classes.card} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Link to={to} style={{ textDecoration: 'none', flexGrow: 1, display: 'flex' }}>
                <CardActionArea style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={image}
                    alt={imageAlt}
                  />
                  <CardContent style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h2"
                      component="h2"
                      className={classes.cardTitle}
                      style={{ fontFamily: 'inherit' }}
                    >
                      {title}
                    </Typography>

                    <Typography
                      variant="h3"
                      component="h3"
                      className={classes.cardSubtitle}
                    >
                      {subtitle}
                    </Typography>

                    <Divider style={{ height: 1, marginTop: 16, backgroundColor: "#730a1b" }} />

                    <List className={classes.bulletList}>
                      {bullets.map((item, i) => (
                        <ListItem key={i} className={classes.listItem}>
                          <ListItemIcon>
                            <CheckCircleIcon className={classes.icon} />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>

                    {/* Bottom block pinned above the buttons */}
                    <Box style={{ marginTop: 'auto' }}>
                      <Typography
                        variant="h4"
                        component="p"
                        className={classes.cardPrice}
                        style={{
                          display: 'inline-block',
                          padding: '4px 12px',
                          borderRadius: 999,
                          background: '#e51433ff',
                          color: '#fff',
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          marginBottom: 6
                        }}
                        aria-label={`Price: ${price}`}
                      >
                        Price: {price}
                      </Typography>

                      <Typography
                        variant="body2"
                        component="p"
                        className={classes.quoteNote}
                        style={{ color: '#444', marginBottom: 0 }}
                      >
                        Final quote determined by event location and{' '}
                        <Link to="/concessions-options" className={classes.addOnsLink}>
                          Concessions and Equipment ADD ON's
                        </Link>
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Link>

              <CardActions style={{ padding: 0 }}>
                <Box className={classes.buttonContainer}>
                  <Button
                    size="small"
                    className={classes.contactButton}
                    component="a"
                    href="tel:+12083523909"
                  >
                    (208) 352-3909
                  </Button>
                  <Button
                    size="small"
                    className={classes.contactButton}
                    component={Link}
                    to="/contact"
                  >
                    Get a Quote
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <CallToAction />
    </main>
  );
}

export default MovieNightsOptions;
