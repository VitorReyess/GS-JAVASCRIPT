alert('Seja bem-vindo ao projeto Agrisense!');

//carrousel de imagens header

document.addEventListener('DOMContentLoaded', function() {
    var imageUrls = [
      "./images/imagem-carroussel-1.jpg",
      "./images/imagem-carroussel-2.jpg",
      "./images/imagem-carroussel-3.jpg"
    ];

 var currentIndex = 0;
    var backgroundElement = document.querySelector('.background-image');
    var nextBackgroundElement = document.createElement('div');
    nextBackgroundElement.classList.add('background-image', 'next');
function changeBackgroundImage() {
      currentIndex++;
      if (currentIndex >= imageUrls.length) {
        currentIndex = 0;
      }
    
 nextBackgroundElement.style.backgroundImage = "url(" + imageUrls[currentIndex] + ")";
      backgroundElement.parentNode.appendChild(nextBackgroundElement);

      setTimeout(function() {
        backgroundElement.classList.add('slide-out');
        nextBackgroundElement.classList.add('slide-in');
      });
setTimeout(function() {
        backgroundElement.style.backgroundImage = "url(" + imageUrls[currentIndex] + ")";
        backgroundElement.classList.remove('slide-out');
        nextBackgroundElement.classList.remove('slide-in');
        backgroundElement.parentNode.removeChild(nextBackgroundElement);
      }, 1000);
    }

    setInterval(changeBackgroundImage, 3000);
  });

//scrollar para parte desejada
p1Element.addEventListener("click", scrollToContent);
p2Element.addEventListener("click", scrollToContent);
p3Element.addEventListener("click", scrollToContent);
p4Element.addEventListener("click", scrollToContent);
p5Element.addEventListener("click", scrollToContent);
p6Element.addEventListener("click", scrollToContent);
p7Element.addEventListener("click", scrollToContent);

//função para scrollar, offset por conta do header com posição fixa
function scrollToContent() {
  var contentElementId = this.getAttribute("id") + "P";
  var contentElement = document.getElementById(contentElementId);
  var windowHeight = window.innerHeight;
  var offset = contentElement.getBoundingClientRect().top + window.scrollY - (windowHeight * 0.38);
  window.scrollTo({ top: offset, behavior: 'smooth' });
}
