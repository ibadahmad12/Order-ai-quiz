import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizLanding from "./pages/QuizLanding/index";
import QuizQuestions from "./pages/Quiz/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Form from "./pages/Form/index";

function App() {
  return (
    <>
      <div className="page-wrap">
        <Router>
          <Routes>
            <Route exact path="/" element={<QuizLanding />} />
            <Route exact path="/quiz" element={<QuizQuestions />} />
            <Route exact path="/form" element={<Form />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
