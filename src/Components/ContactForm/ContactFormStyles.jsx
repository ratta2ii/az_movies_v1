import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 650,
        [theme.breakpoints.down('md')]: {
            maxWidth: 575,
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 100,
            marginBottom: 10,
        },
    },
    form: {
        padding: 10,
        background: '#5383c6c4',
        [theme.breakpoints.down('md')]: {
            maxWidth: '550px',
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '550px',
            margin: '60px auto 60px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: 0,
            marginTop: -85,
            width: '100%',
            maxWidth: '420px',
            margin: '10% auto',
        },
    },
    paper: {
        padding: '25px',
        backgroundColor: '#eaeaea',
    },
    formMessage: {
        fontWeight: 700,
        fontSize: '1em',
        margin: '5% 5% 10%',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '.8em',
        },
    },
    formResetButton: {
        backgroundColor: '#4b739b',
        color: '#fff',
        '&:hover, &:focus': {
            backgroundColor: '#3a5978',
            boxShadow: 'none',
        },
    },
    formSubmitButton: {
        backgroundColor: '#076cce',
        color: '#fff',
        display: 'block',
        width: 120,
        float: 'right',
        marginRight: 10,
        [theme.breakpoints.down('xs')]: {
            marginRight: 0,
            width: '100%',
        },
        '&:hover, &:focus': {
            backgroundColor: '#054d94',
            boxShadow: 'none',
        },
    }
}));

export default useStyles;