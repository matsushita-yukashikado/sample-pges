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

// クイズデータと回答を格納する変数
let quizzes = [];
let answers = [];

function getRandomQuizzes(quizData, num) {
  const shuffled = quizData.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

// クイズデータを取得して表示する関数
function displayQuizzes() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  quizzes = getRandomQuizzes(quizData, 4);
  answers = quizzes.map(quiz => quiz.correctIndex);

  quizzes.forEach((quiz, index) => {
    const quizElement = document.createElement("div");
    quizElement.innerHTML = `
      <h3>Q${index + 1}: ${quiz.question}</h3>`;

    quiz.choices.forEach((choice, choiceIndex) => {
      const choiceLabel = document.createElement("label");
      const choiceInput = document.createElement("input");
      choiceInput.type = "radio";
      choiceInput.name = `answer-${index + 1}`;
      choiceInput.value = choiceIndex;

      choiceLabel.appendChild(choiceInput);
      choiceLabel.appendChild(document.createTextNode(choice));

      quizElement.appendChild(choiceLabel);
    });

    quizContainer.appendChild(quizElement);
  });
}

// 「回答する」ボタンのクリックイベントハンドラ
const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", () => {
  const userAnswers = [];
  const quizData = [];

  for (let i = 0; i < 4; i++) {
    const answerInput = document.querySelector(`input[name="answer-${i + 1}"]:checked`);
    if (answerInput) {
      userAnswers.push(parseInt(answerInput.value));
    } else {
      userAnswers.push(null);
    }

    quizData.push({
      question: quizzes[i].question,
      choices: quizzes[i].choices,
      correctIndex: quizzes[i].correctIndex,
      explanation: quizzes[i].explanation
    });
  }

  localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
  localStorage.setItem("quizData", JSON.stringify(quizData));

  //正誤件数確認
  const correctAnswers = quizzes.reduce((count, quiz, index) => {
    const answer = userAnswers[index];
    if (answer === quiz.correctIndex) {
      count++;
    }
    return count;
  }, 0);

  const encodedAnswers = encodeURIComponent(JSON.stringify(userAnswers));
  const encodedQuizData = encodeURIComponent(JSON.stringify(quizData));

  const nextPage = correctAnswers === 4 ? "perfect.html" : "result.html";
  window.location.href = `${nextPage}?answers=${encodedAnswers}&quizData=${encodedQuizData}`;
});

displayQuizzes();