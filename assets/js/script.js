$(document).ready(function () {
  // Quiz data
  const quizData = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correct: 2,
      explanation: "Paris is the capital and largest city of France.",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correct: 1,
      explanation:
        "Mars is called the Red Planet due to its reddish appearance caused by iron oxide on its surface.",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
      correct: 1,
      explanation:
        "The Blue Whale is the largest animal ever known to have lived on Earth.",
    },
    {
      question: "In which year did World War II end?",
      options: ["1944", "1945", "1946", "1947"],
      correct: 1,
      explanation:
        "World War II ended in 1945 with the surrender of Japan in September.",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correct: 2,
      explanation:
        "Au is the chemical symbol for gold, derived from the Latin word 'aurum'.",
    },
  ];

  let currentQuestion = 0;
  let score = 0;
  let userAnswers = [];


  loadQuestion();

  $('#nextBtn').click(function(){
    nextQuetion();
  });

  function loadQuestion(){
    let question = quizData[currentQuestion];

    // progress bar
    const progress = (currentQuestion/quizData.length) * 100;

    $('.progress-fill').css("width",""+progress+"%");

    $(".question-number").text(
      `Question ${currentQuestion + 1} of ${quizData.length}`
    );

    $(".question-text").text(question.question);
    $(".answers-container").empty();

    question.options.forEach((option, index) => {
      const answerElement = $(
        `<div class="answer-option">${String.fromCharCode(
          65 + index
        )}. ${option}</div>`
      );

      answerElement.click(function(){
        selectAnswer(index);
      });

      $(".answers-container").append(answerElement);
    });
  }

  function selectAnswer(index){
    if($('.answer-option').hasClass("disabled")){
      return;
    }

    // disable the options
    $('.answer-option').addClass('disabled');

    userAnswers[currentQuestion] = index;
    
    const question = quizData[currentQuestion];
    const isCorrect = index === question.correct;
    if (isCorrect) {
      score++;
    }

    let feedbackText = '';
    if(isCorrect){
      feedbackText = 'Correct! '+ question.explanation;
    }else{
      feedbackText = 'Incorrect! '+ question.explanation;
    }

    $(".feedback").text(feedbackText);
    
  }

  function nextQuetion(){
    currentQuestion++;
    if(currentQuestion < quizData.length){
      $('.feedback').text("");
      loadQuestion();
    }else{
      showResults();
    }
    
  }

  function showResults(){
    $('.progress-fill').css("width","100%");
    const percentage = (score/quizData.length) * 100;
    let message = "";

    if(percentage >= 80){
      message = `You scored ${percentage}%! Excellent Work!`;
    }else if(percentage >= 60){
      message = `You scored ${percentage}%! Good Job`;
    }else if(percentage >= 40){
      message = `You scored ${percentage}%! Uzamile`;
    }else{
      message = `You scored ${percentage}%! Ai ugqomile ncese`;
    }

    $('.score-display').text(`${score}/${quizData.length}`);
    $('.score-message').text(message);

    let breakdown = "<h3>Detailed Results:</h3>";
 
    quizData.forEach((question, index)=>{

      const userAnswer = userAnswers[index];
      let isCorrect = false;
      let eachResult = "Incorrect";
      if(userAnswer === question.correct){
        isCorrect = true;
        eachResult = "Correct";
      }
      breakdown += `<div class="result-item">
      <span>Question ${index + 1}</span>
      <span>${eachResult}</span>
      </div>`;

    });

    $('.results-breakdown').html(breakdown);
    $('.quiz-content').hide();
    $('.quiz-controls').hide();
    $('.results-container').addClass("show");



    
    console.log(percentage);
  }
});
