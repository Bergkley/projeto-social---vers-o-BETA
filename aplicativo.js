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

  
  function copyCNPJ() {
    
    const cnpj = "43153689/0001-05";

    // Cria um elemento de texto oculto para armazenar o CNPJ
    const cnpjInput = document.createElement("input");
    cnpjInput.value = cnpj;
    document.body.appendChild(cnpjInput);

    
    cnpjInput.select();
    cnpjInput.setSelectionRange(0, 99999); // Para dispositivos móveis

    
    document.execCommand("copy");

    
    document.body.removeChild(cnpjInput);

    // Alerta o usuário que o CNPJ foi copiado
    alert("CNPJ copiado com sucesso: " + cnpj);
  }

  // Adiciona um ouvinte de eventos ao botão de cópia
  const copyCNPJButton = document.getElementById("copyCNPJButton");
  if (copyCNPJButton) {
    copyCNPJButton.addEventListener("click", copyCNPJ);
  }

  
setTimeout(function() {
  document.querySelector('.full-screen-image').style.display = 'none';
  document.querySelector('.content').style.display = 'block';
}, 5000); // 5000 milissegundos (5 segundos)


const button = document.querySelector(".btn-whatsapp");

  // Verifique se há texto ou imagem dentro do botão
  const hasContent = button.textContent.trim() !== "" || button.querySelector("img");

  // Oculte o botão se houver conteúdo
  if (hasContent) {
    button.style.display = "none";
  }