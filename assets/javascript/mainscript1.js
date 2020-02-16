// global variables to hold game area containers and score

const questionsContainer = document.getElementById("questions");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const startButton = document.getElementById("startButton");
// global variable for player's score and total number of questions
var playerScore = 0;
const totalQuestions = questions.length;

// Game Questions
const questions = [
    {
        question: "What is 1 + 2?", 
        answers: {
            a: "2",
            b: "4",
            c: "3"
        },
        correctAnswer: "c" 
    },

    {
        question: "What is 2 + 2?",
        answers: {
            a: "4",
            b: "5",
            c: "6"
        },
        correctAnswer: "a"
    },
    {
        question: "What is 3 + 3?",
        answers:{
            a: "4",
            b: "5",
            c: "6"
        },
        correctAnswer: "c"
    }

];

$(document).ready(() => {

// build the game area

function buildGame(questions, questionsContainer, resultsContainer, submitButton){
    // do something
}

//Function to display current question
function currentQuestion(questions, questionsContainer){
    // do something

}
// Function to sow results
function showResults(questions, questionsContainer, resultsContainer){
    // do something
}

// Need a game timer 
function gameTimer(){
    // do something
    }






});
