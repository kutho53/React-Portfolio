import "../App.css"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/layout.jsx";
import AboutMe from "../pages/aboutMe.jsx";
import Portfolio from "../pages/portfolio-page.jsx";
import Contact from "../pages/contact.jsx";
import Resume from "../pages/resume.jsx";

function Navigation(){
    const linkStyle = { border: '1px black', padding: '5px' };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<AboutMe />} />
                    <Route path="portfolio-page" element={<Portfolio />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="resume" element={<Resume />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Navigation
