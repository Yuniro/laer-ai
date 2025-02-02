import ReactDOM from 'react-dom';

// third party
import { BrowserRouter } from 'react-router-dom';

// project imports
import App from 'App';
import { BASE_PATH } from 'config';
import * as serviceWorker from 'serviceWorker';
import reportWebVitals from 'reportWebVitals';

// style + assets
import 'assets/scss/style.scss';

// ==============================|| REACT DOM RENDER  ||============================== //

ReactDOM.render(
  <BrowserRouter basename={BASE_PATH}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
