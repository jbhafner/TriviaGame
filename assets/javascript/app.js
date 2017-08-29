
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

// Functions Section //
$(document).ready(function(){
    $(function(){
        // $("#answer1").hover(highlight, highlight);
        $("#answer1").on("mouseover mouseleave", highlight, highlight);
    });
    console.log("ready!");
});


