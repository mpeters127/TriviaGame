$(document).ready(function () {

  //hides the quiz
  $('#quiz').hide();
  //on click begins the quiz function
  $('#start').on('click', function () {
    quiz.begin()
  })

});

//JSON object
let quiz = {
  timeRemaining: 0,
  correct: 0,
  incorrect: 0,
  timerId: null,
  answers: {
    question1: true,
    question2: false,
    question3: false,
    question4: true
  },
  //begin function that starts on click
  begin: function () {
    //30 second timer
    quiz.timeRemaining = 30;
    quiz.correct = 0;
    quiz.incorrect = 0;
    //makes sure that results are hidden
    $('#results').hide();
    for (let i = 1; i < 5; i++) {
      let name = "question" + i;
      let element = document.getElementById(name + "true");
      element.checked = false;
      let element2 = document.getElementById(name + "false");
      element2.checked = false;
    }
    //shows quiz when begin is ran
    $('#quiz').show();
    quiz.timerId = setInterval(function () {
      //shows time remaining
      document.getElementById('timer').innerText = quiz.timeRemaining;
      //ends the quiz when the time hits 0
      if (quiz.timeRemaining == 0) {
        quiz.end();
      }
      //runs the timer
      else {
        quiz.timeRemaining--;
      }
    },
      //decreases time by increments of one second
      1000
    );
  },
  //end of quiz
  end: function () {
    //hides quiz
    $('#quiz').hide();
    //clears timer
    clearInterval(quiz.timerId);
    for (let i = 1; i < 5; i++) {
      let name = "question" + i;
      let correctAnswer = quiz.answers[name];
      let currentAnswer = name + correctAnswer;
      let element = document.getElementById(currentAnswer);
      if (element.checked) {
        quiz.correct++
      }
      else {
        quiz.incorrect++
      }
    }
    document.getElementById('correct').innerText = "Correct: " + quiz.correct
    document.getElementById('incorrect').innerText = "Incorrect: " + quiz.incorrect
    $('#results').show();
    console.log('done')

  }
}