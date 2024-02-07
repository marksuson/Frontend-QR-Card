const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    const answer = question.nextElementSibling;
    const arrow = question.getElementsByTagName("span");

    if (answer.classList.contains("hidden-answer")) {
      // Close all other questions
      questions.forEach((q) => {
        if (q !== question) {
          const otherAnswer = q.nextElementSibling;
          const otherArrow = q.getElementsByTagName("span");
          q.style.fontWeight = "normal";
          otherAnswer.classList.add("hidden-answer");
          otherArrow[0].style.rotate = "0deg";
        }
      });

      // Open clicked question
      question.style.fontWeight = "bold";
      answer.classList.remove("hidden-answer");
      arrow[0].style.rotate = "180deg";
    } else {
      // Close clicked question
      question.style.fontWeight = "normal";
      answer.classList.add("hidden-answer");
      arrow[0].style.rotate = "0deg";
    }
  });
});
