var startButtonEl = document.getElementById("btn-start");
var timerEl = document.getElementById("timer");
var hiddenQuestionEl = document.getElementById("hidden");
var userInputBox = document.getElementById("user-input-box");
var userInputName = document.getElementById("name");
var questionText = document.querySelector(".question-text");
var cardBody = document.querySelector("#card-body");
var currentQuestion = 0; //because our array starts at 0
var currentAnswer = ""; //our answer is a string
var secondsLeft;
var quizTimer;
var formEl = document.getElementById("form");
var listHighScores = [];

var questions = [
  {
    query: "What is the purpose of console.log?",
    answers: [
      "Debugging",
      "Javascript",
      "Creating a repo",
      "None of the above",
    ],
    correctAnswer: "Debugging",
  },
  {
    query: "What does CSS stand for?",
    answers: [
      "Cascading Style Sheets",
      "Cascading Style Shortcuts",
      "Class Style Selectors",
      "Cool Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    query:
      "Where is the preferred place in the HTML file to link our external CSS file?",
    answers: [
      "Inside the head element",
      "The main tag",
      "In a footer element",
      "Before the closing body tag",
    ],
    correctAnswer: "Inside the head element",
  },
  {
    query: "What is an array used for?",
    answers: [
      "To store multiple values",
      "To store CSS",
      "To store one value",
      "All of the above",
    ],
    correctAnswer: "To store multiple values",
  },
];
