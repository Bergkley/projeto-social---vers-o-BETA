class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

const btn= document.querySelector('.btn')

setTimeout(function() {
  document.querySelector('.full-screen-image').style.display = 'none';
  document.querySelector('.content').style.display = 'block';
}, 5000); 

let overlay = document.getElementById('overlay-menu')

overlay.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu')
})



function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
}


var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}

// Função para esconder o botão de WhatsApp
function esconderBotaoWhatsapp() {
  var btnWhatsapp = document.querySelector('.btn-whatsapp');
  if (btnWhatsapp) {
    btnWhatsapp.style.display = 'none';
  }
}

// Evento para detectar carregamento de imagens
document.addEventListener('load', function(event) {
  if (event.target.tagName === 'IMG') {
    esconderBotaoWhatsapp();
  }
}, true);

// Evento para detectar inserção de texto
document.addEventListener('input', function() {
  esconderBotaoWhatsapp();
}, true);

// Evento para detectar mudanças no DOM (inserção de elementos)
document.addEventListener('DOMSubtreeModified', function() {
  esconderBotaoWhatsapp();
}, true);

// Evento para detectar alterações na URL (se a página mudar sem recarregar)
window.onhashchange = function() {
  esconderBotaoWhatsapp();
};
