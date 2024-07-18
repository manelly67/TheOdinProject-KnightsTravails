// a class Gameboard with the board and the possible valid moves

class Gameboard{

      constructor(){
       
        this.board = this.getBoard(this.rows=8,this.columns=8);            
          
      }

      getBoard(rows=this.rows,columns=this.columns){
        let board=[];
          for (let i = 0; i < rows; i++) {
          board[i] = []; 
          for (let j = 0; j < columns; j++) {
          board[i].push([i,j]);
          }
          };
        return board;
      }

      possibleMoves([x,y]){
        switch(x===undefined && y===undefined){
            case true:
              return null;
            default:
              switch(this.squareInBoard([x,y])!==true){
                case true:
                return null;
                default:
                  const arrayPossibleMoves = [];
      
                  if(this.squareInBoard([x+2,y+1])===true){
                    arrayPossibleMoves.push([x+2,y+1]);
                  }
                  if(this.squareInBoard([x+2,y-1])===true){
                    arrayPossibleMoves.push([x+2,y-1]);
                  }
                  if(this.squareInBoard([x-2,y+1])===true){
                    arrayPossibleMoves.push([x-2,y+1]);
                  }
                  if(this.squareInBoard([x-2,y-1])===true){
                    arrayPossibleMoves.push([x-2,y-1]);
                  }
                  if(this.squareInBoard([x+1,y+2])===true){
                    arrayPossibleMoves.push([x+1,y+2]);
                  }
                  if(this.squareInBoard([x+1,y-2])===true){
                    arrayPossibleMoves.push([x+1,y-2]);
                  }
                  if(this.squareInBoard([x-1,y+2])===true){
                    arrayPossibleMoves.push([x-1,y+2]);
                  }
                  if(this.squareInBoard([x-1,y-2])===true){
                    arrayPossibleMoves.push([x-1,y-2]);
                  }       
                  return arrayPossibleMoves;
              }
          } 
      }

      squareInBoard([x,y]){
        switch(this.board[x]===undefined){
          case true:
           /*  console.log('index out of range'); */
            return false;
            break;
          case false:
            switch(this.board[x][y]===undefined){
              case true:
            /*   console.log('index out of range'); */
              return false;
              break;
              default:
              return true;
            }
          }
      }
     

}


export {Gameboard};