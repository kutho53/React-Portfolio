import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <nav className="navbar navbar-expand bg-dark navbar-dark fixed-top">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-brand">Kurt Thomas</div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio-page">Portfolio</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/resume">Resume</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>

        <Outlet />
        </>
    )
}

export default Layout