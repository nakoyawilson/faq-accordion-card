const questions = document.querySelectorAll(".question");
const box = document.querySelector(".box");

questions.forEach((question) => {
  // if (question.classList.contains("active")) {
  //   box.classList.add("box-active");
  // } else {
  //   box.classList.remove("box-active");
  // }
  question.addEventListener("click", () => {
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
      box.classList.remove("box-active");
    } else {
      answer.style.display = "block";
      box.classList.add("box-active");
    }
  });
});
