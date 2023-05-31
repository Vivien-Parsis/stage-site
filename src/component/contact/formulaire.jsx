const Formulaire = () => {
    const getDate = (deltaYear) => {
        const today = new Date();
        return `${today.getFullYear()+deltaYear}-${today.getMonth()<10 ? '0'+today.getMonth() : today.getMonth()}-${today.getDay()<10 ? '0'+today.getDay() : today.getDay()}`;
    }
    return (
        <>
        <form id="form-contact">
            <li><label htmlFor="nom">Nom : <span id="required-input">* </span></label>
            <input type="text" name="nom" id="nom" required></input></li>
            <li><label htmlFor="prenom">Prenom : <span id="required-input">* </span></label>
            <input type="text" name="prenom" id="prenom" required></input></li>
            <li><label htmlFor="date">Date : <span id="required-input">* </span></label>
            <input type="date" min={getDate(0)} max={getDate(1)} name="date" id="date" required></input></li>
            <li><label htmlFor="téléphone">Téléphone : <span id="required-input">* </span></label>
            <input type="tel" name="téléphone" id="téléphone" required></input></li>
            <li><label htmlFor="email">Email : <span id="required-input">* </span></label>
            <input type="email" name="email" id="email" required></input></li>
            <input type="submit"></input>
        </form>
        </>
    )
}
export default Formulaire;