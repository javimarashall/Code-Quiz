//create questions array
var quizQuestions = [
    {
        question: "Question 1: What is a self-closing tag?",
        answer: "A tag with no closing tag",
        choices: ["A tag with no closing tag", "An empty tag", "An array of strings", "An automated tag"],
    },
    {
        question: "Question 2: What does CSS stand for?",
        answer: "Cascading Style Sheets",
        choices: ["Cascade Style Ships", "Cascading Style Sheets", "Coconut Syrup Sucks", "Costco Size Sheets"],
    },
    {
        question: "Question 3: What is a directory?",
        choices: ["Directions to a computer store", "A location for storing files on a computer", "Being direct with your boss?", "Somebody who doesn't take directions"],
        answer: "A location for storing files on a computer",
    },
    {
        question: "Question 4: What is HTML?",
        choices: ["Hot Tamales Made Late", "Hot Tuesday Morning Laughs", "Hypertext Markup Language", "Heat Torments My Life"],
        answer: "Hypertext Markup Language",
    },
    {
        question: "Question 5: What is a repository?",
        answer: "A central location to store data",
        choices: ["A central location to store data", "Used in medical settings", "A place to re-deposit money", "A place where computers are stored"],
    }
]

//grab neccessary items
var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");

var timerCount = 50;
var timer;
//starts game when start button is clicked
function startGame() {
    //start time
    startTimer();

    //show the question container
    document.querySelector(".questions-container").classList.remove("hide");

    //hide the start elements
    document.querySelector(".start-screen").classList.add("hide");

    //show the first question
    showQuestion();
}

var qIndex = 0;
function showQuestion() {
    //get the current question obj
    var question = quizQuestions[qIndex];

    //create the question string markup
    var questionString =
        `
        <div class="question-main">
            <div class="question-title">${question.question}</div>
            <div class="choices-container">
                <ol>
                <li><button class="answer-choices">${question.choices[0]}</button></li>
                <li><button class="answer-choices">${question.choices[1]}</button></li>
                <li><button class="answer-choices">${question.choices[2]}</button></li>
                <li><button class="answer-choices">${question.choices[3]}</button></li>
                </ol>
                </div
        </div>
    `;

    //convert the string into html and add it the page
    document.querySelector(".questions-container").innerHTML = questionString;

    //question choice event listener
    var arrayAnswerBtn = document.querySelectorAll(".answer-choices");
    arrayAnswerBtn.forEach(function (choice) {
        choice.addEventListener("click", handleAnswerClick);
    });
};

var score = 0;
function handleAnswerClick(event) {
    //check if the answer is right
    if (quizQuestions[qIndex].answer === event.target.textContent) {
        score++;
       // console.log("********",score);
    } else {
        timerCount -= 10;
    };

    //show the next question
    qIndex++;
    if (qIndex === quizQuestions.length) {
        endGame();
    } else {
        showQuestion();
    }
}

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            endGame()
        }
    }, 1000);
};

//it starts the game function on "click"
startButton.addEventListener("click", startGame);

function endGame() {
    //show end screen
    document.querySelector(".end-screen").classList.remove("hide");

    //hide question container
    document.querySelector(".questions-container").classList.add("hide");

    //clear timer
    clearInterval(timer);

    //show score
    document.querySelector(".score").textContent = score;
}

//handle sumit button click
document.querySelector(".submit").addEventListener("click", function() {
    //get user intitials
    var userInitials = document.querySelector("#initials").value;

    //get the history
    var history = [];
    if (localStorage.length > 0) {
        history = JSON.parse(localStorage.getItem("history")); //JSON parse
    };
    console.log("*****history",history);
            
    //create history entry
    var historyEntry = {
        user: userInitials,
        score: score
    };


    //push to history
    history.push(historyEntry);

    //set hsitroy to localsorage
    localStorage.setItem("history", JSON.stringify(history));
});