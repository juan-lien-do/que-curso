import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header.jsx";
import { MateriasDisplay } from "./components/materias/MateriasDisplay.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./pages/Home.jsx";
import { FAQ } from "./pages/FAQ.jsx";
import { Material } from "./pages/Material.jsx";
import { SendFeedBack } from "./pages/SendFeedBack.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/material" element={<Material />}></Route>
        <Route path="/materias/" element={<MateriasDisplay />}></Route>
        <Route path="/sendFeedback" element={<SendFeedBack />}></Route>
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
