import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/Navigation/NavBar';
import Footer from './Components/Footer/Footer';
import Home from "./Views/Home/Home";
import Locations from "./Views/Locations/Locations";
import Gallery from "./Views/Gallery/Gallery";
import Contact from "./Views/Contact/Contact";
import MovieNightsOptions from "./Views/Products/MovieNightsOptions/MovieNightsOptions";
import ConcessionsOptions from "./Views/Products/ConcessionsOptions/ConcessionsOptions";
import IceCreamTruck from "./Views/Products/IceCreamTruck/IceCreamTruck";
import Error from './Components/Error/Error';
import { Helmet } from "react-helmet";
import ScrollToTop from "./Components/ScrollToTop";
import FAQs from "./Views/FAQs/FAQs";
import Loader from "./Components/Loader";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Simulate minimal load delay or use actual asset check
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 300); // or check for images/fonts

        return () => clearTimeout(timer);
    }, []);

    if (!isLoaded) {
        return <Loader />;
    }

    return (
        <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div className="root" style={{ flex: 1 }}>
                {/* Global SEO Tags */}
                <Helmet>
                    <title>Well Water Testing & System Inspections in North Idaho & Eastern WA</title>
                    <meta name="description" content="Certified well water testing, GPM flow rate testing, and system inspections. Serving North Idaho and Eastern Washington." />
                    <meta
                        name="keywords"
                        content="well water testing, flow rate testing, system inspections, VA FHA HUD compliance, North Idaho, Eastern Washington"
                    />
                    <meta property="og:title" content="Well Water Testing & System Inspections in North Idaho & Eastern WA" />
                    <meta
                        property="og:description"
                        content="Certified well water testing, GPM flow rate testing, and system inspections. Serving North Idaho and Eastern Washington."
                    />
                    <meta name="author" content="Chinook Water Testing" />
                    <meta property="og:image" content="https://movienightpros.com/chinookLogo.jpg" />
                    <meta property="og:image:alt" content="Chinook Water Testing company logo" />
                    <meta property="og:url" content="https://movienightpros.com/" />
                    <meta property="og:type" content="website" />
                    <meta name="robots" content="index, follow" />
                    <link rel="canonical" href="https://movienightpros.com/" />
                </Helmet>
                <NavBar />
                <ScrollToTop />
                <Routes>
                 {/* Location-specific Pages */}
                    <Route path="/scottsdale" element={<Locations />} />
                    <Route path="/tempe" element={<Locations />} />
                    <Route path="/mesa" element={<Locations />} />

                    {/* Hooking up for drawer links */}
                    <Route path="/locations" element={<Locations />} />

                    <Route path="/faqs" element={<FAQs />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/ice-cream-truck" element={<IceCreamTruck />} />
                    <Route path="/concessions-options" element={<ConcessionsOptions />} />
                    <Route path="/movie-nights-options" element={<MovieNightsOptions />} />
                    <Route path="/" element={<Home />} />

                    {/* ✅ Catch-all route for bad paths */}
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
            <Footer />
        </main>
    );
}

export default App;
