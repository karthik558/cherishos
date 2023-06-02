import getSiblings from './getSiblings'

export const handleDropdown = (e) => {
  getSiblings(e.target.parentElement)
    .filter((item) => item.classList.contains("show"))
    .map((item) => {
      item.classList.remove("show");
      if (item.childNodes[0]) {
        item.childNodes[0].setAttribute("aria-expanded", false);
      }
      if (item.childNodes[1]) {
        item.childNodes[1].classList.remove("show");
      }
    });
  e.target.parentElement.classList.toggle("show");
  e.target.setAttribute("aria-expanded", true);
  e.target.parentElement.childNodes[1].classList.toggle("show");
};

export const handleMobileDropdown = (e) => {
  document
    .getElementById("navbarSupportedContent")
    .classList.toggle("show-with-trans");
};