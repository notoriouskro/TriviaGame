
var intervalId;
var timeoutId;



var game = {
  currQuest: -1,
  countCorrect: 0,
  countWrong: 0,
  unAnswer: 0,
  time: 30,
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

    {
      ask: "Which player won the Hart trophy and the Conn Smythe trophy in the same season, and then repeated the feat a second time?",
      options: ["Steve Yzerman", "Ray Bourque", "Bobby Orr", "Mark Messier"],
      answer: 2,

    },
  ],

  startGame: function () {
    console.log('startGame')
    game.init();
    game.startQuestion();
  },

  init: function () {
    console.log('init');
    this.currQuest = -1;
    this.countCorrect = 0;
    this.countWrong = 0;
    this.unAnswer = 0;
    this.time = 30;


  },

  startQuestion: function () {
    console.log('startQuestion')
    game.stopQuestion();
    game.currQuest++;
    if (game.currQuest < game.questions.length) {
      game.time = 30;
      game.showQuestion();
      timeout = setTimeout(game.doTimeout, 1000 * 30);
      intervalId = setInterval(game.runClock, 1000)
    } else {
      game.stopGame();
    }

  },

  showQuestion: function () {

    console.log('showQuestion')
    $('.questionBox').html('');
    $('.buttonDiv').html('');



    newDiv = $('<div>', { id: 'question', 'class': 'question' });
    newDiv.text(this.questions[this.currQuest].ask);
    $('.questionBox').append(newDiv);

    newDiv = $('<div>', { id: 'answer', 'class': 'answer' });
    $('.questionBox').append(newDiv);




    for (var i = 0; i < this.questions[this.currQuest].options.length; i++) {

      var answerButton = $('<button>');
      answerButton.addClass('buttonAnswer');
      answerButton.attr('value', i);
      answerButton.text(this.questions[this.currQuest].options[i]);
      $('.questionBox').append(answerButton);
    }
    $('.buttonAnswer').on('click', this.answerTime)

    var newDiv = $('<div>', { id: 'time', 'class': 'time' });
    newDiv.text('Clock: ' + game.time);
    console.log(game.time);
    $('.questionBox').append(newDiv);
  },
  runClock: function () {
    game.time--;
    $('.time').text('Time Remaining: ' + game.time);
    if (game.time === 0) {
      clearInterval(intervalId);
      game.onTimeout();
    }
  },

  onTimeout: function () {
    game.unAnswer++;
    game.stopQuestion();
    game.youTimeout();
    console.log(unAnswer);
    timeoutId = setTimeout(game.startQuestion, 1000 * 3);

  },
  stopQuestion: function () {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
  },

  answerTime: function () {
    game.stopQuestion();
    var cAnswer = $(this).val();

    if (Number(cAnswer) === game.questions[game.currQuest].answer) {
      game.countCorrect++;
      console.log("you did it! " + game.countCorrect);
      game.yourRight();
      ;
    } else {
      game.countWrong++;
      game.yourWrong();

    }
  },
  yourRight: function () {
    $('.questionBox').html('');
    var div = $('<div>');
    div.html('<br><img src="images/tommy.jpg"></img></div>');
    $('.questionBox').append(div);
    timeoutId = setTimeout(game.startQuestion, 1000 * 3);

  },

  yourWrong: function () {
    $('.questionBox').html('');
    var div = $('<div>');
    div.html('<br><img src="images/wrong.jpeg"></img></div>');
    $('.questionBox').append(div);
    timeoutId = setTimeout(game.startQuestion, 1000 * 3);
  },

  youTimeout: function () {
    $('.questionBox').html(''); 
        var div = $('<div>');
        div.html('<br><img src="images/milton.jpg"></img></div>');
        $('.questionBox').append(div);
        timeoutId = setTimeout(game.startQuestion,1000*5);

  },

  stopGame: function () {
    console.log('stopGame');
    //clear p
    $('.questionBox').html('');
    //push current info
    $('.questionBox').html('<h3>Correct: ' + this.countCorrect + '</h3><br />');
    console.log("Correct: " + this.countCorrect);
    $('.questionBox').append('<h3>Incorrect: ' + this.countWrong + '</h3><br />');
    console.log("Incorrect: " + this.countWrong);
    $('.questionBox').append('<h3>Unanswered: ' + this.unAnswer + '</h3><br />');
    $('.buttonDiv').html('<button class="button">Restart!</button>');
    $(".button").on('click', game.startGame);
  }
};
$(".button").on('click', game.startGame);




