import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    ctaBox: {
        maxWidth: 650,
        margin: "150px auto 150px auto",
        textAlign: "center",
        padding: theme.spacing(4),
        backgroundColor: "#0a0f18",
        borderRadius: "10px", 
        [theme.breakpoints.down('xs')]: {
            margin: "85px auto 50px auto",
            width: "100%",
            maxWidth: 350,
        },
    },
    ctaText: {
        marginBottom: theme.spacing(3),
        fontWeight: 600,
        fontSize: "1.5em",
        color: "#fff",
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.2em",
        },
    },
    ctaButton: {
        fontSize: "1em",
        padding: "8px 20px",
        backgroundColor: '#f53a3a',
    },
}));

export default useStyles;
