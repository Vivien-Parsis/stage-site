import Credit from "./credit";

const Footer = () => {
    return (
        <>
        <footer>
            <div>
            <span>CLINIQUE DENTAIRE IMPLANTAIRE</span>
            <span>Docteur Jean-Charles Giunta</span>
            <span>Spécialisé en implantologie</span>
            <span>Chirurgien Dentiste Boissy-Saint-Léger</span>
            <span>12 Rue Louise Chenu<br/>94470 Boissy-Saint-Léger</span>
            <span><a href="tel:0145691626">📞 01 45 69 16 26</a></span>
            </div>
            <div>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            </div>
            <Credit/>
        </footer>
        </>
    )
}
export default Footer;