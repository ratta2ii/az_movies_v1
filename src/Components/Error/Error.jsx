import { Helmet } from 'react-helmet';

export default function Error() {
    return (
        <div id="error-page" style={{ padding: 40, textAlign: "center", color: '#fff' }}>
            <Helmet>
                <title>Page Not Found | Chinook Water Testing</title>
                <meta name="description" content="Oops! The page you are looking for doesn't exist. Please return to the homepage or contact us for further assistance." />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, we couldn’t find the page you were looking for.</p>
            <a href="/" style={{ color: "#fff", fontWeight: "bold", fontSize: '1.2em' }}>← Back to Homepage</a>
        </div>
    );
}
