const scrollToTop = () => {
  let progressPath = document.querySelector(".progress-wrap path");
  let pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  const updateProgress = function () {
    let scroll = window.pageYOffset;
    let height = document.documentElement.scrollHeight - window.innerHeight;
    let progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  window.addEventListener("scroll", updateProgress);
  let progressWrap = document.querySelector(".progress-wrap");
  let offset = 150;
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > offset) {
      progressWrap.classList.add("active-progress");
    } else {
      document
        .querySelector(".progress-wrap")
        .classList.remove("active-progress");
    }
  });
  progressWrap.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  });
};

export default scrollToTop;
