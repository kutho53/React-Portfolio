import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <nav class="navbar navbar-expand bg-dark navbar-dark fixed-top">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="navbar-brand">Kurt Thomas</div>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" to="/">About Me</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/portfolio-page">Portfolio</Link>
                        </li>
                        {/* <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </li> */}
                        {/* <li class="nav-item">
                            <Link class="nav-link" to="/resume">Resume</Link>
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