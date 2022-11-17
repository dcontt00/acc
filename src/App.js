import Home from "./pages/Home";
import Catalog from "./pages/Catalog";

import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Theme";
import Appbar from "./components/Appbar";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
