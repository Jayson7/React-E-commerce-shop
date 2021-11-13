window.addEventListener("load", () => {
  var btnsearch = document.querySelector("form button");
  var forminput = document.querySelector("form input");

  console.log(btnsearch);
  btnsearch.addEventListener("mouseover", () => {
    forminput.style.display = "flex";
  });
  btnsearch.addEventListener("mouseleave", () => {
    forminput.style.display = "none";
  });
});
