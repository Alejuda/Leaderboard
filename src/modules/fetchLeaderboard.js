const apiUrl =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Rs6nOVuEsBL48H3aGZaH/scores/";

export async function getScores() {
  const response = await fetch(apiUrl);
  const jsonData = await response.json();
  return jsonData.result;
}

export async function addScore(user, score) {
  const newScore = {
    user: user,
    score: score,
  };
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newScore),
  });
  const jsonData = await response.json();
  return jsonData.result;
}
