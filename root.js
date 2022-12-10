// 페이지 상단으로 이동
function scrollToTop() {
    window.scrollTo({left: 0, top:0, behavior:"smooth"})
}
// 페이지 하단으로 이동
function scrollTobottom() {
    window.scrollTo({left: 0, top: 2800, behavior:"smooth"}) 
}
function zoomIn(event) {
    event.target.style.transform = "scale(1.4)";
    event.target.style.zIndex = 1;
    event.target.style.transition = "all 0.5s";
  }

  function zoomOut(event) {
    event.target.style.transform = "scale(1)";
    event.target.style.zIndex = 0;
    event.target.style.transition = "all 0.5s";
  }