//build game board
// deply to gh-pages

// Get a click event working
//get 'x' working
// get 'o' working

// get counter working
// push moves to array

//build game board
// deply to gh-pages

/* var moves = Array(9).join(".").split('.');
 if (count % 2) {
  moves[this.id]='x';
}   */

$(document).ready(function() {


    var $gameCells = $('.squaresStyle');

    //get array and counter
    var moves = ["", "", "", "", "", "", "", "", ""];
    var counter = 0;
    var gameCountX = 0;
    var gameCountO = 0;
    var turn = 'x';


// winning move ["x", "o", "", "x", "", "", "x", "o", ""]
     $('.resetGame').on('click', function(){
            $($gameCells).html("");
            counter = 0;
            turn = 'x';
            moves = ["", "", "", "", "", "", "", "", ""]
            console.log(counter, turn, moves);
            $('#winnerIs').html("Winner is...");
            startGame();


    })


//this section starts the game, changes x to o


    $($gameCells).one('click', function startGame() {


        $(this).html(turn);
        moves[this.id] = turn;

        counter++;

        if (counter % 2 === 0) {
            turn = 'x';
        } else {
            turn = 'o';
        }
        // console.log(moves, counter,turn);
    });



    $($gameCells).one('click', function findWinner(){

    //test if winner found
    if (moves[0] == 'x' && moves[1] =='x' && moves[2] == 'x' ||
        moves[3] == 'x' && moves[4] =='x' && moves[5] == 'x' ||
        moves[6] == 'x' && moves[7] =='x' && moves[8] == 'x' ||
        moves[0] == 'x' && moves[3] =='x' && moves[6] == 'x' ||
        moves[1] == 'x' && moves[4] =='x' && moves[7] == 'x' ||
        moves[2] == 'x' && moves[5] =='x' && moves[8] == 'x' ||
        moves[0] == 'x' && moves[4] =='x' && moves[8] == 'x' ||
        moves[2] == 'x' && moves[4] =='x' && moves[6] == 'x' ) {
          $('#winnerIs').html("Winner is X!"), $($gameCells).off();
          gameCountX++;
          console.log(gameCountX);
      }
    else if(moves[0] == 'o' && moves[1] =='o' && moves[2] == 'o' ||
            moves[3] == 'o' && moves[4] =='o' && moves[5] == 'o' ||
            moves[6] == 'o' && moves[7] =='o' && moves[8] == 'o' ||
            moves[0] == 'o' && moves[3] =='o' && moves[6] == 'o' ||
            moves[1] == 'o' && moves[4] =='o' && moves[7] == 'o' ||
            moves[2] == 'o' && moves[5] =='o' && moves[8] == 'o' ||
            moves[0] == 'o' && moves[4] =='o' && moves[8] == 'o' ||
            moves[2] == 'o' && moves[4] =='o' && moves[6] == 'o' ) {
          $('#winnerIs').html("Winner is O!"), $($gameCells).off();
          gameCountO++;
          console.log(gameCountO);
      } else {
            if (counter == 9){
              $('#winnerIs').html("Draw!");
            }
         //
      }


     });



      //  });



});
