//Selection
let viewSquares = document.querySelectorAll('.viewSquare');

//Manipulation
function random(){
  let numberArray = [];
  for(let x = 0; x < 3; x++){
    numberArray.push(Math.floor((Math.random() * 9) + 1 ));
  };
  return numberArray;
};




console.log(viewSquares);