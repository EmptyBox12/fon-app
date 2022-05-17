import { Stack } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import FonPage from "./components/FonPage";
import FundList from "./components/FundList";
import Home from "./components/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Layout />} >
            <Route index element = {<Home />}  />
            <Route path = "/:code" element = {<FonPage />} />
            <Route path = "/fund-list" element = { <FundList /> } />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
