import "../App.css"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/layout.jsx";
import AboutMe from "../pages/aboutMe.jsx";
import Portfolio from "../pages/portfolio.jsx";
import Contact from "../pages/contact";
// import Resume from "../pages/resume";

function Navigation(){
    const linkStyle = { border: '1px black', padding: '5px' };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<AboutMe />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="contact" element={<Contact />} />
                    {/* <Route path="resume" element={<Resume />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Navigation


// <nav className="main-header-menu">
        //     <section
        //       class = "navStyle"
        //     >
        //         <div style={linkStyle}>
        //             <a href='./src/pages/aboutMe.jsx'>About me</a>
        //         </div>
        //         <div style={linkStyle}>
        //             <a href='./src/pages/portfolio'>Portfolio</a>
        //         </div>
        //         <div style={linkStyle}>
        //             <a href='#contact'>Contact</a>
        //         </div>
        //         <div style={linkStyle}>
        //             <a href='#resume'>Resume</a>
        //         </div>
        //     </section>
        // </nav>