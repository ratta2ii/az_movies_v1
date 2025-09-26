import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
        color: "#fff",
        maxWidth: 1200,
        margin: "auto",
        marginTop: 100,
        [theme.breakpoints.down('sm')]: {
            marginTop: 200,
            padding: theme.spacing(0),

        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 150,
        },
    },
    titleBox: {
        width: "100%",
        maxWidth: 985,
        margin: '0 auto 100px auto',
        [theme.breakpoints.down('md')]: {
            width: '80%',
            marginLeft: '10%',
            marginBottom: 100,
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            marginLeft: '5%',
            marginBottom: 75,
        },
    },
    title: {
        marginTop: 80,
        marginBottom: 10,
        textAlign: 'center',
        fontSize: '1.7em',
        color: '#fff',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 600,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5em'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 120,
            fontSize: '1.4em',
            textAlign: 'left',
        },
    },
    subTitle: {
        fontStyle: 'italic',
        fontSize: '1.2em',
        textAlign: 'center',
        marginBottom: 30,
        marginTop: 20,
        [theme.breakpoints.down('xs')]: {
            textAlign: 'left',
            fontSize: '1.2em',
            marginBottom: 40,
            marginTop: 50,
        },
    },
    infoBox: {
        textAlign: 'left',
        maxWidth: 600,
        margin: '0 auto',
        marginBottom: theme.spacing(6),
        padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            maxWidth: 325,
            padding: theme.spacing(1),
        },
    },
    infoText: {
        fontSize: '1.1em',
        marginBottom: theme.spacing(1),
        color: '#fff',
        '& a': {
            color: '#fff',
            textDecoration: 'underline',
            '&:hover, &:focus': {
                color: '#fcb196',
            },
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1em',
        },
    },
    phoneButton: {
        marginLeft: theme.spacing(1),
        fontSize: '0.9em',
        textTransform: 'none',
        fontWeight: 500,
        textDecoration: 'none !important',
        backgroundColor: '#114796',
        '&:hover, &:focus': {
            backgroundColor: '#0b3879',
        },
    },
    formWrapper: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(6),
    },
}));

export default useStyles;
