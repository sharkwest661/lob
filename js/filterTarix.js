const filterDate = document.querySelector("#filter_date");
const filterDateClose = document.querySelector("#dateFilterClose");
const filterDateOverlay = document.querySelector(".date_filter_overlay");
const filterDateBg = document.querySelector(".date_filter_bg");

filterDate.addEventListener("click", () => {
  filterDateOverlay.style.display = "flex";
  filterDateBg.style.display = "block";
});
filterDateClose.addEventListener("click", () => {
  filterDateOverlay.style.display = "none";
  filterDateBg.style.display = "none";
});
