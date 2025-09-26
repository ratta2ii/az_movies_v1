// MovieNightsOptions.jsx
import { Divider, Grid } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@material-ui/icons/CheckCircle'; // Added for green check icons
import GiantScreenImage from './../../../Assets/Images/giant-screen.jpg';
import CallToAction from "./../../../Components/CallToAction/CallToAction";
import useStyles from './MovieNightsOptions.Styles';
import { Link } from 'react-router-dom';

function MovieNightsOptions() {
    const classes = useStyles();

    // 🔹 All card content centralized here
    // 🔹 All card content centralized here
    const cards = [
        {
            key: 'outdoor',
            to: '/movie-nights-options#outdoor',
            image: GiantScreenImage,
            imageAlt: 'Outdoor movie night screen setup at sunset',
            title: 'Outdoor Movie Nights',
            subtitle: 'Backyard & Neighborhood Screenings',
            bullets: [
                'Screen sizes for any crowd',
                'Bright HD projector & media hookup',
                'Pro audio speakers included',
                'Full setup and on-site tech',
            ],
        },
        {
            key: 'corporate',
            to: '/movie-nights-options#corporate',
            image: GiantScreenImage,
            imageAlt: 'Corporate outdoor movie night at a workplace',
            title: 'Corporate Movie Nights',
            subtitle: 'Team-Building & Employee Appreciation',
            bullets: [
                'Turn-key setup at offices or venues',
                'Branded pre-roll slides/music (optional)',
                'Mic for announcements & raffles',
                'Weeknight & daytime availability',
            ],
        },
        {
            key: 'hoa',
            to: '/movie-nights-options#hoa',
            image: GiantScreenImage,
            imageAlt: 'HOA community outdoor movie night',
            title: 'HOA Movie Nights',
            subtitle: 'Neighborhood-Friendly Community Events',
            bullets: [
                'Family-friendly programming guidance',
                'Pre-show music & host microphone',
                'Neighborhood-aware audio placement',
                'Full setup & teardown included',
            ],
        },
        {
            key: 'pool-party',
            to: '/movie-nights-options#pool-party',
            image: GiantScreenImage,
            imageAlt: 'Dive-in poolside movie setup',
            title: 'Pool Party “Dive-In” Movies',
            subtitle: 'Poolside Screenings & Splash-Safe Layouts',
            bullets: [
                'Rear-projection option near water',
                'Optimized audio for pool environments',
                'Start times planned around sunset',
                'Deck/patio viewing optimized',
            ],
        },
        {
            key: 'school-community',
            to: '/movie-nights-options#school-community',
            image: GiantScreenImage,
            imageAlt: 'School or community outdoor movie night',
            title: 'School & Community Nights',
            subtitle: 'Schools, Churches, Parks & Fundraisers',
            bullets: [
                'Crowd-sized screen options',
                'Fundraiser-friendly packages',
                'Staffed on-site technician',
                'Easy plug-and-play media support',
            ],
        },
        {
            key: 'school-community',
            to: '/movie-nights-options#school-community',
            image: GiantScreenImage,
            imageAlt: 'School or community outdoor movie night',
            title: 'School & Community Nights',
            subtitle: 'Schools, Churches, Parks & Fundraisers',
            bullets: [
                'Crowd-sized screen options',
                'Fundraiser-friendly packages',
                'Staffed on-site technician',
                'Easy plug-and-play media support',
            ],
        },
    ];


    return (
        <main>

            <Box className={classes.titleBox}>
                <h1 className={classes.title}>
                    Outdoor Movie Nights — Backyard • Corporate • HOA • Pool Parties • Schools • Churches • Community Events
                </h1>

                {/* <h2 className={classes.subTitle}>
                    Turnkey outdoor cinema packages with multiple screen sizes, bright HD projection, and clear PA. We handle setup/teardown, time shows around sunset, and offer front or rear projection—great for backyards, courtyards, fields, and pool decks. Optional add-ons: pre-show music, host mic, sponsor slides, and movie-licensing guidance.
                </h2> */}
            </Box>

            <Grid container spacing={4} alignItems="stretch" justifyContent="center">
                {cards.map(({ key, to, image, imageAlt, title, subtitle, bullets }) => (
                    <Grid item xs={12} md={4} key={key}>
                        <Card className={classes.card}>
                            <Link to={to} style={{ textDecoration: 'none' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={image}
                                        alt={imageAlt}
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h2"
                                            component="h2"
                                            className={classes.cardTitle}
                                            style={{ fontFamily: 'serif' }}
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
                                        <Divider style={{ height: 1, marginTop: 14, backgroundColor: "white" }} />
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
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                            <CardActions style={{ padding: 0 }}>
                                <Box className={classes.buttonContainer}>
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
