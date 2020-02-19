
/* Building the game using object oriented classes. 1 Game class as a framework for the game. Questions class is used to load guestions into the game object. 
Originally tried using standard arrays for the questions but was inconvenient for iterating through the multiple choice array of options */
class Game {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.index = 0;
    }

    // method to determine the round number
    getIndex = (() =>{
        return this.question[this.index];
    });
    
    //method to determine if the user selection is correct.
    gradeSelection = ((selection) => {
        
        if(this.questions[this.index].answer === selection){
            this.score++
            
        }
        this.index++;
        
    }); 

// method to determine if the last round is reached and the gema is over. 
    isGameOver = (() => {
        
        return this.index === this.questions.length;
        
    }); 
}

// Questions class used to strucure question object with a string question sentence, array of options, string answer.
class Question {
    constructor(sentence, options, answer) {
        this.sentence = sentence;
        this.options = options;
        this.answer = answer;
    }
}


//Questions
var questions =[
    new Question("What is 1+1?", ["2", "3", "9", "4", "5" ], "2"),
    new Question("What is 2+2?", ["4", "5", "6", "7", "8"], "4"),
    new Question("What is 3+3?", ["4", "5", "6", "7", "8"], "6"),
    new Question("What is 4+4?", ["4", "5", "6", "7", "8"], "8")
];


//listener to make sure dom is loaded prior to firing the game code. 
document.addEventListener("DOMContentLoaded", function(event){

    $("#startButton").click(() =>{
        // initiate an instance of the game object. (Game is the blue print and game is the house)
        var game = new Game(questions);

        $(".game-time").css("display", "flex"); // unhide the card containing the game html
        $(".pre-game").css("display", "none"); // hide the pre-game info. 
        playRound();


        function playRound(){
            if(game.isGameOver()){
                finalScore();
            } else  // if game is not over, load up a round
            {
                //populate current question to the html
                $("#currentQuestion").text(game.questions[game.index].sentence);
                
                // empty the options game area of any prior option buttons
                $("#optionsList").empty(); 
                //create button elements for each option 
                game.questions[game.index].options.forEach((element, index) =>{
                    $("#optionsList").append($("<li>")
                        .attr("id", "option" + index,)
                        .addClass("btn btn-info btn-lg m-1 options")
                        .text(element)
                        .click(gradeSelection)
                       
                    )
                });        
                
                updateGameScore();
            }
        }
    
    function gradeSelection(event){
        
        game.gradeSelection(event.target.innerText);
        playRound();
        
    }

    // function to update score after each round
    function updateGameScore(){
        $("#currentScore").text("Score: " + game.score );
        $("#rounds").text((parseInt(game.index) +1)  + " of " + questions.length);
    }
    
    
    //function to display final scores
    function finalScore(){
        $(".game-time").css("display", "none");
        $(".post-game").css("display", "flex");
        
        var score = (game.score/questions.length) *100
        $("#playerScore").text("You answered "+game.score + " of " + questions.length + " questions correct." )
        $("#scoreInfo").text("Your JavaScript score is " + score + "%");

        
    
    }


    // function to restart game.

    $("#replayButton").click(() => {
        location.reload();
    });


});








//function to update score to the game area aftereach round






}); // end of Dom loaded listener


