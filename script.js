const questions = [
    {
        question: "Which country has won most fifa world cup trophies?",
        answers: [
            { text: "Nepal", correct: false},
            { text: "Brazil", correct: true},
            { text: "Germany", correct: false},
            { text: "Argentina", correct: false},
        ]
    },
    {
        question: "Who is the persident of FIFA?",
        answers: [
            { text: "Gianni Infantino", correct: true},
            { text: "Kp Oli", correct: false},
            { text: "Ancelotti", correct: false},
            { text: "Guardioala", correct: false},
        ]
    },
    {
        question: "Which country won the 2018 FIFA World Cup?",
        answers: [
            { text: "Nepal", correct: false},
            { text: "Argentina", correct: true},
            { text: "France", correct: true},
            { text: "Argentina", correct: false},
        ]
    },
    {
    question: "Which country hosted the first world cup in 1930?",
        answers: [
            { text: "Nepal", correct: false},
            { text: "Uruguay", correct: true},
            { text: "Germany", correct: false},
            { text: "Argentina", correct: false},
        ]
    }    
];

const questionElement = document.getElementById("quetsion");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    })
}