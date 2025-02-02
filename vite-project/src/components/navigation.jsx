export default function Navigation(){

    return (
        <nav className="main-header-menu">
            <section
            >
                <div style={linkStyle}>
                    <a href='./pages/aboutMe.jsx'>About me</a>
                </div>
                <div style={linkStyle}>
                    <a href='./pages/portfolio.jsx'>Portfolio</a>
                </div>
                <div style={linkStyle}>
                    <a href='./pages/contact.jsx'>Contact</a>
                </div>
                <div style={linkStyle}>
                    <a href='./pages/resume.jsx'>Resume</a>
                </div>
            </section>
        </nav>
    )
}

