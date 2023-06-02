const teamSkillsProgress = () => {
  let teamSection = document.querySelector(".team-crv");
  if (teamSection) {
    window.addEventListener("scroll", () => {
      document.querySelectorAll(".skill-progress .progres").forEach((item) => {
        let myVal = item.getAttribute("data-value");
        if (window.pageYOffset > teamSection.offsetTop - 200) {
          item.style.width = myVal;
        }
      });
    });
  }
};

export default teamSkillsProgress;
