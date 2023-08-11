/*area de animação do menu*/
const btnAr = document.querySelector('menu-btn-area')
const mnT = document.querySelector('#menu-element-t')
const mnc = document.querySelector('#menu-element-c')
const mnb = document.querySelector('#menu-element-b')

function btnAnimation(){
  btnAr
  mnT.style.marginLeft="100px"
  mnc.style.transform="rotate(45deg)"
  mnc.style.marginTop="20px"
  mnb.style.transform="rotate(-45deg)"
  mnb.style.marginBottom="25px"
  mnb.style.transition = "0.5s ease-in-out"
  mnT.style.transition = "0.5s ease-in-out"
  mnc.style.transition = "0.5s ease-in-out"

  mnb.style.borderRadius = "15px"
  mnT.style.borderRadius = "15px"
  mnc.style.borderRadius = "15px"
}
function btnReset(){
  mnT.style.marginLeft="0"
  mnc.style.transform=""
  mnc.style.marginTop=""
  mnb.style.transform=""
  mnb.style.marginBottom=""
  mnb.style.borderRadius = ""
  mnT.style.borderRadius = ""
  mnc.style.borderRadius = ""
}
/* menu movile*/


const menuBody = document.getElementById('menu-mb');
const menuBtn = document.querySelector('#menu-button');
menuBtn.addEventListener("click",()=>{


  menuBody.style.transition="0.8s ease";
  menuBody.style.right="0"
  menuBody.classList.add("actv")


  if (menuBody.style.display === "none" || menuBody.style.display === "") {
    btnAnimation()
    menuBody.style.display = "block";
  } else {
    menuBody.style.display = "";
    menuBody.style.right="100%"
    btnReset()
  }
  
})




const back = document.querySelector("#backmodule");
const modules = document.querySelector(".curse-modules");
const course = document.querySelector("#area-c");
document.getElementById("btn-course").onclick = minhaFuncaoOnClick;
function minhaFuncaoOnClick() {
  // Coloque a ação que você deseja executar aqui
  
  course.style.display="none"
  modules.style.top ="0"
  modules.style.display ="block"
  
}
back.addEventListener("click",()=>{
  modules.style.display ="none"
  course.style.display="block"
})



const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

// Funções
function smoothScroll(e) {
  e.preventDefault();

  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });

  setTimeout(() => {
    if (menu.classList.contains("menu-active")) {
      menu.classList.remove("menu-active");
    }
  }, 500);
}

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 3000);
}

// Eventos


// Inicialização
showSlides();

