document.addEventListener("DOMContentLoaded", function () {
  const message = document.getElementById("message");
  const paragraph = document.getElementById("paragraph");
  const imageContainer = document.getElementById("imageContainer");

  // Mensagem que será escrita
  const fullMessage = "Obrigado por tudo até aqui!";
  const fullText =
    "Compartilhamos momentos incríveis nesse ano e sou muito grato por isso. Amo você, e estou ansioso para os próximos momentos juntos. Com amor, Arthur. <3 22/03/2025";

  // Função para "digitar" a mensagem
  function typeMessage(element, text, delay) {
    let index = 0;
    let interval = setInterval(function () {
      element.innerHTML += text[index];
      index++;
      if (index === text.length) clearInterval(interval);
    }, 100);
  }

  // Exibir a mensagem e foto
  setTimeout(function () {
    typeMessage(message, fullMessage, 0);
    setTimeout(function () {
      paragraph.style.opacity = 1;
      typeMessage(paragraph, fullText, 0);
      setTimeout(function () {
        imageContainer.style.opacity = 1;
      }, 2000); // A foto vai aparecer depois da mensagem
    }, fullMessage.length * 100 + 500);
  }, 500); // A primeira mensagem começa após meio segundo
});
