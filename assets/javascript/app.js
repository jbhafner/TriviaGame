var game = {
    count: 30,
    win: 0,
    loss: 0,
    counter: 5
}


// Questions Object contains all the questions and related info //
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

console.log(questions[1].question);
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
};

//initialize play loop
var length = questions.length;
var i = 0;
var maxTime = 5;
console.log("test - length is " + length);

// Update HTML Functions //
function updateQuestion() {
    $("#question").html(questions[i].question);
    $("#answer1").html(questions[i].choices[0]);
    $("#answer2").html(questions[i].choices[1]);
    $("#answer3").html(questions[i].choices[2]);
    $("#answer4").html(questions[i].choices[3]);        
};

updateQuestion();   

console.log ("i is " + i);
console.log(questions[i].question);

var timer=setInterval(function(){

    if (maxTime===0) {  
    // only run after 30 secs
        i++;
        maxTime=5;
    } // where does this go???

    updateQuestion();
    maxTime--;


    $("#timeRemaining").html("Time remaining: " + maxTime);

}, 1000);

// *** Main Program Logic *** //

// updateQuestion();


