const removeSlashFromPagination = () => {
  if (document.querySelectorAll(".swiper-pagination")) {
    document.querySelectorAll(".swiper-pagination").forEach((item) => {
      item.innerHTML = item.innerHTML.replace(" / ", "");
    });
  }
};
export default removeSlashFromPagination;
