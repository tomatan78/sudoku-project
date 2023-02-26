// -------------3nd page - Sudoku Game--------------- //

//getting the tabels from html_____________
let table1 = document.getElementById("sudokuTable1");
let table2 = document.getElementById("sudokuTable2");
let table3 = document.getElementById("sudokuTable3");

// create and return the solved sudoku tables in the javascript to check them when the user press 'finish'.
function generateFirstArr() {
  let solvedArr = [];

  for (let i = 1; i <= 81; i++) {
    let tempNum;
    tempNum = document.getElementById(`td1_${i}`).innerHTML;
    solvedArr.push(tempNum);
  }

  return solvedArr;
}
const solvedFirstArr = generateFirstArr(); // save the table as a const variable so it wont change.

function generateSecondArr() {
  let solvedArr = [];
  for (let i = 1; i <= 81; i++) {
    let tempNum;
    tempNum = document.getElementById(`td2_${i}`).innerHTML;
    solvedArr.push(tempNum);
  }

  return solvedArr;
}

const solvedSecondArr = generateSecondArr(); // save the table as a const variable so it wont change.

function generateThirdArr() {
  let solvedArr = [];

  for (let i = 1; i <= 81; i++) {
    let tempNum;
    tempNum = document.getElementById(`td3_${i}`).innerHTML;
    solvedArr.push(tempNum);
  }

  return solvedArr;
}
const solvedThirdArr = generateThirdArr(); // save the table as a const variable so it wont change.

//changing the background color of all the filled areas of the sudoku.
let backgroundColorChange = () => {
  for (let i = 1; i <= 81; i++) {
    let tempNum;
    tempNum = document.getElementById(
      `td${localStorage.getItem("randomTableLocal")}_${i}`
    );
    if (tempNum.innerHTML != "") {
      tempNum.style.backgroundColor = "HoneyDew";
    }
  }
};

function startGame() {
  let randTable = Math.floor(Math.random() * (3 - 1 + 1)) + 1; //generate a random table from the html.
  localStorage.setItem("randomTableLocal", randTable); // save the table in the local storage.

  //showes the correct table according to the generated table
  if (randTable == 1) {
    table1.style.display = "inline";
  } else if (randTable == 2) {
    table2.style.display = "inline";
  } else if (randTable == 3) {
    table3.style.display = "inline";
  }

  let vanishNumber;
  let rand;
  let randomArr = [];

  //_______________EASY_______________
  // disappearing number according to the lvl the user chose.
  if (localStorage.getItem("lvl") == "easy") {
    for (let i = 0; i < 20; i++) {
      rand = Math.floor(Math.random() * (81 - 1 + 1)) + 1; // generate a number between 1-81
      if (randomArr.includes(rand) == false) {
        // check if the generated number appears in the array
        randomArr.push(rand); // if it doesnt apears in the array, add it to the array.
      } else if (randomArr.includes(rand) == true) {
        i--;
      }

      vanishNumber = document.getElementById(`td${randTable}_${rand}`); // get the vanihsed number id from the html

      vanishNumber.innerHTML = "";
    }
    // setting a timer according to the chosen lvl, using setInterval function
    document.getElementById("timerDiv").innerHTML = "05:00";
    let minute = 4;
    let second = 60;
    setInterval(function () {
      if (minute == 0 && second == 1) {
        alert("Time End!");
        location.href = "lvlChoice.html";
      } else {
        second--;
        if (second == -1) {
          minute--;
          second = 59;
        }
        document.getElementById("timerDiv").innerHTML = `0${minute}:${second}`;
      }
      if (second < 10) {
        document.getElementById("timerDiv").innerHTML = `0${minute}:0${second}`;
      }
    }, 1000);

    //_______________MEDIUM_______________
    // disappearing number according to the lvl the user chose.
  } else if (localStorage.getItem("lvl") == "medium") {
    for (let i = 0; i < 40; i++) {
      rand = Math.floor(Math.random() * (81 - 1 + 1)) + 1; // generate a number between 1-81
      if (randomArr.includes(rand) == false) {
        // check if the generated number appears in the array
        randomArr.push(rand); // if it doesnt apears in the array, add it to the array.
      } else if (randomArr.includes(rand) == true) {
        i--;
      }

      vanishNumber = document.getElementById(`td${randTable}_${rand}`); // get the vanihsed number id from the html

      vanishNumber.innerHTML = "";
    }
    // setting a timer according to the chosen lvl, using setInterval function
    document.getElementById("timerDiv").innerHTML = "07:00";
    let minute = 6;
    let second = 60;
    setInterval(function () {
      if (minute == 0 && second == 1) {
        alert("Time End!");
        location.href = "lvlChoice.html";
      } else {
        second--;
        if (second == -1) {
          minute--;
          second = 59;
        }
        document.getElementById("timerDiv").innerHTML = `0${minute}:${second}`;
      }
      if (second < 10) {
        document.getElementById("timerDiv").innerHTML = `0${minute}:0${second}`;
      }
    }, 1000);

    //_______________HARD_________________
    // disappearing number according to the lvl the user chose.
  } else if (localStorage.getItem("lvl") == "hard") {
    for (let i = 0; i < 60; i++) {
      rand = Math.floor(Math.random() * (81 - 1 + 1)) + 1; // generate a number between 1-81
      if (randomArr.includes(rand) == false) {
        // check if the generated number appears in the array
        randomArr.push(rand); // if it doesnt apears in the array, add it to the array.
      } else if (randomArr.includes(rand) == true) {
        i--;
      }
      vanishNumber = document.getElementById(`td${randTable}_${rand}`); // get the vanihsed number id from the html

      vanishNumber.innerHTML = "";
    }
    // setting a timer according to the chosen lvl, using setInterval function
    document.getElementById("timerDiv").innerHTML = "10:00";
    let minute = 9;
    let second = 60;
    setInterval(function () {
      if (minute == 0 && second == 1) {
        alert("Time End!");
        location.href = "lvlChoice.html";
      } else {
        second--;
        if (second == -1) {
          minute--;
          second = 59;
        }
        document.getElementById("timerDiv").innerHTML = `0${minute}:${second}`;
      }
      if (second < 10) {
        document.getElementById("timerDiv").innerHTML = `0${minute}:0${second}`;
      }
    }, 1000);
  }
  backgroundColorChange();
}

//put a new number in the box if its empty, and change it's color to Purple
function switchCurrentNum(temp) {
  let tempIdSquare;
  tempIdSquare = document.getElementById(
    `td${localStorage.getItem("randomTableLocal")}_${temp}`
  );

  if (tempIdSquare.innerHTML != "" && tempIdSquare.style.color != "purple") {
    return;
  }
  if (tempIdSquare.innerHTML == "") {
    tempIdSquare.innerHTML = localStorage.getItem("btnNum");
    tempIdSquare.style.color = "purple";
    localStorage.removeItem("btnNum");
  } else if (
    tempIdSquare.innerHTML != "" &&
    tempIdSquare.style.color == "purple"
  ) {
    tempIdSquare.innerHTML = localStorage.getItem("btnNum");
    localStorage.removeItem("btnNum");
  }
}

//save the button the user pressed in the local storage
function setBtnNum(temp) {
  localStorage.setItem("btnNum", temp);
}

//reset the values the user entered
function again() {
  let idSquare;
  for (let i = 1; i <= 81; i++) {
    idSquare = document.getElementById(
      `td${localStorage.getItem("randomTableLocal")}_${i}`
    );
    if (idSquare.style.color == "purple") {
      idSquare.innerHTML = "";
    }
  }
}

//check all the values the user entered
function finish() {
  let userArr = [];
  let randTable = [];
  for (let i = 1; i <= 81; i++) {
    let tempNum;
    tempNum = document.getElementById(
      `td${localStorage.getItem("randomTableLocal")}_${i}`
    );
    userArr.push(tempNum.innerHTML);
  }

  if (localStorage.getItem("randomTableLocal") == 1) {
    randTable = solvedFirstArr;
  }
  if (localStorage.getItem("randomTableLocal") == 2) {
    randTable = solvedSecondArr;
  }
  if (localStorage.getItem("randomTableLocal") == 3) {
    randTable = solvedThirdArr;
  }
  let cnt = 0;
  for (let i = 0; i < randTable.length; i++) {
    if (randTable[i] == userArr[i]) {
      cnt++;
    }
  }
  if (cnt == 81) {
    alert("Congratulations!  🥳 ");
  } else {
    alert("try again ☹️");
  }
  location.href = "lvlChoice.html";
}
