import "./styles/css/index.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import TestLine from "./components/LineChart";

function App() {
  return (
    <div className="App">

      <Header />
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/profile/:id" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
