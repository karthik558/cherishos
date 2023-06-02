const loadingPace = () => {
 
  Pace.on("start", function () {
    document.querySelector("#preloader").classList.remove("isdone");
    document.querySelector(".loading").classList.remove("isdone");
  });
  Pace.on("done", function () {
    document.querySelector("#preloader").classList.add("isdone");
    document.querySelector(".loading").classList.add("isdone");
    
  });

  if (document.querySelector("body").classList.contains("pace-done")) {
    document.querySelector("#preloader").classList.add("isdone");
    document.querySelector(".loading").classList.add("isdone");
  }

  window.addEventListener("load", () => {
    document.querySelector("#preloader").classList.add("isdone");
    document.querySelector(".loading").classList.add("isdone");
    if (document.querySelector('.pace-running.pace-running')) {
      document.querySelector('.pace-running.pace-running').classList.remove('pace-running')
    }
  });
};

export default loadingPace;
