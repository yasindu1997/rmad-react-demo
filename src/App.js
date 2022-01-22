import './App.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Navigation from './components/Navigation';
import AddStudent from './pages/AddStudent';
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Navigation />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/add_student" element={<AddStudent />} />
            </Routes>
        </div>

    );
}

export default App;
