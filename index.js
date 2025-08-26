
const messages = [
  "¡Sigue adelante, lo estás haciendo genial!",
  "Cada paso que das te acerca a tu meta.",
  "No te rindas, las cosas buenas toman tiempo.",
  "Cree en ti mismo y todo será posible.",
  "Hoy es un nuevo día para brillar.",
  "Tu esfuerzo de hoy es el éxito de mañana.",
  "La perseverancia es la clave del éxito.",
  "¡Eres más fuerte de lo que piensas!",
  "No hay nada que no puedas lograr.",
  "Confía en el proceso y sigue trabajando duro."
];

function getInspirationalMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

module.exports = {
  getInspirationalMessage
};
