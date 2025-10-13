import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
        color: "#fff",
        maxWidth: 1200,
        margin: "auto",
        marginTop: 70,
        [theme.breakpoints.down('lg')]: {
            maxWidth: 1050,
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 80,
        },
    },
    header: {
        marginBottom: theme.spacing(6),
        textAlign: "center",
    },
    titleBox: {
        width: 985,
        margin: 'auto',
        marginBottom: 100,
        [theme.breakpoints.down('md')]: {
            width: '80%',
            marginLeft: '10%',
            marginBottom: 100,
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginLeft: '0%',
            marginTop: -100,
            marginBottom: 75,
        },
    },
    title: {
        marginTop: 100,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 28,
        color: '#fff',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 600,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5em'
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: 'left',
            marginTop: 150,
            fontSize: '1.4em'
        },
    },
    sectionContainer: {
        marginBottom: theme.spacing(6),
    },
    sectionImage: {
        width: "100%",
        height: "315px",
        objectFit: "cover",
        borderRadius: "5px",
        // boxShadow: theme.shadows[1],
        [theme.breakpoints.down('lg')]: {
            height: "265px",
        },
        [theme.breakpoints.down('md')]: {
            height: "250px",
        },
        [theme.breakpoints.down('sm')]: {
            border: "1px solid #ffffff",
        },
    },
    sectionContent: {
        padding: "50px !important",
        [theme.breakpoints.down('xs')]: {
            padding: "25px !important",
        },
    },
    sectionTitle: {
        fontWeight: 600,
        marginBottom: theme.spacing(2),
        fontSize: "2em",
        color: "antiqueWhite",
        // fontFamily: 'serif',
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.7em",
            marginTop: -25,
            textAlign: 'center',
        },
    },
    sectionText: {
        marginBottom: theme.spacing(2),
        fontSize: "1.1em",
    },
    bulletList: {
        marginBottom: 25,
        paddingLeft: 16, // Increased for subsection look
        marginTop: 15,
        fontSize: '1.1em',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 8, // Adjusted for mobile
        },
    },
    listItem: {
        padding: 0,
        paddingBottom: 5,
        alignItems: 'center', // Center text with icon
        '& .MuiListItemText-primary': {
            lineHeight: '1.3em',
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: -20,
        },
    },
    icon: {
        // color: "#66bb6a",
        color: "#fff",
        fontSize: '1.2rem', // Match text size
        minWidth: 24, // Reduce gap between icon and text
        marginLeft: 20,
    },
    divider: {
        width: "100%",
        margin: "0px auto 20px",
        backgroundColor: "rgb(0 165 205 / 30%)",
        height: "2px"
    },
    phoneLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '1.5em',
        fontWeight: 600,
        fontFamily: 'serif',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.2em',
        },
    },
    subText: {
        fontSize: '1.2em',
        fontWeight: 500,
        marginTop: 40,
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.2em',
        },
    },
    serviceSection: {
        backgroundColor: 'rgb(12 15 24 / 50%)',
        padding: "60px !important",
        borderRadius: 10,
        marginBottom: 100,
        // boxShadow: "rgb(255 255 255 / 40%) -6px 6px 0px",
        boxShadow: "rgb(0 165 205 / 30%) -6px 6px 0px",
        [theme.breakpoints.down('lg')]: {
            padding: "50px !important",
        },
        [theme.breakpoints.down('md')]: {
            padding: "40px !important",
        },
        [theme.breakpoints.down('sm')]: {
            padding: "50px !important",
        },
        [theme.breakpoints.down('xs')]: {
            backgroundColor: 'rgb(12 15 24 / 80%)',
            boxShadow: "none",
            border: 'none',
            padding: "30px !important",
            marginBottom: 65,
        },
    },
    buttonContainerDesktop: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 60,
        gap: '2px',
        flexWrap: 'wrap',
        padding: 0,
        // marginTop: 20,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    buttonContainerMobile: {
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 60,
        gap: '2%',
        flexWrap: 'wrap',
        padding: 0,
        marginTop: 30,
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
        },
    },
    contactButton: {
        color: '#fff !important',
        fontWeight: 500,
        textTransform: "none",
        minWidth: 130,
        width: '100%',
        height: 45,
        borderRadius: 5,
        '&:first-of-type': {
            background: '#1d293d',
            '&:hover, &:focus': {
                backgroundColor: '#101927',
            },
        },
        '&:last-of-type': {
            backgroundColor: '#114796',
            '&:hover, &:focus': {
                backgroundColor: '#0b3879',
            },
        },
        [theme.breakpoints.down('sm')]: {
            height: 40,
        }
    },
    imageButtonWrapper: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        textAlign: 'center',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '10px',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            transition: 'none',
            '&:hover': {
                transform: 'none',
                boxShadow: 'none',
            },
        },
    },
}));

export default useStyles;