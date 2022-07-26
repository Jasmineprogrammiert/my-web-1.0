import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './components/Contact';
// styles
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/global.css';

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;