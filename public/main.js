score1 = 0;
score2 = 0;

const addScore1 = () => {
  score1 += 1;
  document.querySelector(".team-1 .score").textContent = score1;
};

const addScore2 = () => {
  score2 += 1;
  document.querySelector(".team-2 .score").textContent = score2;
};

const subScore1 = () => {
  score1 -= 1;
  document.querySelector(".team-1 .score").textContent = score1;
};

const subScore2 = () => {
  score2 -= 1;
  document.querySelector(".team-2 .score").textContent = score2;
};

const updateName1 = () => {
  teamName1 = document.querySelector(".team-1 .text-box").value;
  document.querySelector(".team-1 .name").textContent = teamName1;
  document.querySelector(".team-1 .text-box").value = "";
};

const updateName2 = () => {
  teamName2 = document.querySelector(".team-2 .text-box").value;
  document.querySelector(".team-2 .name").textContent = teamName2;
  document.querySelector(".team-2 .text-box").value = "";
};

const main = () => {
  let add1 = document.querySelector(".team-1 .add-1");
  add1.addEventListener("click", addScore1);

  let add2 = document.querySelector(".team-2 .add-1");
  add2.addEventListener("click", addScore2);

  let sub1 = document.querySelector(".team-1 .sub-1");
  sub1.addEventListener("click", subScore1);

  let sub2 = document.querySelector(".team-2 .sub-1");
  sub2.addEventListener("click", subScore2);

  let updateButton1 = document.querySelector(".team-1 .update-button");
  updateButton1.addEventListener("click", updateName1);

  let updateButton2 = document.querySelector(".team-2 .update-button");
  updateButton2.addEventListener("click", updateName2);
};

document.addEventListener("DOMContentLoaded", main);
