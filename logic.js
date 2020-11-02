//Selection
let viewSquares = document.querySelectorAll('.viewSquare');

//Manipulation
function random(){
  let numberArray = [];
  for(let x = 0; x < 3; x++){
    numberArray.push(Math.floor(Math.random() * 9));
  };
  return numberArray;
};

function animateSquares(){
  let numberArray = random();
  // console.log(numberArray);
  setTimeout( () => {
    viewSquares[numberArray[0]].classList.add('active');
  }, 1000);
  setTimeout( () => {
    viewSquares[numberArray[0]].classList.remove('active');
  }, 1400);

  setTimeout( () => {
    viewSquares[numberArray[1]].classList.add('active');
  }, 1600);
  setTimeout( () => {
    viewSquares[numberArray[1]].classList.remove('active');
  }, 2100);

  setTimeout( () => {
    viewSquares[numberArray[2]].classList.add('active');
  }, 2300);
  setTimeout( () => {
    viewSquares[numberArray[2]].classList.remove('active');
  }, 2800);
};

animateSquares();
// console.log(viewSquares);