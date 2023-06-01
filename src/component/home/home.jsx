import HomeContact from "./HomeContact";
import Photo from "./photo";
import Presentation from "./presentation";
import Video from "./video";

const Home = () => {
    return (
        <div id="home">
        <h1>Cabinet d'implantologie dentaire du Dr Jean-Charles Giunta</h1>
        <Presentation/>
        <Photo/> 
        <Video/>
        <HomeContact/>         
        </div>
    )
}
export default Home;
