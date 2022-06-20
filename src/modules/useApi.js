import displayData from './displayData.js';

const getData = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  displayData(data);
};

export default getData;
