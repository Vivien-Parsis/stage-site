import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
        <nav>
            <Link to="/"> Accueil </Link>
            <Link to="/cabinet"> Cabinet </Link>
            <Link to="/equipe"> Equipe </Link>
            <Link to="/traitement"> Traitement </Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/reglement"> Reglement </Link>
        </nav>
        <Outlet/>
        </>
    )
};

export default Navigation;