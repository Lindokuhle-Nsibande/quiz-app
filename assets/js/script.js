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

  let question = quizData[currentQuestion];

  $('.question-number').text(`Question ${currentQuestion+1} of ${quizData.length}`);

  $('.question-text').text(question.question);

  $('.answers-container').empty();

  question.options.forEach((option, index) => {
    const answerElement = $(`<div class="answer-option">${String.fromCharCode(65 + index)}. ${option}</div>`);

    $('.answers-container').append(answerElement);
  });

  // $('.feedback').text(question.explanation).hide();
});




