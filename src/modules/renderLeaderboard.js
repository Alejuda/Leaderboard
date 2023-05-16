const leaderBoard = document.getElementById('leaderboard');

const renderLeaderboard = (scoreList) => {
    let renderText = '';
    let odd;
    scoreList.forEach ((score, idx) => {
        odd = '';
        if (idx % 2 === 0) {
          odd = 'odd-row'
        } 
        renderText += `
        <div class="leaderboard-row ${odd}">
          <p class="row-description">${score.user}: ${score.score}</p>
        </div>
        `
    })
    leaderBoard.innerHTML = renderText;
}

export default renderLeaderboard;