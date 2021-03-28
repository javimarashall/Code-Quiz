// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
    //The fact that there is a start button means I have to have an eventListener
    //I can put the questions in an array
        //I can also use a for loop to obtain the next question 
// WHEN I answer a question
// THEN I am presented with another question
    //The for loop needs to continue to the next string 
// WHEN I answer a question incorrectly
    //I need to have an if else statement to subtract time from the clock 
// THEN time is subtracted from the clock
    //I need to have a function with a set amount of time to subratract when the statement is false
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
    //When the loop ends, alert the user the game is over 
    //Also a function that when timer hits 0, it ends the game
// WHEN the game is over
// THEN I can save my initials and my score
    //I need to have a function to send scores to the local storage.

//Array of questions    
var questions = ["Question 1: What is a self-closing tag?", "Question 2: What does CSS stand for?", "Question 3: What is a directory?", "Question 4: What is HTML?", "Question 5: What is a repository?"]

var answer1 = ["A tag with no closing tag", "An empty tag", "An array of strings", "An automated tag"]
var answer2 = ["Cascade Style Ships", "Cascading Style Sheets", "Coconut Syrup Sucks", "Costco Size Sheets"]
var answer3 = ["Directions to a computer store", "A location for storing files on a computer", "Being direct with your boss?", "Somebody who doesn't take directions"]
var answer4 = ["Hot Tamales Made Late", "Hot Tuesday Morning Laughs", "Hypertext Markup Language", "He Torments My Life"]
var answer5 = ["A central location to store data", "Used in medical settings", "A place to re-deposit money", "A place where computers are stored",]
















//Event listener for the start button
// add.eventListener
