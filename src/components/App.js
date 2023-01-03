import React from "react";
import Home from "./Home";
import Search from "./Search";
import Main from "./Main";
import Library from "./Library";
import Liked from "./Liked";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <React.StrictMode>
        <Router>
          <div className="row px-0 mx-0">
            <div className="col-md-3 pe-0">
              <Home />
            </div>
            <div className="col-md-9 px-0">
              <Routes>
                <Route path="/" element={<Main />} />
              </Routes>
              <Routes>
                <Route path="/search" element={<Search />} />
              </Routes>
              <Routes>
                <Route path="/lib" element={<Library />} />
              </Routes>
              <Routes>
                <Route path="/liked" element={<Liked />} />
              </Routes>
            </div>
          </div>
        </Router>
      </React.StrictMode>
    </div>
  );
}

export default App;
