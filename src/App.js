import { Suspense } from 'react'
import './App.css';
import './pages/Registration';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from './pages/Registration';
import Order from './pages/Order';
import Loading from './components/Loading'
import ScrollToTop from './components/ScrollToTop'
import MobileView from './components/MobileView'

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<Registration />} />
            <Route exact path="/order" element={<Order />} />
          </Routes>
        </ScrollToTop>
      </Router>
      <MobileView />
    </Suspense>
  );
}

export default App;
