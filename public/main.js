let team1Score = 0;
let team2Score = 0;

// Add score
const team1AddScore = () => {
  if (team1Score < 21) {
    team1Score += 1;
    document.querySelector(".team-1 .score").textContent = team1Score;
  } else {
    team1Score += 0;
  }
  if (team1Score === 21) {
    team1Name = document.querySelector(".team-1 .name").textContent;
    document.querySelector(".dialog h3").textContent = team1Name;
    document.querySelector("body").className = "body-blur";
    document.querySelector(".overlay-hidden").className = "overlay-show";

    gameOver();
  }
};
const team2AddScore = () => {
  if (team2Score < 21) {
    team2Score += 1;
    document.querySelector(".team-2 .score").textContent = team2Score;
  } else {
    team2Score += 0;
  }
  if (team2Score === 21) {
    team2Name = document.querySelector(".team-2 .name").textContent;
    document.querySelector(".dialog h3").textContent = team2Name;
    document.querySelector("body").className = "body-blur";
    document.querySelector(".overlay-hidden").className = "overlay-show";

    gameOver();
  }
};
// Sub score
const team1SubScore = () => {
  if (team1Score > 0) {
    team1Score -= 1;
    document.querySelector(".team-1 .score").textContent = team1Score;
  } else {
    team1Score -= 0;
  }
};

const team2SubScore = () => {
  if (team2Score > 0) {
    team2Score -= 1;
    document.querySelector(".team-2 .score").textContent = team2Score;
  } else {
    team2Score -= 0;
  }
};

// Update Team Name
const team1UpdateName = () => {
  team1Name = document.querySelector(".team-1 input").value;
  document.querySelector(".team-1 .name").textContent = team1Name;
  document.querySelector(".team-1 input").value = "";
};
const team2UpdateName = () => {
  team2Name = document.querySelector(".team-2 input").value;
  document.querySelector(".team-2 .name").textContent = team2Name;
  document.querySelector(".team-2 input").value = "";
};

// return key
const team1returnKey = key => {
  if (key.keyCode === 13) {
    team1UpdateName();
  }
};

const team2returnKey = key => {
  if (key.keyCode === 13) {
    team2UpdateName();
  }
};

// Game Over
const gameOver = () => {
  const playAgain = document.querySelector(".dialog button");
  playAgain.addEventListener("click", resetScore);
  team1Score = 0;
  team2Score = 0;
  document.querySelector(".team-1 .score").textContent = team1Score;
  document.querySelector(".team-2 .score").textContent = team2Score;

  let buttons = document.querySelectorAll("#disable");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
};

const resetScore = () => {
  document.querySelector("body").className = "";
  document.querySelector(".overlay-show").className = "overlay-hidden";
  let buttons = document.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
};

const main = () => {
  // Add Button
  const team1AddButton = document.querySelector(".team-1 .add-1");
  team1AddButton.addEventListener("click", team1AddScore);

  const team2AddButton = document.querySelector(".team-2 .add-1");
  team2AddButton.addEventListener("click", team2AddScore);

  // Sub Button
  const team1SubButton = document.querySelector(".team-1 .sub-1");
  team1SubButton.addEventListener("click", team1SubScore);

  const team2SubButton = document.querySelector(".team-2 .sub-1");
  team2SubButton.addEventListener("click", team2SubScore);

  // Update Button
  const team1UpdateButton = document.querySelector(".team-1 .update-button");
  team1UpdateButton.addEventListener("click", team1UpdateName);

  const team2UpdateButton = document.querySelector(".team-2 .update-button");
  team2UpdateButton.addEventListener("click", team2UpdateName);

  // Press 'return' to Update Name
  const team1ReturnKey = document.querySelector(".team-1 .text-box");
  team1ReturnKey.addEventListener("keydown", team1returnKey);

  const team2ReturnKey = document.querySelector(".team-2 .text-box");
  team2ReturnKey.addEventListener("keydown", team2returnKey);
};

document.addEventListener("DOMContentLoaded", main);
