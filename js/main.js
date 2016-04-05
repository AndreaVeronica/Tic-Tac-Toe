
$(document).ready(function(){


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
                  moves = ["", "", "", "", "", "", "", "", ""];
                  //console.log(counter, turn, moves);
                  $('#winnerIs').html("Winner is...");
                  startGame();
          })

    //this section starts the game, changes x to o
       startGame();


      /*function removeAllListerners() {
        $($gameCells).off();
      } */

     function startGame(){
            $($gameCells).one('click', function(){
            $(this).html(turn);
            moves[this.id] = turn;

            counter++;

            if (counter % 2 === 0) {
                turn = 'x';
            } else {
                turn = 'o';
            }

        });
      //test if winner found
        $($gameCells).one('click', function findWinner(){

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
              $('#xScore').html("X:" + " " + gameCountX);
              console.log(gameCountX);
          } else if(moves[0] == 'o' && moves[1] =='o' && moves[2] == 'o' ||
                moves[3] == 'o' && moves[4] =='o' && moves[5] == 'o' ||
                moves[6] == 'o' && moves[7] =='o' && moves[8] == 'o' ||
                moves[0] == 'o' && moves[3] =='o' && moves[6] == 'o' ||
                moves[1] == 'o' && moves[4] =='o' && moves[7] == 'o' ||
                moves[2] == 'o' && moves[5] =='o' && moves[8] == 'o' ||
                moves[0] == 'o' && moves[4] =='o' && moves[8] == 'o' ||
                moves[2] == 'o' && moves[4] =='o' && moves[6] == 'o' ) {
              $('#winnerIs').html("Winner is O!"), $($gameCells).off();
              gameCountO++;
              $('#oScore').html("0:" + " " + gameCountO);
              console.log(gameCountO);
          } else {
                if (counter == 9){
                  $('#winnerIs').html("Draw!");
                }
             //
          }
             });


        }


               //index page Code //
               //index page Code //
               //index page Code //
               //index page Code //












});




