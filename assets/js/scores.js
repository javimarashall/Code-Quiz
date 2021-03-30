setTimeout(() => {
    //get the hisotry
    var history = JSON.parse(window.localStorage.getItem("history"));
    
    console.log("*****history",history);
    
    var scoreListHTML = "";
    for ( var i = 0; i < history.length; i++) {
        //create mark up for each list item
        scoreListHTML += 
        `
            <li class="score-item">
                <span class="user-name">${history[i].user}: </span>
                <span class="scores">${history[i].score}</span>
            </li>
        `;
    }
    
    document.querySelector("#highscores").innerHTML = scoreListHTML;
},0);

function showHighscores() {
    var highScores = JSON.parse(window.localStorage.getItem(highscores)) || [];
    highScores.sort(function(a, b) {
        return b.score - a.score;
});

}
function clearHighScores() {
    window.localStorage.removeItem("highscores");
}

document.getElementById("clear").onclick = clearHighScores;