// game object to store game information // 
const GAME = {
    currentIndex: 0,
    answerCorrect: 0,
    answerWrong: 0,
    answerNone: 0,
    correctIndex: 0,
    correctAnswer: ""
}

const GAMETIMING = {
    PLAYTIME: 15,
    DELAYTIME: 10
};

// declare my timer function
var timer;

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

$(".answer").on("mouseover mouseleave", highlight);

// Highlight function //

function highlight(evt) {
    $(this).toggleClass("highlighted");        
};

// Answer on click events //

$( ".answer" ).on( "click", function() {
  let id = $(this).attr('id'); // e.g. "answer1"
  id = parseInt(id.replace("answer",''));
  clearInterval(timer);
  $("#timeRemaining").hide();
  debugClick(id);
  if (GAME.correctIndex===id-1){
    rightAnswer();
  } else {
    wrongAnswer();
  }
});

// debug function //

function debugClick(num) {
    console.log("Button Click " + num + " // correctIndex is index " 
        + GAME.correctIndex + " // correctAnswer is index " + GAME.correctAnswer + " // current Index is index " + GAME.currentIndex);
};

// startButton Function for first screen //

function startButton () {
    $("#timeRemaining").hide();               
    $("#question").html("Start!");
    $(".answer").html(" ");
    $( "#question" ).on( "click", function() {
        updateQuestion();  // prints first answer to the screen
        gameTimer(); // starts timer running
    });                
};

// updateQuestion updates the screen with the current question //

function updateQuestion() {
    let i=GAME.currentIndex;

    $("#timeRemaining").show().html(" ");
    $("#question").html(questions[i].question);
    $("#answer1").html(questions[i].choices[0]);
    $("#answer2").html(questions[i].choices[1]);
    $("#answer3").html(questions[i].choices[2]);
    $("#answer4").html(questions[i].choices[3]);
    GAME.correctIndex=questions[i].correctAnswer;
    GAME.correctAnswer=questions[i].choices[GAME.correctIndex];
    console.log ("var i = " + i + " // currentIndex = " + GAME.currentIndex + " // quest index is " + questions[i].correctAnswer + 
    " // question is " + questions[i].choices[GAME.correctIndex]);
};

// These three function handle rightAnswer, wrongAnswer, and noAnswer

function rightAnswer() {
    GAME.answerCorrect++;
    $("#answer1").html(" ");
    $("#answer2").html("You are right! " + GAME.correctAnswer + " is the correct answer.");
    $("#answer3").html(" ");
    $("#answer4").html(" ");   
    // add flickr api image
    delay();
}

function wrongAnswer() {
    GAME.answerWrong++;
    $("#answer1").html(" ");
    $("#answer2").html("Sorry, you are wrong.")
    $("#answer3").html("The correct answer is " + GAME.correctAnswer + ".");
    $("#answer4").html(" "); 
    //add flickr api image
    delay();
}

function noAnswer(){
    GAME.answerNone++;
    // console.log("GAME.AnswerNone is " + GAME.answerNone);
    $("#question").html("Out of Time!");
    $("#answer1").html("The correct answer is " + GAME.correctAnswer);
    $("#answer2").html(" ");
    $("#answer3").html(" ");
    $("#answer4").html(" ");               
    delay();
    // add flickr api image
};

// This function is the delay after displaying the results of the answer selection //

function delay() {
    console.log("current index is " + GAME.currentIndex + " // questions index length is " + questions.length);
    if (GAME.currentIndex+1===questions.length) {
        gameOver();
    };
    var dispTime=GAMETIMING.DELAYTIME;
    GAME.currentIndex++; 
    setTimeout(function(){
    // console.log ("dispTime display delay is " + dispTime);
        updateQuestion();
        gameTimer();       
    }, 1000 * GAMETIMING.DELAYTIME);
};

// gameOver and resetGame are meant to reset the game once the game is over //

function gameOver() {
    $("#question").html("Game Over!");
    $("#answer1").html("Correct Answers: " + GAME.answerCorrect);
    $("#answer2").html("Wrong Answers: " + GAME.answerWrong);
    $("#answer3").html("No response: " + GAME.answerNone);
    $("#answer4").html(" ");
    setTimeout(function(){
        resetGame();       
        startButton();
    }, 1000 * GAMETIMING.DELAYTIME);     
};

// Reset all Game variables
function resetGame() {
    GAME.currentIndex= 0;
    GAME.answerCorrect= 0;
    GAME.answerWrong= 0;
    GAME.answerNone= 0;
    GAME.correctIndex= 0;
    GAME.correctAnswer = "";    
}

console.log ("i is " + GAME.currentIndex + " // question is " + questions[GAME.currentIndex].question);

// gameTimer function is meant to loop trough the display of the questions //

function gameTimer() {
    var maxTime = GAMETIMING.PLAYTIME;

    timer=setInterval(function(){
        console.log ("maxTime is " + maxTime + " // timer before loop is " + timer);
        if (maxTime===0) {
            console.log("I'm in");
            clearInterval(timer);
            noAnswer();  
        }
                
        // Displays the time remaining on the screen
        $("#timeRemaining").show().html("Time remaining: " + maxTime);
        maxTime--;
    }, 1000);
    // return timer;
    console.log ("Current Index = " + GAME.currentIndex + 
    " // No Answer = " + GAME.answerNone + " // Correct Answer = " 
    + GAME.answerCorrect + " // Wrong Answer = " + GAME.answerWrong);
};

// ** Program Logic ** //

startButton(); // brings up start screen and starts program running

