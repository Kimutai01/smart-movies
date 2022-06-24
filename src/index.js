import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import getData from './modules/useApi.js';

window.addEventListener('load', () => {
  getData();
});
