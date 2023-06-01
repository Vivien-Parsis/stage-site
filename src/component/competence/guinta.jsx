import photo from '../../assets/image/Dentiste-Boissy-Saint-leger-Dr-Jean-Charles-Giunta.jpg';  

const Guinta = () => {
    return (
        <div id="competence-guinta">
            <h2>
                Dr Jean-Charles Giunta<br/> 
                Chirurgien Dentiste à Boissy-Saint-Léger
            </h2>
            <ul>
                <li>Docteur en chirurgie dentaire</li>
                <li>Chirurgien Oral Membre de la Société Française de Chirurgie Orale</li>
                <li>Certifié en Technologie des Biomatériaux Dentaires</li>
                <li>Certifié en Chirurgie Odontologique</li>
                <li>Certifié en Physiologie Générale</li>
                <li>Certifié en Anatomie Cervico-Faciale</li>
                <li>D.U d'Implantologie et de Réhabilitation Orale</li>
                <li>D.U de Dermatologie -Vénérologie de la Muqueuse Buccale</li>
                <li>D.U de Chirurgie Pré et Péri Implantaire</li>
                <li>Attestation d'Etudes Approfondies de Biologie du milieu Buccal et Osseux</li>
                <li>Attestation de Maîtrise des Sciences Biologiques et Médicales</li>
                <li>Accréditation pour l'utilisation du gaz MEOPA</li>
                <li>Accréditation pour l'utilisation de la Panoramique 3D</li>
                <li>Qualifié en Chirurgie Orale</li>
            </ul>
            <div id="competence-guinta-photo">
                <img alt="Dr Jean-Charles Giunta" src={photo}></img>
            </div>
        </div>
    )
}
export default Guinta;