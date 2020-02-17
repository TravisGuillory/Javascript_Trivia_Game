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
    constructor(questions){
        this.score = 0
        this.roundNumber = 0;
        this.questions = questions;
        this.totalRounds = questions.length;

    }

    
    
    // Method to determine the current round
        /* get currentRound(){
            return this.calcCurrentRound();
        }

            calcCurrentRound(){
            return this.roundNumber;
        }
 */

        static curentRound(){
            return this.roundNumber;
        }
    // method to load the current question into the game play HTML
        setRound(){
            var round = new Round(questions[this.roundNumber], this.options, this.answer );

        }

    //method to determine if game is over
        
        // getter
        get isGameOver(){
            return this.calcIsGameOver();
        }

        //setter
        calcIsGameOver(){
            return this.roundNumber === this.totalRounds;
        }
        
        //method to determine if user selection is correct for the reound

        get isSelectionCorrect(){
            return this.calcSelectionCorrect();
        }

        
       
    
    
    //Method to determine if player choice is correct
        isChoiceCorrect(choice){
            if(this.questions[currentRound].answer === choice){
                this.score++;
            }
            this.currentRound++;
    }




}




// this class loads a new question options and answer to be placed onto the game card
class Round {
    constructor(question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
        
    }

        


}




document.addEventListener("DOMContentLoaded", function(event){

$("#startButton").click(() => {
    alert("Start Button was clicked");
    
    var game = new Game(questions);
    
    alert("Game was created. Number of rounds to play = " + game.totalRounds);
    alert(game.currentRound);
    alert(game.isGameOver);
    
    

    

}); 

function loadQuestion(){

}


function showCurrentScore(){
    // do work 
}


function showFinalScore(){
    //do some work

}










}); // end of DOM event loader






