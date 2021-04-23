const links = document.querySelectorAll(".scroll_to");
links.forEach((item)=>{
  item.addEventListener("click", ()=>{
    const element = document.getElementById(item.getAttribute("data-link"));
    element.scrollIntoView({behavior:"smooth", block:"center"})
  })
})
