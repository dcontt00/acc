import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Description from "./pages/Description";
import Personalize from "./pages/Personalize";
import Favorites from "./pages/Favorites";
import History from "./pages/History";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Theme";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/description" element={<Description />} />
          <Route path="/personalize" element={<Personalize />} />
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/history" element={<History/>}/>
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
