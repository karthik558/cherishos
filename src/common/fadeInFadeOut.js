var opacity = 0;
var intervalID = 0;
export const fadeIn = (el, time) => {
  setInterval(show(el), time);
};
function show(el) {
  opacity = Number(window.getComputedStyle(el).getPropertyValue("opacity"));
  if (opacity < 1) {
    opacity = opacity + 1;
    el.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}
export const fadeOut = (el, time) => {
  setInterval(hide(el), time);
};
function hide(el) {
  opacity = Number(window.getComputedStyle(el).getPropertyValue("opacity"));
  if (opacity > 0) {
    opacity = 0;
    el.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}
