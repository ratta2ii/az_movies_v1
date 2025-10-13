import { Divider, Grid } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PopcornImage from './../../../Assets/Images/product-cotton-candy.jpg';
import CallToAction from "./../../../Components/CallToAction/CallToAction";
import useStyles from './ConcessionsOptions.Styles';
import { Link } from 'react-router-dom';

function ConcessionsOptions() {
    const classes = useStyles();

    const cards = [
        {
            key: 'popcorn',
            to: '/concessions-options#popcorn',
            image: PopcornImage,
            imageAlt: 'Fresh popcorn concession',
            title: 'Popcorn',
            subtitle: 'Movie-theater style, fresh & hot',
            price: '$175/event (includes ~50 servings)',
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
            price: '$175/event (includes ~50 servings)',
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
            price: 'Novelties from $299 / Scoop bar from $549',
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
            price: 'Chairs $3 ea • Tables $12 ea • Packages from $99',
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
            price: '$149/event (up to 4 hours)',
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
            price: 'Small from $249 / Medium from $349',
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

export default ConcessionsOptions;
