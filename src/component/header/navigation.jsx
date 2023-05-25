import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
        <nav>
            <Link to="/"> Accueil </Link>
            <Link to="/contact"> contact </Link>
        </nav>
        <Outlet/>
        </>
    )
};

export default Navigation;