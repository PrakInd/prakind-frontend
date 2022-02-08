// import './App.css';
import { APP_ROUTE } from "./routes";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from './utils/PublicRoute';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {APP_ROUTE.map((value) => {
            if (value.private) {
              return (
                <PrivateRoute
                  name={value.name}
                  component={value.component}
                  path={value.path}
                  exact={value.exact}
                  index={value.index}
                />
              )
            } else {
              return (
                // <><Navbar />
                <PublicRoute
                  key={value.name}
                  restricted={value.restricted}
                  path={value.path}
                  component={value.component}
                  exact={value.exact}
                />
              );
            }
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
