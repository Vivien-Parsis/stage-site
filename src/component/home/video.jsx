import presentation from '../../assets/video/Cabinet-dentaire-Giunta-Dentiste-Boissy-Saint-Leger-94.mp4'
const Video = () => {
    return(
        <div id="home-video">
        <video controls src={presentation}></video>
        <a className="button-link" href="/cabinet">Découvrez notre cabinet d'implantologie</a>
        </div>
    )
}
export default Video;