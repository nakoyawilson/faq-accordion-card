const questions = document.querySelectorAll(".question");
const box = document.querySelector(".box");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const buttonClasses = question.classList.value;
    questions.forEach((question) => {
      const answer = question.nextElementSibling;
      question.classList.remove("active");
      answer.style.display = "none";
    });
    if (buttonClasses === "question active") {
      question.classList.remove("active");
    } else {
      question.classList.add("active");
    }
    const answer = question.nextElementSibling;
    if (!question.classList.contains("active")) {
      answer.style.display = "none";
      box.classList.remove("box-active");
    } else {
      answer.style.display = "block";
      box.classList.add("box-active");
    }
  });
});
