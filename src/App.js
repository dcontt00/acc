import Home from './pages/home'
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './Theme'

function App() {
  return (
    <ThemeProvider theme={Theme}>


      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>


      </Router>
    </ThemeProvider>

  );
}

export default App;
