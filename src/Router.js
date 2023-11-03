import React from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import { history } from "./utils/history";
import Department from "./View/Department";
import Personal1 from "./View/Personal1";
import { createBrowserHistory } from 'history';
import Personal2 from "./View/Personal2";

class MyRouter extends React.Component{
  

  constructor(props) {
            super(props);
    
            history.listen((location, action) => {
                // clear alert on location change
                console.log(location,action);
            });
        }

  render(){

    return(
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Department />} />
        <Route path="/Department" element={<Department/>} />
        <Route path="/Personal1" element={<Personal1/>} />
        <Route path="/Personal2" element={<Personal2/>} />
        <Route path="/*" element={<Navigate to="/Department" />} />
      </Routes>
    </Router>
    );
  };
}

export default MyRouter;