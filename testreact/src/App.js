import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navigation from "./src/Navigation";
import Listening from "./pages/Listening";
import Watching from "./pages/Watching";
import Speaking from "./pages/Speaking";
import Writing from "./pages/Writing";
import Reading from "./pages/Reading";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path=".pages/Writing" component={Writing} />
        <Route path="./pages/Reading" component={Reading} />
      </Routes>
    </Router>
  );
}
export default App;
