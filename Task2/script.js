const quizData = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Madrid", "Berlin"],
      correctAnswer: "Paris"
    },
    {
      question: " What is the top color in a rainbow?",
      choices: ["Violet", "Blue", "Green", "Red"],
      correctAnswer: "Red"
    },
    {
      question: " In which direction does the sunrise?",
      choices: ["West", "East", "North", "South"],
      correctAnswer: "East"
    },
  ];
  
  let questionIndex = 0;
  let score = 0;
  
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const submitButton = document.getElementById('submit');
  
  function showQuestion() {
    question.innerText = quizData[questionIndex].question;
    choices.innerHTML = "";
    for (let i = 0; i < quizData[questionIndex].choices.length; i++) {
      const choice = document.createElement("button");
      choice.innerText = quizData[questionIndex].choices[i];
      choice.addEventListener("click", checkAnswer);
      choices.appendChild(choice);
    }
  }
  
  function checkAnswer(event) {
    const selectedChoice = event.target.innerText;
    if (selectedChoice === quizData[questionIndex].correctAnswer) {
      score++;
    }
    questionIndex++;
    if (questionIndex < quizData.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    question.innerText = `You scored ${score} out of ${quizData.length}.`;
    choices.innerHTML = "";
    submitButton.disabled = true;
  }
  
  showQuestion();
  