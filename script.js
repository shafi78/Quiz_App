const quizQuestions = [
    {
      question: "Who is shafi?",
      options: ["Developer", "SE", "Artist", "Student"],
      correctAnswer: "Developer"
    },
    {
      question: "Who is the father of C programming?",
      options: ["Dennies", "Linus", "gosling", "Charles"],
      correctAnswer: "Dennies"
    },
    {
      question: "Elon musk ?",
      options: ["Tesla", "Google", "Amazon", "Flipkart"],
      correctAnswer: "Tesla"
    },
    {
      question: "Sundar pichai",
      options: ["Microsoft", "Google", "Amazon", "Flipkart"],
      correctAnswer: "Google"
    }

  ];
  
  // Variables to track quiz state
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 100;
  let timerInterval;
  
  // Function to start the quiz
  function startQuiz() {
    // Hide the start button and display the first question
    document.getElementById("start-button").style.display = "none";
    document.getElementById("timer-text").style.display = "contents";

    document.querySelector('h1').style.fontSize = '3rem';
    document.querySelector('h1').style.marginTop = '1rem';


    displayQuestion();
    startTimer();
  }
  
  // Function to display a question and its options
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
  
    // Clear previous question and answer options
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
  
    // Display the current question
    questionText.innerHTML = currentQuestion.question;
  
    // Create answer buttons for each option
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
  
      // Add click event listener to check the answer
      button.addEventListener("click", function() {
        checkAnswer(option);
      });
    });
  }
  
  // Function to check the selected answer
  function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
  
    // Check if the selected answer is correct
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
  
    // Move to the next question or end the quiz if all questions are answered
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  
  // Function to start the timer
  function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
  
      // Update the timer text
      document.getElementById("timer").textContent = timeLeft;
  
      // End the quiz if time runs out
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  // Function to end the quiz
  function endQuiz() {
    // Stop the timer
    clearInterval(timerInterval);
  
    // Calculate the score percentage
    const scorePercentage = (score / quizQuestions.length) * 100;
    
    // Display the final score
    const questionContainer = document.getElementById("question-container");
    // questionContainer.style.marginLeft = '70px'
    questionContainer.innerHTML = `
      <h2 style="color:green">Quiz Completed!</h2>
      <br>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <br>
      <p>Score Percentage: ${scorePercentage}%</p>
    `;

  }
  
  // Add event listener to start the quiz when the start button is clicked
  document.getElementById("start-button").addEventListener("click", startQuiz);