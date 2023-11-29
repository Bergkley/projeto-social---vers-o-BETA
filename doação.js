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


function mostrarSecaoPix() {
  const pixSection = document.querySelector('.pix');
  const outrasFormasSection = document.querySelector('.outras-formas');
  pixSection.style.display = 'block';
  outrasFormasSection.style.display = 'none';
}

// Função para exibir a seção "outras-formas" e ocultar a seção "pix"
function mostrarSecaoOutrasFormas() {
  const pixSection = document.querySelector('.pix');
  const outrasFormasSection = document.querySelector('.outras-formas');
  pixSection.style.display = 'none';
  outrasFormasSection.style.display = 'block';
}

// Adicione os ouvintes de eventos aos botões
const doarViaPixButton = document.getElementById('doarViaPixButton');
doarViaPixButton.addEventListener('click', mostrarSecaoPix);

const doarOutrasFormasButton = document.getElementById('doarOutrasFormasButton');
doarOutrasFormasButton.addEventListener('click', mostrarSecaoOutrasFormas);


const buttons = document.querySelectorAll(".btn-formas button");

// Adiciona um ouvinte de eventos a cada botão
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove a classe 'selected' de todos os botões
    buttons.forEach((btn) => btn.classList.remove("selected"));
    // Adiciona a classe 'selected' ao botão clicado
    button.classList.add("selected");
  });
});

// Função para rolar a página de volta ao topo
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Adiciona uma animação de rolagem suave
  });
}

// Exibir o botão "Voltar ao Topo" quando o usuário rolar a página
  window.onscroll = function () {
    var scrollButton = document.getElementById('scroll-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  };

  // Função para rolar a página para baixo
// Função para rolar a página para baixo e acionar o botão "Doar via PIX"

function scrollToBottom() {
  const doarViaPixButton = document.getElementById('doarViaPixButton');
  const cellphoneImage = document.getElementById('doarViaPixButton');

  if (doarViaPixButton) {
    doarViaPixButton.click();
  }

  if (cellphoneImage) {
    const position = cellphoneImage.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  }
}

function scrollToPix() {
  const pixSection = document.getElementById('pix');
  if (pixSection) {
    pixSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToOutrasFormas() {
  const outrasFormasSection = document.getElementById('outras-formas');
  if (outrasFormasSection) {
    outrasFormasSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Update the event listeners for the buttons
doarViaPixButton.addEventListener('click', () => {
  mostrarSecaoPix();
  scrollToPix();
});

doarOutrasFormasButton.addEventListener('click', () => {
  mostrarSecaoOutrasFormas();
  scrollToOutrasFormas();
});


// Seleciona os elementos do DOM
const generateQRCodeButton = document.getElementById('generateQRCodeButton');
const loadingMessage = document.getElementById('loadingMessage');
const qrcode = document.getElementById('qrcode');

// Função para gerar o QR Code
function generateQRCode() {
  // Exibe a mensagem de "Carregando"
  generateQRCodeButton.style.display = 'none';
  loadingMessage.style.display = 'block';

  // Simula uma operação demorada (você pode substituir isso pelo código real de geração do QR Code)
  setTimeout(function () {
    // Oculta a mensagem de "Carregando" e exibe a imagem do QR Code
    loadingMessage.style.display = 'none';
    qrcode.style.display = 'block';
  }, 2000); // Simula um atraso de 2 segundos (você pode ajustar conforme necessário)
}

// Adiciona um ouvinte de eventos ao botão "Gerar QR Code"
generateQRCodeButton.addEventListener('click', generateQRCode);


setTimeout(function() {
  document.querySelector('.full-screen-image').style.display = 'none';
  document.querySelector('.content').style.display = 'block';
}, 5000); // 5000 milissegundos (5 segundos)







