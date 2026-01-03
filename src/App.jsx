import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { EntriesProvider } from "./contexts/EntriesContext";
import { ModalProvider } from "./contexts/ModalContext";
import Home from './pages/Home';
import Journal from './pages/Journal';
import Editor from "./pages/Editor";
import EntryDetail from "./pages/EntryDetail";

function App() {
  return (
    <AuthProvider>
      <EntriesProvider>
        <ModalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/editor/:id?" element={<Editor />} />
            <Route path="/entry/:id" element={<EntryDetail />} />
          </Routes>
        </Router>
        </ModalProvider>
      </EntriesProvider>
    </AuthProvider>
  )
}

export default App;