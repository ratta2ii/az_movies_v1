import { Divider, Grid } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@material-ui/icons/CheckCircle'; // Added for green check icons
import GiantScreenImage from './../../Assets/Images/giant-screen.webp';
import ConcessionsImage from './../../Assets/Images/e2.webp';
import IceCreamTruckImage from './../../Assets/Images/ice-cream-truck.webp';
import useStyles from './Services.Styles';
import { Link } from 'react-router-dom';

function Services() {
    const classes = useStyles();

    return (
        <main>
            <Grid container spacing={4} alignItems="stretch" justifyContent="center">
                {/* Sampling & Testing Card */}
                <Grid item xs={12} md={4}>
                    <Card className={classes.card}>
                        <Link to="/movie-nights-options" style={{ textDecoration: 'none' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={GiantScreenImage}
                                    alt="Our Services include State Certified Well Water Testing"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h2" component="h2" className={classes.cardTitle} style={{fontFamily: 'inherit'}}>
                                        Outdoor Movie Nights
                                    </Typography>
                                    <Typography variant="h3" component="h3" className={classes.cardSubtitle}>
                                        Backyard & Outdoor Screen Rentals
                                    </Typography>
                                    <Divider style={{ height: 3, marginTop: 14 }} />
                                    <List className={classes.bulletList}>
                                        {[
                                            "Screen sizes for any crowd",
                                            "HD projector with media hookup",
                                            "Pro audio speakers included",
                                            "Full setup and on-site tech"
                                        ].map((item, i) => (
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
                                    size="large"
                                    className={classes.contactButton}
                                    component={Link}
                                    to="/movie-nights-options"
                                    style={{ width: '100%' }}
                                >
                                    View Options
                                </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>

                {/* Flow Rate / Productivity Card */}
                <Grid item xs={12} md={4}>
                    <Card className={classes.card}>
                        <Link to="/concessions-options" style={{ textDecoration: 'none' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={ConcessionsImage}
                                    alt="Flow Rate Monitoring for Water Testing and Inspection Services"
                                    loading="lazy"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h2" component="h2" className={classes.cardTitle} style={{fontFamily: 'inherit'}}>
                                        Concessions
                                    </Typography>
                                    <Typography variant="h3" component="h3" className={classes.cardSubtitle}>
                                        Popcorn, Candy & Drinks
                                    </Typography>
                                    <Divider style={{ height: 3, marginTop: 14 }} />
                                    <List className={classes.bulletList}>
                                        {[
                                            "Fresh popcorn machine & supplies",
                                            "Candy assortment and displays",
                                            "Cold beverages (optional add-on)",
                                            "Staffed service available"
                                        ].map((item, i) => (
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
                                    size="large"
                                    className={classes.contactButton}
                                    component={Link}
                                    to="/concessions-options"
                                    style={{ width: '100%' }}
                                >
                                    View Options
                                </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>

                {/* System Inspection Card */}
                <Grid item xs={12} md={4}>
                    <Card className={classes.card}>
                        <Link to="/ice-cream-food-truck" style={{ textDecoration: 'none' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={IceCreamTruckImage}
                                    alt="Our Services include well Water Testing and System Inspection"
                                    loading="lazy"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h2" component="h2" className={classes.cardTitle} style={{fontFamily: 'inherit'}}>
                                        Ice Cream Sundaes & Coffee Food Truck
                                    </Typography>
                                    <Typography variant="h3" component="h3" className={classes.cardSubtitle}>
                                        Sundae Bars & Ice Cream Socials
                                    </Typography>
                                    <Divider style={{ height: 3, marginTop: 14 }} />
                                    <List className={classes.bulletList}>
                                        {[
                                            "Premium ice cream & toppings",
                                            "Sundae bar packages",
                                            "Dairy-free/vegan options",
                                            "Perfect for corporate & private events"
                                        ].map((item, i) => (
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
                                    size="large"
                                    className={classes.contactButton}
                                    component={Link}
                                    to="/ice-cream-food-truck"
                                    style={{ width: '100%' }}
                                >
                                    Learn More
                                </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </main>
    );
}

export default Services;
