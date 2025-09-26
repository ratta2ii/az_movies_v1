import { Helmet } from 'react-helmet';
import Services from './../../Components/Services/Services';
import CallToAction from './../../Components/CallToAction/CallToAction';
import { Box } from '@mui/material';
import useStyles from './Home.Styles';


function Home() {
    const classes = useStyles();
    return (
        <section>
            <Helmet>
                <title>Well Water Testing & System Inspections in North Idaho & Eastern WA</title>
                <meta name="description" content="Certified well water testing, flow rate testing (GPM), and system inspections in North Idaho & Eastern WA. VA, FHA, USDA & HUD loan compliant." />
                <meta name="keywords" content="well water testing, certified water testing, flow rate testing, system inspections, North Idaho, Eastern Washington, VA FHA USDA & HUD loan testing, real estate water testing, well contamination testing" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://chinookwater.com/" />
                <meta property="og:title" content="Well Water Testing, Flow Rate Testing (GPM) & System Inspections in North Idaho & Eastern WA" />
                <meta property="og:description" content="Certified well water testing, flow rate testing (GPM), and system inspections in North Idaho & Eastern WA. VA, FHA, USDA & HUD loan compliant." />
                <meta name="author" content="Chinook Water Testing" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chinook Water Testing" />
                <meta property="og:url" content="https://chinookwater.com/" />
                <meta property="og:image" content="https://chinookwater.com/chinookLogo.jpg" />
                <meta property="og:image:alt" content="Chinook Water Testing company logo" />
            </Helmet>
            <header className="sr-only">
                Certified Well Water Testing, Flow Rate Testing & System Inspections in North Idaho & Eastern WA
            </header>
            <main>
                <Box className={classes.titleBox}>
                    <h1 className={classes.title}>
                        Outdoor Movie Nights • Concessions • Ice Cream Truck
                    </h1>
                    <h2 className={classes.subTitle}>
                        Perfect for homeowners, corporate events, HOAs, schools, churches, parks & rec, apartment communities, festivals, fundraisers, birthdays, graduations, block parties & more.
                    </h2>
                    {/* <Box className={classes.pdfBox}>
                        <VaPdf />
                    </Box> */}
                </Box>
                <Services />
                {/* Call to Action */}
                <CallToAction />
            </main>
        </section>
    );
}

export default Home;
