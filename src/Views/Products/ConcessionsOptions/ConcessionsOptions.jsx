// MovieNightsOptions.jsx
import { Divider, Grid } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@material-ui/icons/CheckCircle'; // Added for green check icons
import PopcornImage from './../../../Assets/Images/product-popcorn.jpg';
import CallToAction from "./../../../Components/CallToAction/CallToAction";
import useStyles from './ConcessionsOptions.Styles';
import { Link } from 'react-router-dom';

function ConcessionsOptions() {
    const classes = useStyles();

    // 🔹 All card content centralized here
    // 🔹 All card content centralized here
    // Concessions & Add-Ons
    const cards = [
        {
            key: 'popcorn',
            to: '/concessions-options#popcorn',
            image: PopcornImage,
            imageAlt: 'Fresh popcorn concession',
            title: 'Popcorn',
            subtitle: 'Movie-theater style, fresh & hot',
            bullets: [
                'Commercial popcorn machine & cart (as available)',
                'Supplies included (kernels, oil, bags)',
                'On-site attendant optional',
                'Great for any crowd size',
            ],
        },
        {
            key: 'cotton-candy',
            to: '/concessions-options#cotton-candy',
            image: PopcornImage,
            imageAlt: 'Cotton candy concession',
            title: 'Cotton Candy',
            subtitle: 'Classic spun sugar fun',
            bullets: [
                'Cotton candy machine & cones/bags',
                'Assorted flavor options',
                'On-site attendant optional',
                'Kid-approved, photo-friendly station',
            ],
        },
        {
            key: 'ice-cream',
            to: '/concessions-options#ice-cream',
            image: PopcornImage,
            imageAlt: 'Ice cream concession',
            title: 'Ice Cream',
            subtitle: 'Novelties or scoop service',
            bullets: [
                'Pre-packed novelties or scoop bar',
                'Freezer or truck service options',
                'Toppings available',
                'Dairy-free/vegan options on request',
            ],
        },
        {
            key: 'tables-chairs',
            to: '/concessions-options#tables-chairs',
            image: PopcornImage,
            imageAlt: 'Event tables and chairs',
            title: 'Tables & Chairs',
            subtitle: 'Guest seating & staging',
            bullets: [
                'Folding chairs, cocktail & banquet tables',
                'Delivery & setup available',
                'Layout guidance for best viewing',
                'Linens available upon request',
            ],
        },
        {
            key: 'generators',
            to: '/concessions-options#generators',
            image: PopcornImage,
            imageAlt: 'Quiet inverter generator',
            title: 'Generators',
            subtitle: 'Quiet power for any venue',
            bullets: [
                'Quiet inverter generators',
                'Power for projector, audio, and lights',
                'Cables & distro included',
                'Fuel included for standard runtimes',
            ],
        },
        {
            key: 'additional-screens',
            to: '/concessions-options#additional-screens',
            image: PopcornImage,
            imageAlt: 'Additional screen add-on',
            title: 'Additional Screens',
            subtitle: 'Second screen & overflow viewing',
            bullets: [
                'Add a lobby/pre-show or gaming screen',
                'Small and medium size options',
                'Independent audio zone options',
                'Perfect for sponsor slides & queues',
            ],
        },
    ];



    return (
        <main>

            <Box className={classes.titleBox}>
                <h1 className={classes.title}>
                    Concessions & Add On's — Popcorn • Cotton Candy • Ice Cream • Tables & Chairs • Generators • Additional Screens
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

export default ConcessionsOptions;
