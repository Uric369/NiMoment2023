import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { history } from "./utils/history";
import Department from "./View/Department";
import Personal1 from "./View/Personal1";
import Personal2 from "./View/Personal2";
import Achievement from "./View/Achievement";
import Entry from "./View/Entry";
import DepartmentSpecial from "./RetireView/Department";
import Personal1Special from "./RetireView/Personal1";
import Personal2Special from "./RetireView/Personal2";
import Login from "./View/Login";
import EasterEggs from "./View/EasterEggs";

class MyRouter extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      console.log(location, action);
    });
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <Routes>
            <Route path="/" element={<Entry />} />
            <Route path="/Department" element={<Department />} />
            <Route path="/Personal1" element={<Personal1 />} />
            <Route path="/Personal2" element={<Personal2 />} />
            <Route path="/Achievement" element={<Achievement />} />
            <Route path="/DepartmentSpecial" element={<DepartmentSpecial />} />
            <Route path="/Personal1Special" element={<Personal1Special />} />
            <Route path="/Personal2Special" element={<Personal2Special />} />
            {/* <Route path="/AchievementSpecial" element={<AchievementSpecial />} /> */}
            <Route path="/EasterEggs" element={<EasterEggs />} />
            {/* <Route path="/*" element={<Navigate to="/Department" />} /> */}
            <Route path="/auth/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default MyRouter;
