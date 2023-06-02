export const thumparallax = () => {
  var imageUp = document.getElementsByClassName("thumparallax");
  if (imageUp) {
    new simpleParallax(imageUp, {
      delay: 1,
      scale: 1.1,
    });
  }
};
export const thumparallaxDown = () => {
  var imageDown = document.getElementsByClassName("thumparallax-down");
  if (imageDown) {
    new simpleParallax(imageDown, {
      orientation: "down",
      delay: 1,
      scale: 1.1,
    });
  }
};
