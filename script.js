const mainHeader = document.getElementById("mainHeader");
const mainHeaderContainer = document.getElementById("mainHeaderContainer");

mainHeader.onmouseover = function(){
    mouseOver();
}

mainHeader.onmouseout = function(){
    mouseOut();
}

function mouseOver() {
    mainHeader.style.fontSize = "450%";
    mainHeader.style.color = "#0088a9";
}
  
function mouseOut() {
    mainHeader.style.fontSize = "400%";
    mainHeader.style.color = "white";
}

function fadeOutOnScroll(element) {
    if (!element) {
      return;
    }
    
    let distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    let elementHeight = element.offsetHeight;
    let scrollTop = document.documentElement.scrollTop;
    
    let opacity = 1;
    
    if (scrollTop > distanceToTop) {
      opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
    }
    
    if (opacity >= 0) {
      element.style.opacity = opacity;
    }
  }
  
  function scrollHandler() {
    fadeOutOnScroll(mainHeaderContainer);
  }
  
  window.addEventListener('scroll', scrollHandler);
  