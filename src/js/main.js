const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
const navbar = document.getElementsByClassName("navbar");

console.log(navLinks);


window.addEventListener("scroll", () => {
  let current = "";
  navbar[0].style.height = "80px";
   console.log(pageYOffset);
   if(window.innerWidth <= 500){
    navbar[0].style.height = "250px";
   }
   else{
   if(pageYOffset===0){
        navbar[0].style.height = "100px";
   }
}
   for(i=0; i<sections.length; i++) {
    const section = sections[i];
    const sectionTop = sections[i].offsetTop - 100; // adjust for navbar height
    const sectionHeight = sections[i].clientHeight;
    //PageYoffset Indicates how far the document has been scrolled vertically from top.
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = sections[i].getAttribute("id");

    }
  }

if(pageYOffset===0){
    for(i=0; i<navLinks.length; i++){
    navLinks[i].style.fontSize="20px";

}
}
else{
   for(i=0; i<navLinks.length; i++){
       navLinks[i].style.fontSize="19px";

   }

}
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
