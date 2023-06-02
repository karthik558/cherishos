const fadeWhenScroll = (element) => {
  window.addEventListener("scroll", () => {
    var scrolled = window.pageYOffset;
    if (element) {
      element.forEach((item) => {
        item.style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
        item.style.opacity = 1 - scrolled / 600;
      });
    }
  });
};

export default fadeWhenScroll;
