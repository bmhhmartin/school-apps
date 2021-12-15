import { Fragment } from 'react';
import './assets/css/style.css';
import './assets/css/media.css';
import AppRoute from "./route/AppRoute";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
        <AppRoute></AppRoute>
      </Router>
    </Fragment>
  );
}

export default App;
