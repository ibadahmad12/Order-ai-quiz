import { Suspense } from "react";
import "./App.css";
import "./pages/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Order from "./pages/Order";
import Loading from "./components/Loading";
import ScrollToTop from "./components/ScrollToTop";
import MobileView from "./components/MobileView";
import QuizLanding from "./pages/QuizLanding/index";
import QuizQuestions from "./pages/Quiz/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <div className="page-wrap">
        <Suspense fallback={<Loading />}>
          <Router>
            <ScrollToTop>
              <Routes>
                <Route exact path="/" element={<QuizLanding />} />
                <Route exact path="/order" element={<Order />} />
                <Route exact path="/quiz-landing" element={<QuizLanding />} />
                <Route exact path="/quiz" element={<QuizQuestions />} />
              </Routes>
            </ScrollToTop>
          </Router>
        </Suspense>
      </div>
      <MobileView />
    </>
  );
}

export default App;
