
var images = [];
var correctAnswer = 0;
var wrongAnswer = 0;

$("button").click(function(){

$(".button").hide();

questionOne();
});

    function questionOne() {
    var question = ["How many Stanley Cups does Sidney Crosby have?"];
    var answer = ["3", "5", "1", "4"];
    var rightAnswer = [answer[0]]
    $("#question").replaceWith("<h3>" + question + "</h3>");
    $("#answerOne").replaceWith('<input type="radio" id="myRadio"></input> ' + answer[0]);
    $("#answerTwo").replaceWith('<input type="radio" id="myRadio"></input> ' + answer[1]);
    $("#answerThree").replaceWith('<input type="radio" id="myRadio"></input> ' + answer[2]);
    $("#answerFour").replaceWith('<input type="radio" id="myRadio"></input> ' + answer[3]);
    function radioButton() {
      var x = document.getElementById("myRadio");
      x.checked = true;
    }
    // if (checked = true){
    //   questionTwo();
  };
    
    function questionTwo() {
      var question = ["Who has the NHL record for most goals in their career?"];
      var answer = ["Mario Lemieux", "Gordie Howe", "Wayne Gretzky", "Gordon Bombay"];
      var rightAnswer = [answer[2]]
      $("#question").replaceWith("<h3>" + question + "</h3>");
      $("#answerOne").replaceWith('<input type="radio" id="myRadio"></input> ' + answer[0]);
      $("#answerTwo").replaceWith('<input type="radio" id="myRadio"></input> ' + answer[1]);
      $("#answerThree").replaceWith('<input type="radio" id="myRadio"></input> ' + answer[2]);
      $("#answerFour").replaceWith('<input type="radio" id="myRadio"></input> ' + answer[3]);
      function radioButton() {
        var x = document.getElementById("myRadio");
        x.checked = true;
      }
    };

    //     function questionThree() {
    //       var question = ["Which team has won the most Stanley Cups?"];
    //       var answer = ["Toronto Maple Leafs", "Pittsburgh Penguins", "Detroit Red Wings", "Montreal Canadiens"];
    //       var rightAnswer = [anser[3]]
    //       $("#question").replaceWith("<h3>" + question + "</h3>");
    //       $("#answerOne").replaceWith('<input type="radio" id="myRadio"></input> ' + answer[0]);
    //       $("#answerTwo").replaceWith('<input type="radio" id="myRadio"></input> ' + answer[1]);
    //       $("#answerThree").replaceWith('<input type="radio" id="myRadio"></input> ' + answer[2]);
    //       $("#answerFour").replaceWith('<input type="radio" id="myRadio"></input> ' + answer[3]);
    //       function radioButton() {
    //         var x = document.getElementById("myRadio");
    //         x.checked = true;
    //       }
    //     };



// if (checked = true) {
//   $("#myRadio").click(questionTwo());

// }


// $("#myRadio").click(questionThree());
// $("#myRadio").click(questionFour());








  //onClick Game Starts

  //First Question appears

  //onClick automatically flips to next question, else timeout after a min
