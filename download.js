const downEle = document.getElementById("download");
downEle.addEventListener("click", () => {
  const span = document.getElementById("span");
  downEle.style.backgroundColor = "red !important;";
  downEle.style.color = "red";
  span.style.visibility = "visible";
  setTimeout(()=>{
    span.style.visibility ="hidden";

  }, 3000)
});
