const aboutSkillsProgress = (skillsEl, progresEl, sectionEl) => {
  let skillInAbout = skillsEl;
  if (skillInAbout) {
    window.addEventListener("scroll", () => {
      progresEl.forEach((item) => {
        let myVal = item.getAttribute("data-value");
        if (window.pageYOffset > sectionEl.offsetTop - 200) {
          item.style.width = myVal;
        }
      });
    });
  }
};

export default aboutSkillsProgress;
