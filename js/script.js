  window.addEventListener("scroll", () => {
     let nav = document.querySelector("#home");
     if (window.pageYOffset > 0) {
         nav.classList.remove("active");;
     } else {
        nav.classList.add("active");
     }
 });

//   function menuPosition(position) {
//       const position = document.querySelector("");
//   }

function goToWhatsApp() {
     window.open('https://wa.me/message/4DCYS2TN43IOI1', '_blank');
}