// -------------2nd page - lvl choice--------------- //

// take the user to the next page and save the lvl he chose on the local storage.

let span = document.getElementById("spanLvl");

span.innerHTML = `${localStorage.getItem("user")}`;

function easy() {
  location.href = "sudokuGame.html";
  localStorage.setItem("lvl", "easy");
}

function medium() {
  location.href = "sudokuGame.html";
  localStorage.setItem("lvl", "medium");
}

function hard() {
  location.href = "sudokuGame.html";
  localStorage.setItem("lvl", "hard");
}
