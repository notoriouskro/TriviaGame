
var images = [];
var correctAnswer = 0;
var wrongAnswer = 0;
var unAnswer = 0;
var intervalId;



var game = {
  currQuest: 0,
  countCorrect: 0,
  countWrong: 0,
  unAnswer: 0,
  time: 0,

  questions: [
    {
      ask: ["How many Stanley Cups does Sidney Crosby have?"],
      options: ["3", "5", "1", "4"],
      answer: 0
    },

    {
      ask: ["Who has the NHL record for most goals in their career?"],
      options: ["Mario Lemieux", "Gordie Howe", "Wayne Gretzky", "Gordon Bombay"],
      answer: 2
    },

    {
      ask: "Which team has won the most Stanley Cups?",
      options: ["Toronto Maple Leafs", "Pittsburgh Penguins", "Detroit Red Wings", "Montreal Canadiens"],
      answer: 3,

    },
  ],

  init: function() {
  this.currQuest = 0;
  countCorrect = 0;
  countWrong = 0;
  unAnswer = 0;
  time = 30;
  },

  startQuestion: function () {
    intervalId = setInterval(questionClock.counter, 1000);
  },
  counter: function () {
    game.time--;
  },
  showQuestion: function () {
    console.log("Question: " + this.questions[this.currQuest].ask);
    for (var i = 0; i < this.questions[this.currQuest].options.length; i++) {
      console.log("Option: " + this.questions[this.currQuest].options[i]);
    }
    console.log(this.questions[this.currQuest].options[this.questions[this.currQuest].answer]);
  },

  startGame: function () {
    game.init();
    game.showQuestion();

    console.log(init());

  },

  stopQuestion: function () {

  }

};
$(".button").on('click', game.startGame) 




// $("#question").replaceWith("<h3>" + question + "</h3>");
// $("#answerOne").replaceWith('<input type="radio" id="myRadio" name="answerButton"></input> ' + answer[0]);
// $("#answerTwo").replaceWith('<input type="radio" id="myRadio" name="answerButton"></input> ' + answer[1]);
// $("#answerThree").replaceWith('<input type="radio" id="myRadio" name="answerButton"></input> ' + answer[2]);
// $("#answerFour").replaceWith('<input type="radio" id="myRadio" name="answerButton"></input> ' + answer[3]);
// function radioButton() {
//   var x = document.getElementById("myRadio");
//   x.checked = true;







  //onClick Game Starts

  //First Question appears

  //onClick automatically flips to next question, else timeout after a min
