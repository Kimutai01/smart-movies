import displayData, { displayPopup } from './displayData.js';
import commentPost from './commentsApi.js';

const getData = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  displayData(data);
  displayPopup(data);
  commentPost(data);
};

export default getData;
