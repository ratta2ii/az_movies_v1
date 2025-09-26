import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "80vh", // allows vertical centering while accounting for header/footer
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
        padding: theme.spacing(4),
        color: "#fff",
        maxWidth: 935,
        margin: "auto",
        marginTop: 200,
        marginBottom: 50,
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(2),
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: theme.spacing(13),
        },
    },
    title: {
        fontSize: "2em",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 600,
        color: "#fff",
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5em",
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: 30,
        },
    },
    subheading: {
        fontWeight: 600,
        fontSize: "2em",
        marginTop: 35,
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5em",
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: 60,
        },
    },
    ctaBox: {
        marginTop: 35,
        marginBottom: 40,
    },
    ctaText: {
        fontWeight: 600,
        fontSize: "1.8em",
        marginTop: 20,
        marginBottom: 15,
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5em",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: 60,
            fontSize: "1.5em",
        },
    },
    ctaButton: {
        fontSize: '1em',
        backgroundColor: '#114796',
        '&:hover, &:focus': {
            backgroundColor: '#0b3879',
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: 30,
        },
    }
}));

export default useStyles;
