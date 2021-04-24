var i = 0;
var name = "Liam Jones";
var soFar = "";

function typeWriter() {
  if (i <= name.length) {
    soFar = name.substring(0, i);
    document.getElementById("name").innerHTML = soFar + "_";
    i++;
    setTimeout(typeWriter, 150);
  }
}

const links = document.querySelectorAll(".scroll_to");

links.forEach((item)=>{
  item.addEventListener("click", ()=>{
    const element = document.getElementById(item.getAttribute("data-link"));
    element.scrollIntoView({behavior:"smooth", block:"center"})
  })
})
