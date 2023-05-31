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

const ScrollToTop = () => {
    return(<button onClick={scrollToTop} id="BackToTop">⇑</button>)
}
export default ScrollToTop;
