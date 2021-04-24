var i = 0;
var name = "Liam Jones";
var soFar = "";

function typeWriter() {
  if (i > 4 && i <= name.length + 5) {
    soFar = name.substring(0, i - 5);
    document.getElementById("name").innerHTML = soFar + "_";
  }
  i++;
  setTimeout(typeWriter, 150);
}

const links = document.querySelectorAll(".scroll_to");

links.forEach((item)=>{
  item.addEventListener("click", ()=>{
    const element = document.getElementById(item.getAttribute("data-link"));
    element.scrollIntoView({behavior:"smooth", block:"center"})
  })
})
