//Selection
let viewSquares = document.querySelectorAll('.viewSquare');
let inputSquares = document.querySelectorAll('.inputSquare');

//Manipulation
let userClickedSquares = [];
for(let n = 0; n <= 8; n++){
  inputSquares[n].addEventListener('click', () => {
    userClickedSquares.push(n);
    // console.log(n);
    verifyUserInput(numberArray, userClickedSquares);
  });
};

function random(){
  let numberArray = [];
  for(let x = 0; x < 3; x++){
    numberArray.push(Math.floor(Math.random() * 9));
  };
  return numberArray;
};

let numberArray;
function animateSquares(){
  numberArray = random();
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

function verifyUserInput(numArr, userArr) {
  if(numArr.length === 3 && userArr.length === 3){
    for(let i = 0; i < 3; i++){
      if(numArr[i] !== userArr[i]){
        //Make User Friendly Error Message
        return alert("Wrong");
      };
    };

    return inputSquares.forEach(element => {
      element.classList.add('pass');
      setTimeout( () => {
        element.classList.remove('pass');
      }, 300);
    });

  };
};

animateSquares();
// console.log(inputSquares);