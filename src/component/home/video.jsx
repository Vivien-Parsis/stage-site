import presentation from '../../assets/video/Cabinet-dentaire-Giunta-Dentiste-Boissy-Saint-Leger-94.mp4'
const Video = () => {
    return(
        <div id="home-video">
        <video controls src={presentation}></video>
        <button>Découvrez notre cabinet d'implantologie</button>
        </div>
    )
}
export default Video;