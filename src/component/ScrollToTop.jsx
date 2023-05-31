import arrow from "../assets/image/double-arrow-up-svgrepo-com.svg"

const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
const scrollVisibility = () => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    {document.getElementById("BackToTop").style.display = "block"; } 
    else 
    {document.getElementById("BackToTop").style.display = "none";}   
}
window.onscroll = () => {scrollVisibility()};

const ScrollToTop = () => {return(<button onClick={scrollToTop} id="BackToTop"><img alt="" src={arrow}></img></button>)};

export default ScrollToTop;