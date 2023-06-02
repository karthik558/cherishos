const animateElement = (el, to) => {
  function draw() {
    el.style.left = to;
  }
  draw();
};

export default animateElement;
