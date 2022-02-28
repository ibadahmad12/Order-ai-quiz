import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import QuizLanding from "./pages/QuizLanding/index";
import QuizQuestions from "./pages/Quiz/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <div className="page-wrap">
        <Router>
          <ScrollToTop>
            <Routes>
              <Route exact path="/" element={<QuizLanding />} />
              <Route exact path="/quiz" element={<QuizQuestions />} />
            </Routes>
          </ScrollToTop>
        </Router>
      </div>
    </>
  );
}

export default App;
