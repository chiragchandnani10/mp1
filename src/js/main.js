const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
const navbar = document.getElementsByClassName("navbar");

// console.log(navLinks);


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
    link.classList.remove("active_nav");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active_nav");
    }
  });
});


console.log(document.querySelectorAll(".card"));
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const modalId = card.dataset.modal; // ✅ safer than getAttribute
    console.log(modalId); // should print modal1, modal2, or modal3
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("active");
    }
  });
});

// Close modal
document.querySelectorAll(".modal .close").forEach(closeBtn => {
  closeBtn.addEventListener("click", () => {
    closeBtn.closest(".modal").classList.remove("active");
  });
});


// Close when clicking outside
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.classList.remove("active");
  }
});


//Close modal on ESC key press
window.addEventListener("keydown", (e) => {
    if(e.key==="Escape"){
        modals.forEach(modal => {
            modal.classList.remove("active");
          });
    }
});



document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about");

  // Intersection Observer for smooth entry when section appears
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutSection.classList.add("show");
        observer.unobserve(aboutSection); // only animate once
      }
    });
  }, { threshold: 0.2 });

  observer.observe(aboutSection);
});


