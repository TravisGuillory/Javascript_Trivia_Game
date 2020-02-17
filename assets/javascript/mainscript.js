/* Global Variables */


// set up infor for each round. Question +  Options + Correct Answer
var rounds = [
    new Round("Wiat is 1+1?", ["1", "2", "3"], "2"),
    new Round("What is 2+2?", ["2", "3", "4"], "4"),
    new Round("What is 3+3?", ["6", "7", "8"], "6")
]
// this class is used to build the game  
function Game(rounds){
        this.score = 0
        this.roundNumber = 0;
        this.rounds = rounds;
        this.time = 30;

    }

    Game.prototype.getCurrentRound = function() {
        return this.roundNumber;
    }
    
    Game.prototype.isGameOver = function(){
        return(this.roundnumber === this.rounds.length);
    }
    
    Game.prototype.playRound = function(selection) {
        if (questions[roundNumber].answer === selection){
            this.score++;
        }
        this.currentRound++

    }
    

    function Round(question, options, answer) {
        this.question = question;
        this.options= options;
        this.answer = answer
    }

    Round.prototype.isCorrect = function(selection){
        return this.answer === selection;
    }






    

        
       
    
    
    














document.addEventListener("DOMContentLoaded", function(event){

$("#startButton").click(() => {
    alert("Start Button was clicked");
    
    var game = new Game(questions);
    
    alert("Game was created. Number of rounds to play = " + game.totalRounds);
    alert(game.currentRound);
    game.playRound;

    
    

    

}); 




function showCurrentScore(){
    // do work 
}


function gameOver(score, totalQuestions, time){
    //do some work

}










}); // end of DOM event loader






