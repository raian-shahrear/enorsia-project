// customize product color-image's input:file fields
function uploadFile(target) {
  document.getElementById("product-img").innerHTML = target.files[0].name;
}

// active menu options
const activeLink = window.location.pathname;
const links = document.querySelectorAll(".sub-menu a").forEach(link => {
  if(link.href.includes(`${activeLink}`)){
    link.classList.add("sub-active");
  }
})
