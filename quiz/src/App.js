import React from "react";
import Topbar from "./components/Topbar/topbar";
import Home from "./pages/Home/home";
import Quiz from "./pages/Quiz/quiz";
import GIEasy from "./topics/GenshinImpact/GIEasy/giEasy";
import GIMedium from "./topics/GenshinImpact/GIMedium/giMedium";
import GIHard from "./topics/GenshinImpact/GIHard/giHard";
import SREasy from "./topics/StarRail/SREasy/srEasy";
import SRMedium from "./topics/StarRail/SRMedium/srMedium";
import SRHard from "./topics/StarRail/SRHard/srHard";
import TOFEasy from "./topics/TowerOfFantasy/TOFEasy/tofEasy";
import TOFMedium from "./topics/TowerOfFantasy/TOFMedium/tofMedium";
import TOFHard from "./topics/TowerOfFantasy/TOFHard/tofHard";
import WWEasy from "./topics/WutheringWaves/WWEasy/wwEasy";
import WWMedium from "./topics/WutheringWaves/WWMedium/wwMedium";
import WWHard from "./topics/WutheringWaves/WWHard/wwHard";

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element ={<Home />}>Home</Route>
          <Route path="/quiz" element ={<Quiz />}>QUIZ</Route>
          <Route path="/" element ={<Home />}>CONTACT</Route>
          <Route path="/" element ={<Home />}>LOGOUT</Route>
          <Route path="/genshin-impact-easy-mode" element ={<GIEasy />}></Route>
          <Route path="/genshin-impact-medium-mode" element ={<GIMedium />}></Route>
          <Route path="/genshin-impact-hard-mode" element ={<GIHard />}></Route>
          <Route path="/star-rail-easy-mode" element ={<SREasy />}></Route>
          <Route path="/star-rail-medium-mode" element ={<SRMedium />}></Route>
          <Route path="/star-rail-hard-mode" element ={<SRHard />}></Route>
          <Route path="/tower-of-fantasy-easy-mode" element ={<TOFEasy />}></Route>
          <Route path="/tower-of-fantasy-medium-mode" element ={<TOFMedium />}></Route>
          <Route path="/tower-of-fantasy-hard-mode" element ={<TOFHard />}></Route>
          <Route path="/wuthering-waves-easy-mode" element ={<WWEasy />}></Route>
          <Route path="/wuthering-waves-medium-mode" element ={<WWMedium />}></Route>
          <Route path="/wuthering-waves-hard-mode" element ={<WWHard />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
