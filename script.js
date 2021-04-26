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

const links1 = document.querySelectorAll(".scroll_to_top");

links1.forEach((item)=>{
  item.addEventListener("click", ()=>{
    const element = document.getElementById(item.getAttribute("data-link"));
    const yOffset = -70;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  })
})


const links2 = document.querySelectorAll(".scroll_to_end");

links2.forEach((item)=>{
  item.addEventListener("click", ()=>{
    const element = document.getElementById(item.getAttribute("data-link"));
    element.scrollIntoView({behavior:"smooth", block:"end"})
  })
})

const links3 = document.querySelectorAll(".scroll_to_center");

links3.forEach((item)=>{
  item.addEventListener("click", ()=>{
    const element = document.getElementById(item.getAttribute("data-link"));
    element.scrollIntoView({behavior:"smooth", block:"center"})
  })
})



function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
