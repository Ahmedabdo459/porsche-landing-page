// ScrollReveal options for animation
const scrollRevealOption = {
  distance: "50px", // how far the elements move
  origin: "bottom", // start animation from bottom
  duration: 1000,   // animation duration in ms
};

// Reveal the big letter "S"
ScrollReveal().reveal(".container .letter-s", {
  duration: 1000,
  delay: 1000,
});

// Reveal the main image
ScrollReveal().reveal(".container img", {
  duration: 1000,
  delay: 1500,
});

// Reveal left text (POR)
ScrollReveal().reveal(".container .text__left", {
  ...scrollRevealOption,
  origin: "right",
  delay: 2000,
});

// Reveal right text (CHE)
ScrollReveal().reveal(".container .text__right", {
  ...scrollRevealOption,
  origin: "left",
  delay: 2000,
});

// Reveal explore button
ScrollReveal().reveal(".container .explore", {
  duration: 1000,
  delay: 2500,
});

// Reveal feature texts (Diesel, Watches, Tough, Modern)
ScrollReveal().reveal(".container h5", {
  duration: 1000,
  interval: 500,
  delay: 3000,
});

// Reveal catalog button
ScrollReveal().reveal(".container .catalog", {
  duration: 1000,
  delay: 5000,
});

// Reveal print button
ScrollReveal().reveal(".container .print", {
  duration: 1000,
  delay: 5500,
});

// Reveal footer text
ScrollReveal().reveal(".footer p", {
  duration: 1000,
  delay: 7000,
});
