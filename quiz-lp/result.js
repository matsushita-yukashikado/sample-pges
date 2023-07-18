// 結果ページのロジック
// クイズデータを取得
const quizData = [
  {
    question: "質問1",
    choices: ["選択肢1", "選択肢2", "選択肢3"],
    correctIndex: 0,
    explanation: "質問1の解説文です。質問1の解説文です。質問1の解説文です。質問1の解説文です。質問1の解説文です。質問1の解説文です。"
  },
  {
    question: "質問2",
    choices: ["選択肢1", "選択肢2", "選択肢3"],
    correctIndex: 0,
    explanation: "質問2の解説文です。質問2の解説文です。質問2の解説文です。質問2の解説文です。"
  },
  {
    question: "質問3",
    choices: ["選択肢1", "選択肢2", "選択肢3"],
    correctIndex: 0,
    explanation: "質問3の解説文です。質問3の解説文です。質問3の解説文です。質問3の解説文です。"
  },
  {
    question: "質問4",
    choices: ["選択肢1", "選択肢2", "選択肢3"],
    correctIndex: 0,
    explanation: "質問4の解説文です。質問4の解説文です。質問4の解説文です。質問4の解説文です。"
  },
  {
    question: "質問5",
    choices: ["選択肢1", "選択肢2", "選択肢3"],
    correctIndex: 0,
    explanation: "質問5の解説文です。質問5の解説文です。質問5の解説文です。質問5の解説文です。"
  },
  {
    question: "質問6",
    choices: ["選択肢1", "選択肢2", "選択肢3"],
    correctIndex: 0,
    explanation: "質問6の解説文です。質問6の解説文です。質問6の解説文です。質問6の解説文です。"
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const userAnswers = JSON.parse(localStorage.getItem("userAnswers"));
  const quizData = JSON.parse(localStorage.getItem("quizData"));

  const resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = "";

  quizData.forEach((quiz, index) => {
    const resultItem = document.createElement("div");

    const questionElement = document.createElement("p");
    questionElement.textContent = `Q${index + 1}: ${quiz.question}`;
    resultItem.appendChild(questionElement);

    const correctAnswerElement = document.createElement("p");
    correctAnswerElement.textContent = `正解: ${quiz.choices[quiz.correctIndex]}`;
    resultItem.appendChild(correctAnswerElement);

    const explanationElement = document.createElement("p");
    explanationElement.textContent = `解説: ${quiz.explanation}`;
    resultItem.appendChild(explanationElement);

    resultContainer.appendChild(resultItem);
  });

  // localStorageからデータを削除
  localStorage.removeItem("userAnswers");
  localStorage.removeItem("quizData");
});