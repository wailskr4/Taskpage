function toggleAnswer(element) {
  const answer = element.querySelector(".answer");
  answer.style.display = answer.style.display === "block" ? "none" : "block";
}
document.getElementById("form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Merci pour votre inscription !");
  this.reset();
});
