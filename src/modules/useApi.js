/* eslint-disable comma-dangle */
import displayData, { displayPopup } from './displayData.js';
import commentPost from './commentsApi.js';

const getData = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  const mappedData = data.map((data) => data.id);
  const likeData = await displayLikeData();
  const mappedLike = likeData.map((dat) => dat.item_id);
  mappedData.forEach((par) => {
    if (mappedLike.includes(par)) {
      const correctMovie = data[par - 1];
      const correctLike = likeData[mappedLike.indexOf(par)];
      correctMovie.likes = correctLike.likes;
      data[par - 1] = correctMovie;
    }
  });
  displayData(data);
  displayPopup(data);
  commentPost(data);
  likeFun(data);
};
export default getData;
const likeFun = (data) => {
  data.forEach((dat) => {
    const likeBtn = document.querySelectorAll(`[id=like-${dat.id}]`);
    likeBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        const likeObj = {
          item_id: dat.id,
        };
        postLike(likeObj);
      });
    });
  });
};
const postLike = async (likeObj) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TrLRdj6jmNYdOKgPtoVe/likes',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(likeObj),
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.text();
  window.location.reload(true);
  return data;
};
const displayLikeData = async () => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TrLRdj6jmNYdOKgPtoVe/likes'
  );
  const data2 = await response.json();
  return data2;
};
