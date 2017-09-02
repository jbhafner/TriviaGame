// game object to store game information // 
var game = {
    currentIndex: 0,
    numberQuestions: 0,
    playTime: 5,
    delayTime: 5,
    answerCorrect: 0,
    answerWrong: 0,
    answerNone: 0,
    correctIndex: 0,
    correctAnswer: ""
}

// declare my timer function
var timer;
var i=game.currentIndex;

// questions array of objects contains all the questions and related info //
var questions = [{
    question: "What is the capital city of Japan?",
    choices: ["Beijing", "Tokyo", "Shanghai", "Kyoto"],
    correctAnswer: 1,
    image: "assets/images/JapanFlag.jpg"
}, {
    question: "What is the capital city of Ukraine?",
    choices: ["Donetsk", "Sevastopol", "Kiev", "Moscow"],
    correctAnswer: 2,
    image: "assets/images/UkraineFlag.jpg"
}, {
    question: "What is the capital city of the Democratic Republic of Congo?",
    choices: ["Kisangani", "Kinshasa", "Bangui", "Brazzaville"],
    correctAnswer: 1,
    image: "assets/images/DRCongoFlag.jpg"
}, {
    question: "What is the capital city of Uruguay?",
    choices: ["Montevideo", "Buenos Aires", "Santa Maria", "Tacuarembo"],
    correctAnswer: 0,
    image: "assets/images/UruguayFlag.jpg"    
}, {
    question: "What is the capital city of Cambodia?",
    choices: ["Saigon", "Bangkok", "Siem Reap", "Phnom Phen"],
    correctAnswer: 3,
    image: "assets/images/CambodiaFlag.jpg"       
}, {
    question: "What is the capital city of Canada?",
    choices: ["Montreal", "Vancouver", "Ottawa", "Toronto"],
    correctAnswer: 2,
    image: "assets/images/CanadaFlag.jpg"
}, {
    question: "What is the capital city of Andorra?",
    choices: ["Madrid", "Andorra la Vella", "Toulouse", "Barcelona"],
    correctAnswer: 1,
    image: "assets/images/AndorraFlag.jpg"
}, {
    question: "What is the capital city of Tanzania?",
    choices: ["Dodoma", "Zanzibar", "Dar es Salaam", "Nairobi"],
    correctAnswer: 0,
    image: "assets/images/TanzaniaFlag.jpg"    
}, {
    question: "What is the capital city of New Zealand?",
    choices: ["Sydney", "Auckland", "Christchurch", "Wellington"],
    correctAnswer: 3,
    image: "assets/images/NZFlag.jpg"       
}];


// *** Functions Section *** //

console.log("questions array length is " + questions.length);    

// Mouse hover over events //

$("#answer1").on("mouseover mouseleave", highlight);
$("#answer2").on("mouseover mouseleave", highlight);
$("#answer3").on("mouseover mouseleave", highlight);
$("#answer4").on("mouseover mouseleave", highlight);

// Highlight function //

function highlight(evt) {
    $(this).toggleClass("highlighted");        
};

// Answer on click events //

$( "#answer1" ).on( "click", function() {
  clearInterval(timer);
  debugClick(1);
  if (game.correctIndex===0){
    rightAnswer();
  } else {
    wrongAnswer();
  }
});
$( "#answer2" ).on( "click", function() {  
  clearInterval(timer);  
  debugClick(2);
    if (game.correctIndex===1){
    rightAnswer();
  } else {
    wrongAnswer();
  }
});
$( "#answer3" ).on( "click", function() { 
  clearInterval(timer);      
  debugClick(3);
    if (game.correctIndex===2){
    rightAnswer();
  } else {
    wrongAnswer();
  }
});
$( "#answer4" ).on( "click", function() {
  clearInterval(timer);      
  debugClick(4);
    if (game.correctIndex===3){
    rightAnswer();
  } else {
    wrongAnswer();
  }
});

// debug function //

function debugClick(num) {
    console.log("Button Click " + num + " // correctIndex is index " 
        + game.correctIndex + " // correctAnswer is index " + game.correctAnswer + " // current Index is index " + game.currentIndex);
};

// startButton Function for first screen //

function startButton () {
    $("#timeRemaining").html(" ");               
    $("#question").html("Start!");
    $("#answer1").html(" ");
    $("#answer2").html(" ");
    $("#answer3").html(" ");
    $("#answer4").html(" ");
    $( "#question" ).on( "click", function() {
        updateQuestion();  // prints first answer to the screen
        gameTimer(); // starts timer running
    });                
};

// updateQuestion updates the screen with the current question //

function updateQuestion() {
    i=game.currentIndex;

    $("#question").html(questions[i].question);
    $("#answer1").html(questions[i].choices[0]);
    $("#answer2").html(questions[i].choices[1]);
    $("#answer3").html(questions[i].choices[2]);
    $("#answer4").html(questions[i].choices[3]);
    game.correctIndex=questions[i].correctAnswer;
    game.correctAnswer=questions[i].choices[game.correctIndex];
    console.log ("var i = " + i + " // currentIndex = " + game.currentIndex + " // quest index is " + questions[i].correctAnswer + 
    " // question is " + questions[i].choices[game.correctIndex]);
};

// These three function handle rightAnswer, wrongAnswer, and noAnswer

function rightAnswer() {
    game.answerCorrect++;
    $("#answer1").html(" ");
    $("#answer2").html("You are right! " + game.correctAnswer + " is the correct answer.");
    $("#answer3").html(" ");
    $("#answer4").html(" ");   
    // add flickr api image
    delay();
}

function wrongAnswer() {
    game.answerWrong++;
    $("#answer1").html(" ");
    $("#answer2").html("Sorry, you are wrong.")
    $("#answer3").html("The correct answer is " + game.correctAnswer + ".");
    $("#answer4").html(" "); 
    //add flickr api image
    delay();
}

function noAnswer(){
    game.answerNone++;
    // console.log("game.AnswerNone is " + game.answerNone);
    $("#question").html("Out of Time!");
    $("#answer1").html("The correct answer is " + game.correctAnswer);
    $("#answer2").html(" ");
    $("#answer3").html(" ");
    $("#answer4").html(" ");               
    delay();
    // add flickr api image
};

// This function is the delay after displaying the results of the answer selection //

function delay() {
    console.log("current index is " + game.currentIndex + " // questions index length is " + questions.length);
    if (game.currentIndex+1===questions.length) {
        gameOver();
    };
    var dispTime=game.delayTime;
    game.currentIndex++; 
    setTimeout(function(){
    // console.log ("dispTime display delay is " + dispTime);
        updateQuestion();
        gameTimer();       
    }, 1000 * game.delayTime);
};

// gameOver and resetGame are meant to reset the game once the game is over //

function gameOver() {
    $("#question").html("Game Over!");
    $("#answer1").html("Correct Answers: " + game.answerCorrect);
    $("#answer2").html("Wrong Answers: " + game.answerWrong);
    $("#answer3").html("No response: " + game.answerNone);
    $("#answer4").html(" ");
    setTimeout(function(){
        resetGame();       
        startButton();
    }, 1000 * game.delayTime);     
};

function resetGame() {
    game.currentIndex= 0;
    game.numberQuestions= 0;
    game.playTime = 5;
    game.delayTime= 5;
    game.answerCorrect= 0;
    game.answerWrong= 0;
    game.answerNone= 0;
    game.correctIndex= 0;
    game.correctAnswer = "";    
}

console.log ("i is " + game.currentIndex + " // question is " + questions[game.currentIndex].question);

// gameTimer function is meant to loop trough the display of the questions //

function gameTimer() {
    var maxTime = game.playTime;

    var timer=setInterval(function(){
        console.log ("maxTime is " + maxTime + " // timer before loop is " + timer);
        if (maxTime===0) {
            console.log("I'm in");
            clearInterval(timer);
            noAnswer();  
        }
        
        // *** Note: i tried putting the on click functions inside the timer setInterval loop so I could clear the timer,
        //     but then it kept running the click function multiple times

        // $( "#answer1" ).on( "click", function() {
        //     debugClick(1);
        //     clearInterval(timer);
        //     if (game.correctIndex===0){
        //         rightAnswer();
        //     } else {
        //         wrongAnswer();
        //     }
        // });

        // $( "#answer2" ).on( "click", function() {
        //     clearInterval(timer);
        //     debugClick(2);
        //     if (game.correctIndex===1){
        //         rightAnswer();
        //     } else {
        //         wrongAnswer();
        //     }
        // });

        // $( "#answer3" ).on( "click", function() {
        //     debugClick(3);
        //     clearInterval(timer);
        //     if (game.correctIndex===2){
        //         rightAnswer();
        //     } else {
        //         wrongAnswer();
        //     }
        // });

        // $( "#answer4" ).on( "click", function() {
        //   clearInterval(timer);
        //   debugClick(4);
        //     if (game.correctIndex===3){
        //     rightAnswer();
        //   } else {
        //     wrongAnswer();
        //   }
        // }); 
        
        // Displays the time remaining on the screen
        $("#timeRemaining").html("Time remaining: " + maxTime);
        maxTime--;
    }, 1000);
    // return timer;
    console.log ("Current Index = " + game.currentIndex + 
    " // No Answer = " + game.answerNone + " // Correct Answer = " 
    + game.answerCorrect + " // Wrong Answer = " + game.answerWrong);
};

// ** Program Logic ** //

startButton(); // brings up start screen and starts program running

// I think I need to have the timer function only run once when it is called.  Then check no answer, correct answer or false answer.
// I just realize the reazon that I get teh error at the end is that it keeps looping.  It does not stop at game.length
// how do I convert var timer = function() into function timer()?
// how do I handle the on.click events with regards to the timer function?