import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './views/welcome/welcome';
import Featured from './views/featured/featured';
import Hamburgers from './views/hamburgers/hamburgers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/hamburgers" element={<Hamburgers />} />
      </Routes>
    </Router>
  );
}

export default App;
