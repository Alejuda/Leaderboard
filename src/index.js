import './style.css';
import { getScores, addScore } from './modules/fetchLeaderboard.js';
import renderLeaderboard from './modules/renderLeaderboard.js';

const reloadBtn = document.getElementById('refresh-btn');
const form = document.getElementById('add-form');
const nameToAdd = document.getElementById('name');
const scoreToAdd = document.getElementById('score');

const renderListOnload = async () => {
  const newList = await getScores();
  renderLeaderboard(newList);
};

window.onload = renderListOnload();

reloadBtn.addEventListener('click', async () => {
  const newList = await getScores();
  renderLeaderboard(newList);
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  await addScore(nameToAdd.value, scoreToAdd.valueAsNumber);
  nameToAdd.value = '';
  scoreToAdd.value = '';
});
