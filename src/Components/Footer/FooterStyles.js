import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '50px',
        backgroundColor: '#0b0f18',
        color: '#fff',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 'auto',
        flexShrink: 0,
    },
    footerText: {
        fontFamily: 'monospace',
        [theme.breakpoints.down('xs')]: {
            fontSize: '.8em',
        },
    },
    flag: {
        width: 40,
        margin: '0 10px',
    },
}));

export default useStyles;
