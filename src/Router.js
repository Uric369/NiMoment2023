import React from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import { history } from "./utils/history";
import ParallaxComponent from "./View/ParaScroll";
import Personal1 from "./View/Personal_1";
import { createBrowserHistory } from 'history';

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
        <Route path="/" element={<ParallaxComponent />} />
        <Route path="/Department" element={<ParallaxComponent/>} />
        <Route path="/Personal1" element={<Personal1/>} />
        <Route path="/*" element={<Navigate to="/Department" />} />
      </Routes>
    </Router>
    );
  };
}

export default MyRouter;