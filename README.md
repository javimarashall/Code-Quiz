# Code-Quiz

## Site
![Site](./assets/site.png)
## Technologies Used
- HTML - Used to create code for the code quiz
- CSS - Used to style the code made in the HTML
- Java Script - Used for creating the advanced features of the application
- Git - Used for pushing data up to the repository
- GitHub - Used for publishing the application
- VS Code - Used for writing the code

## Summary
This application contains a coding quiz where a user starts the quiz by pressing the start button. When the user starts the quiz, the application will display one of five questions with 3 incorrect answers and 1 correct answer. The user then selects an answer and the application moves forward and displays the next question and answers. However, if the user selects a wrong answer, the application will deduct 10 seconds from the timer. At the end of the quiz, the user will be asked to enter their initials and submit it. The submit button will take the user to a new page of high scores. In this page, the user has the option to clear the scores or return to the quiz page.

## Code Snippet
This code snippet represents the timer function that gets called upon the start of the game. I find this function important because I learned how to set a timer and how to deduct time if the user gets an answer wrong. 

function startTimer() {<br>
    timer = setInterval(function () {<br>
        timerCount--;<br>
        timerElement.textContent = timerCount;<br>
        if (timerCount === 0) {<br>
            endGame()<br>
        }<br>
    }, 1000);<br>
};<br>

## Repository Link
https://github.com/javimarashall/Code-Quiz
## Deploy Link
https://javimarashall.github.io/Code-Quiz/

## Personal Links
[Github](https://github.com/javimarashall)<br>
[Linkedin](https://www.linkedin.com/in/javier-mondragon-7b471719b/)

