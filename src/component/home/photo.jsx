import photo from '../../assets/image/Dentiste-Boissy-Saint-leger-Dr-Jean-Charles-Giunta.jpg'

const Photo = () => {
    return (
        <div id="home-photo">
        <img alt="Dr Jean-Charles Giunta" src={photo}></img>
        <a className="button-link" href="/equipe">Mes compétences et expertise</a>
        </div>
    )
}
export default Photo;   