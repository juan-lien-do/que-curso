import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header.jsx";
import { MateriasDisplay } from "./components/materias/MateriasDisplay.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/materias/" element={<MateriasDisplay />}></Route>
        <Route path="/*" element={<Navigate to="/materias/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
