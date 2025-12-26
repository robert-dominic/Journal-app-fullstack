import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from './pages/Home';
import Journal from './pages/Journal';
import Editor from "./pages/Editor";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App;