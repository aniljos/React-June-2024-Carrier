import { Link } from "react-router-dom";
import { AppRoute } from "../routes/routes";

type HeaderProps = {
    routes: Array<AppRoute>

}

function Header({ routes }: HeaderProps) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">React MFE Host</Link>
                <ul className="nav">
                    {routes.filter(route => route.isOnNav).map(route => {

                        return (
                            <li key={route.path} className="nav-item">
                                <Link className="nav-link" to={route.path}>{route.title}</Link>
                            </li>
                        )
                    })}
                    {/* <li  className="nav-item">
                        <Link className="nav-link" to="/remote-counter">RemoteCounter</Link>
                    </li>
                    <li  className="nav-item">
                        <Link className="nav-link" to="/customers">List Customers</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Header;