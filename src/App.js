import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Description from "./pages/Description";
import Personalize from "./pages/Personalize";
import Favorites from "./pages/Favorites";
import History from "./pages/History";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Claim from "./pages/Claim";
import Contact from "./pages/Contact";
import Checkout from "./pages/Payment/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Theme";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import Comparator from "./pages/Comparator";
console.log(process.env.PUBLIC_URL);

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:search" element={<Catalog />} />
        <Route path="/description/:id" element={<Description />} />
        <Route path="/personalize/:id" element={<Personalize />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/history" element={<History />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/payment/:id" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/comparator" element={<Comparator />} />
        <Route path="/claim/:id" element={<Claim />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
