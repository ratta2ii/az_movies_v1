import Pdf from './../../Assets/Documents/VA_Home_Load_Requirements.pdf';

const styles = {
    root: {
        display: 'block',
        textAlign: 'center',
        color: '#fff',
        fontSize: '1em',
        fontWeight: 300,
        fontFamily: 'system-ui',
        fontStyle: 'italic',     
        textDecoration: 'underline',
        fontSize: '1.2em',
    }
}

function VaPdf() {
    return (
        <a href={Pdf} style={styles.root} rel="noreferrer" target="_blank">
            "VA Home Loan Requirements"
        </a>
    );
}

export default VaPdf;
