/* Global Variables */

// create questions here
const questions = [
    
    {
        question: "What is 1+1?", 
        options: {
            a: "1",
            b: "2",
            c: "3"
        },
        answer: "2"
    },
    {
        question: "What is 2 + 2",
        options: {
            a: "2",
            b: "3",
            c: "4"
        },
        answer: "4"
    },
    {
        question: "what is 3 + 3?",
        options: {
            a: "6",
            b: "5",
            c: "7"
        },
        answer: "6"
        
    }
];
// this class is used to build the game  
class Game{
    constructor(questions, numRounds){
        this.score = 0
        this.questions = questions;
        this.numRounds = numRounds;
    }
}




// this class loads a new question options and answer to be placed onto the game card
class Round {
    constructor(question, options, answer, currentRound) {
        this.question = question;
        this.options = options;
        this.answer = answer;
        this.currentRound = currentRound;
    }
}




document.addEventListener("DOMContentLoaded", function(event){

$("#startButton").click(() => {
    alert("Start Button was clicked");
    
    var game = new Game(questions, questions.length);
    
    alert("Game was created. Number of rounds to play = " + game.numRounds);

    var currentRound = new Round()

}); 



function isOver(){
    // do work 
}


function showScores(){
    //do some work

}










}); // end of DOM event loader






