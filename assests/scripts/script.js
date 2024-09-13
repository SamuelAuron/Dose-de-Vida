// Lista de textos
const texts = [
  "Você é importante, nunca se esqueça disso.",
  "Sua vida vale muito, cuide de você.",
  "Há sempre um novo amanhecer, confie no processo.",
  "Acredite no seu valor, o mundo precisa de você.",
  "Não tenha medo de pedir ajuda, você não está sozinho.",
  "A sua presença faz a diferença.",
  "Você é mais forte do que imagina.",
  "Cada passo que você dá é um avanço importante.",
  "O amanhã traz novas oportunidades.",
  "Você é único, e isso é sua força."
];

// Função para selecionar um texto aleatório
function getRandomText() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

// Exibir o texto na página
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("random-text");
  textElement.textContent = getRandomText();
});
