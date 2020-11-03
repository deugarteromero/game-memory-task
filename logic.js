//Selection
let viewSquares = document.querySelectorAll('.viewSquare');
let inputSquares = document.querySelectorAll('.inputSquare');

//Manipulation
function random(){
  return Math.floor(Math.random() * 9);
};

let userClickedSquares = [];
for(let n = 0; n <= 8; n++){
  inputSquares[n].addEventListener('click', () => {
    userClickedSquares.push(n);
    inputSquares[n].classList.add('pressed');
    setTimeout( () => {
      inputSquares[n].classList.remove('pressed');
    }, 200);
    // console.log(n);
    setTimeout( () => {
      verifyUserInput(numberArray, userClickedSquares);
    }, 400);
  });
};

let numberArray = [];
function animateSquares(){
  let nextNumber = random();
  numberArray.push(nextNumber);
  console.log(numberArray);

  if(numberArray.length >= 1){
    setTimeout( () => {
      viewSquares[numberArray[0]].classList.add('active');
    }, 1000);
    setTimeout( () => {
      viewSquares[numberArray[0]].classList.remove('active');
    }, 1400);
  };

  if(numberArray.length >= 2){
    setTimeout( () => {
      viewSquares[numberArray[1]].classList.add('active');
    }, 1600);
    setTimeout( () => {
      viewSquares[numberArray[1]].classList.remove('active');
    }, 2100);
  };

  if(numberArray.length >= 3){
    setTimeout( () => {
      viewSquares[numberArray[2]].classList.add('active');
    }, 2300);
    setTimeout( () => {
      viewSquares[numberArray[2]].classList.remove('active');
    }, 2800);
  };

  if(numberArray.length >= 4){
    setTimeout( () => {
      viewSquares[numberArray[3]].classList.add('active');
    }, 3000);
    setTimeout( () => {
      viewSquares[numberArray[3]].classList.remove('active');
    }, 3500);
  };

  if(numberArray.length >= 5){
    setTimeout( () => {
      viewSquares[numberArray[4]].classList.add('active');
    }, 3700);
    setTimeout( () => {
      viewSquares[numberArray[4]].classList.remove('active');
    }, 4200);
  };

};

function verifyUserInput(numArr, userArr) {
  if(numArr.length === userArr.length){
    for(let i = 0; i < numArr.length; i++){
      if(numArr[i] !== userArr[i]){
        //Make User Friendly Error Message
        return alert("Wrong");
      };
    };

    if(numArr.length === 5){
      return inputSquares.forEach(element => {
        element.classList.add('pass');
        setTimeout( () => {
          element.classList.remove('pass');
        }, 300);
      });
    } else {
      userClickedSquares = [];
      animateSquares();
    };

  };
};

animateSquares();
// console.log(inputSquares);