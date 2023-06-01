import Acces from "./acces";
import Adresse from "./adresse";
import Calendrier from "./calendrier";
import Formulaire from "./formulaire";

const Contact = () => {
    return( 
        <div id="contact">
        <h2>Contact</h2>
        <div id="formulaire"><Formulaire/></div>
        <div id="adresse"><Adresse/></div>
        <div id="acces"><Acces/></div>
        <div id="calendrier"><Calendrier/></div>
        </div>
    )
};
export default Contact;