// answer.addEventListener("submit", (e) => console.log.bind(0, e));

function ran(n) {
  return Math.floor(Math.random() * n);
}

let n, k;
function setQuestion() {
  while (true) {
    n = ran(47);
    k = ran(kana[n].length);
    let cnt = 0;
    for (let i = 0; i < 47; ++i)
      if (kana[i].length == kana[n].length && kana[i][k] == kana[n][k]) ++cnt;
    if (cnt == 1) break;
  }
  console.log(kana[n]);
  question.innerHTML = "";
  for (let i = 0; i < kana[n].length; ++i)
    question.innerHTML += i == k ? kana[n][i] : "○";
}

setQuestion();

answer.addEventListener("submit", (e) => {
  e.preventDefault();
  if (answer.text.value == kana[n] || answer.text.value == kanji[n]) {
    setQuestion();
    giveCorrectClass(question, true);
  } else {
    giveCorrectClass(question, false);
  }
  answer.text.value = "";
});

function giveCorrectClass(obj, b) {
  obj.classList.remove("correct", "incorrect");
  obj.offsetWidth;
  obj.classList.add(b ? "correct" : "incorrect");
}
