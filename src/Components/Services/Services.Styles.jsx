import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        borderRadius: 10,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
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
        color: "#212121",
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.3em !important',

        },
    },
    cardSubtitle: {
        color: '#ba4419',
        fontSize: '1.3em !important',
        fontWeight: 600,
    },
    bulletList: {
        marginBottom: 25,
        paddingLeft: 16,
        marginTop: 15,
        fontSize: '1.2em',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 8,
        },
    },
    listItem: {
        padding: 0,
        paddingBottom: 5,
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
        height: 45,
        borderRadius: 0,
        '&:first-of-type': {
            background: 'linear-gradient(45deg, #1f4898, #1365b7)',
            borderRight: '2px solid #fff',
            // borderBottomLeftRadius: '8px',
            // borderTopLeftRadius: '8px',
        },
        '&:last-of-type': {
            backgroundColor: '#114796',
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
