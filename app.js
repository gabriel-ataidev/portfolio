const srTopContact = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
});
srTopContact.reveal(
  `.contact-text img, .contact-text h2, .contact-text p, .contact-text a`,
  {
    interval: 100,
  }
);

const srBottomContact = ScrollReveal({
  origin: "bottom",
  distance: "30px",
  duration: 2000,
});
srBottomContact.reveal(
  `.footer`,
  {
    interval: 100,
  }
);
