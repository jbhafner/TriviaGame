// game object to store game information // 
var game = {
    currentIndex: 0,
    numberQuestions: 0,
    playTime: 2,
    delayTime: 5,
    answerCorrect: 0,
    answerWrong:0,
    answerNone: 0,
    correctIndex: 0,
    correctAnswer: ""
}

// Questions array of objects contains all the questions and related info //
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

// ** Start program with Start Button ** //

function startButton () {

};

// *** Functions Section *** //

console.log("questions array length is " + questions.length);    

$("#answer1").on("mouseover mouseleave", highlight);
$("#answer2").on("mouseover mouseleave", highlight);
$("#answer3").on("mouseover mouseleave", highlight);
$("#answer4").on("mouseover mouseleave", highlight);

$( "#answer1" ).on( "click", function() {
  debugClick(1);
});
$( "#answer2" ).on( "click", function() {
  debugClick(2);
});
$( "#answer3" ).on( "click", function() {
  debugClick(3);
});
$( "#answer4" ).on( "click", function() {
  debugClick(4);
});

// $("#answer1").click(debugClick(1));
//$("#answer2").on("click", debugClick(2));
// $("#answer3").on("click", debugClick);
// $("#answer4").on("click", debugClick);
// $( "#answer2" ).on( "click", function() {
//   debugClick(33);
// });

function highlight(evt) {
    $(this).toggleClass("highlighted");        
};

function debugClick(num) {
    console.log("Button Click " + num);
    console.log("correctIndex is index " + game.correctIndex);
    console.log("correctAnswer is index " + game.correctAnswer);    
};

function resultTimer() {
    setTimeout(function(){
        console.log("Execution paused for " + game.resultTime + " seconds");
    },game.resultTime * 1000);
};

// Handle on Correct Answer, Wrong Answer, No Answer //


function checkAnswer(num) {
    console.log("");
};

// initialize play loop


// Update HTML Functions //
function updateQuestion() {
    var i=game.currentIndex;
    $("#question").html(questions[i].question);
    $("#answer1").html(questions[i].choices[0]);
    $("#answer2").html(questions[i].choices[1]);
    $("#answer3").html(questions[i].choices[2]);
    $("#answer4").html(questions[i].choices[3]);
    game.correctIndex=questions[i].correctAnswer;
    game.correctAnswer=questions[i].choices[game.correctIndex];
};

function rightAnswer() {
    $("#answer2").html("You are right! " + game.correctAnswer + " is the correct answer.");
    // add flickr api image
}

function wrongAnswer() {
    $("#answer2").html("Sorry, you are wrong.")
    $("#answer3").html("The correct answer is " + game.correctAnswer + ".");
    //add flickr api image
}

function noAnswer(){
    var dispTime=game.delayTime;
    game.answerNone++;
    console.log("game.AnswerNone is " + game.answerNone);
    $("#question").html("Out of Time!");
    $("#answer1").html("The correct answer is " + game.correctAnswer);
    $("#answer2").html(" answer 2 element ");
    $("#answer3").html(" answer 3 element ");
    $("#answer4").html(" answer 4 element ");                
    setTimeout(function(){
        console.log ("dispTime display delay is " + dispTime);
            dispTime--;        
        }, 1000);
    game.currentIndex++;
    updateQuestion();
    gameTimer();
    // add flickr api image

};

console.log ("i is " + game.currentIndex);
console.log(questions[game.currentIndex].question);

function gameTimer() {
    // if (game.currentIndex <= game.numberQuestions) {    
        var maxTime = game.playTime;

        var timer=setInterval(function(){
            console.log ("maxTime is " + maxTime);
            if (maxTime===0) {
                clearInterval(timer);
                noAnswer();  
                // game.currentIndex++;
                // maxTime=game.playTime
            } 
            // updateQuestion();
            maxTime--;
            $("#timeRemaining").html("Time remaining: " + maxTime);
        }, 1000);
    // };
};

// ** Program Logic ** //

updateQuestion();  // prints first answer to the screen
gameTimer(); // starts timer running

// I think I need to have the timer function only run once when it is called.  Then check no answer, correct answer or false answer.
// I just realize the reazon that I get teh error at the end is that it keeps looping.  It does not stop at game.length
// how do I convert var timer = function() into function timer()?
// how do I handle the on.click events with regards to the timer function?