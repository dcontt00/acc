import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Description from "./pages/Description";
import Personalize from "./pages/Personalize";
import Favorites from "./pages/Favorites";
import History from "./pages/History";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import Payment from "./pages/PaymentGateway";
import PaymentMethod from "./pages/PaymentMethod";

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
          <Route path="/description/:id" element={<Description />} />
          <Route path="/personalize/:id" element={<Personalize />} />
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment/method" element={<PaymentMethod/>} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
