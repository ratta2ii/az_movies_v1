import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    pdfBox: {
        marginTop: 10,
        marginBottom: 50,
    },
}));

export default useStyles;
