
class Game {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.index = 0;
    }

    
    getIndex = (() =>{
        return this.question[this.index];
    });
    
    gradeSelection = ((selection) => {
        
        if(this.questions[this.index].answer === selection){
            this.score++
            
        }
        this.index++;
        
    }); 

    isGameOver = (() => {
        
        return this.index === this.questions.length;
        
    }); 
}

// need to  send questions as an object. This allows referencing the question parts by name.
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



document.addEventListener("DOMContentLoaded", function(event){

    $("#startButton").click(() =>{
        var game = new Game(questions);
        
    
     //start the game
    

        $(".game-time").css("display", "flex");
        $(".pre-game").css("display", "none");
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


