let myQuestions = [{
        question: "What is the day before Mardi Gras called?",
        answers: {
            a: 'Typical Tuesday <br>',
            b: 'Ash Wednesday <br>',
            c: 'Lundi Gras <br>',
        },
        correctAnswer: 'c'
    },
    {
        question: "What day comes after Mardi Gras?",
        answers: {
            a: 'Ash Wednesday <br>',
            b: 'Taco Tuesday <br>',
            c: 'Thorsday <br>',
        },
        correctAnswer: 'a'
    },
    {
        question: "When was the earliest known carnival celebration?",
        answers: {
            a: '1294 <br>',
            b: '1540 <br>',
            c: '2021 <br>',
        },
        correctAnswer: 'a'
    },
    {
        question: "What is the signature Mardi Gras dessert?",
        answers: {
            a: 'Fishcake <br>',
            b: 'King Cake <br>',
            c: 'Ice cream <br>',
        },
        correctAnswer: 'b'
    },
    {
        question: "What states recognize Fat Tuesday as a holiday?",
        answers: {
            a: 'Louisiana, Florida and Alabama <br>',
            b: 'Washington and New York <br>',
            c: 'New York, Los Angeles and Texas <br>',
        },
        correctAnswer: 'a'
    },
    {
        question: "What is Mardi Gras called in the United Kingdom, Australia, New Zealand and Canada?",
        answers: {
            a: 'Fat Tuesday <br>',
            b: 'Mardi Gras <br>',
            c: 'Shrove Tuesday <br>',
        },
        correctAnswer: 'c'
    },
    {
        question: "The Krewe of Zulu tosses what coveted Mardi Gras trinket during their New Orleans parade each year?",
        answers: {
            a: 'Beads <br>',
            b: 'A golden coconut <br>',
            c: 'Masks <br>',
        },
        correctAnswer: 'b'
    },
    {
        question: "What are the groups that organize New Orleans Mardi Gras parades called?",
        answers: {
            a: 'Paraders <br>',
            b: 'Crews <br>',
            c: 'Krewes <br>',
        },
        correctAnswer: 'c'
    },
    {
        question: "Bacchus is the Roman god of what?",
        answers: {
            a: 'Wine <br>',
            b: 'War <br>',
            c: 'Wisdom <br>',
        },
        correctAnswer: 'a'
    },
    {
        question: "Where was the first known carnival celebration?",
        answers: {
            a: 'Tokyo, Japan <br>',
            b: 'Nice, France <br>',
            c: 'New Orleans, Louisiana, USA <br>',
        },
        correctAnswer: 'b'
    }
];

let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    function showQuestions(questions, quizContainer) {
        let output = [];
        let answers;
        for (let i = 0; i < questions.length; i++) {
            answers = [];
            for (letter in questions[i].answers) {
                answers.push(
                    '<label>' +
                    '<input type="radio" name="question' + i + '" value="' + letter + '">' +
                    letter + ': ' +
                    questions[i].answers[letter] +
                    '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>' +
                '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer) {
        let answerContainers = quizContainer.querySelectorAll('.answers');
        let userAnswer = '';
        let numCorrect = 0;
        for (let i = 0; i < questions.length; i++) {
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            if (userAnswer === questions[i].correctAnswer) {
                numCorrect++;
                answerContainers[i].style.color = 'green';
            } else {
                answerContainers[i].style.color = 'purple';
            }
        }
        resultsContainer.innerHTML = numCorrect + ' answer(s) out of ' + questions.length + ' are correct!';
    }
    showQuestions(questions, quizContainer);

    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
}