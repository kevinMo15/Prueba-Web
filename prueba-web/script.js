function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


window.addEventListener("load", () => {
  for (let i of document.querySelectorAll(".gallery img")) {
    i.onclick = () => i.classList.toggle("full");
  }
});