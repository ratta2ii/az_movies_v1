import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    gridContainer: {
        padding: '0 18%',
        [theme.breakpoints.down('lg')]: {
            padding: 0,
        },
    },
    titleBox: {
        // marginTop: 200,
        // marginBottom: 150,
        width: 985,
        margin: '200px auto 120px',
        [theme.breakpoints.down('md')]: {
            width: '80%',
            marginLeft: '10%',
            marginBottom: 100,
        },
        [theme.breakpoints.down('xs')]: {
            width: '96%',
            marginLeft: '2%',
            marginTop: 145,
            marginBottom: 75,
        },
    },
    title: {
        marginTop: 100,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: '1.8em',
        color: '#fff',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 600,
        lineHeight: 'normal',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5em'
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: 'left',
            fontSize: '1.4em'
        },
    },
    subTitle: {
        textAlign: 'center',
        color: '#fff',
        width: '70%',
        marginLeft: '15%',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        marginTop: 10,
        marginBottom: 20,
        fontWeight: 200,
        fontSize: '1.3em',
        fontStyle: 'italic',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            marginLeft: '5%',
            fontSize: '1.1em',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginLeft: '0%',
            textAlign: 'left',
            marginTop: 40,
            marginBottom: 40,
        },
    },
    card: {
        borderRadius: 10,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: 'rgb(12 15 24 / 100%) !important',
        [theme.breakpoints.down('md')]: {
            padding: 5
        },
        [theme.breakpoints.down('sm')]: {
            padding: 40
        },
        [theme.breakpoints.down('xs')]: {
            padding: 20
        },
    },
    cardTitle: {
        fontWeight: "600 !important",
        fontSize: '2em !important',
        marginBottom: '6px !important',
        color: "#fff",
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.3em !important',

        },
    },
    cardSubtitle: {
        color: '#6a7280',
        fontSize: '1.2em !important',
        fontStyle: 'italic',
        fontWeight: 600,
    },
    bulletList: {
        marginBottom: 25,
        paddingLeft: 16,
        marginTop: 15,
        fontSize: '1.2em',
        color: '#fff',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 8,
        },
    },
    cardPrice: {
        color: "#fff",
        fontSize: '1.5em !important',
        marginTop: "30px !important",
    },
    quoteNote: {
        color: "#fff !important",
        fontStyle: 'italic',
        marginTop: 20,
        fontSize: '0.9em',
    },
    addOnsLink: {
        color: "#4d7cc2ff",
        textDecoration: 'underline',
        marginBottom: -10,
    },
    listItem: {
        padding: 0,
        paddingBottom: "0px !important",
        alignItems: 'center',
        '& .MuiListItemText-primary': {
            marginLeft: -30,
            lineHeight: '1.2em',
        },
    },
    icon: {
        color: "#66bb6a",
        fontSize: '1.4rem',
        minWidth: 24,
        marginLeft: -10,
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 60,
        gap: '0px',
        flexWrap: 'wrap',
        padding: 0,
    },
    contactButton: {
        color: '#fff !important',
        fontWeight: 600,
        textTransform: "none",
        minWidth: 130,
        width: '50%',
        height: 37,
        borderRadius: 0,
        '&:first-of-type': {
            background: 'linear-gradient(45deg, #1f4898, #1365b7)',
            borderRight: '3px solid rgb(12 15 24 / 75%)',
            // borderBottomLeftRadius: '8px',
            // borderTopLeftRadius: '8px',
        },
        '&:last-of-type': {
            backgroundColor: '#114796',
            borderLeft: '3px solid rgb(12 15 24 / 75%)',
            // borderBottomRightRadius: '8px',
            // borderTopRightRadius: '8px',
            '&:hover, &:focus': {
                backgroundColor: '#0b3879',
            },
        },
        [theme.breakpoints.down('sm')]: {
            height: 40,
        }
    },
}));

export default useStyles;
