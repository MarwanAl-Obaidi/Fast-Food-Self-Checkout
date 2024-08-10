import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './views/welcome/welcome';
import Featured from './views/featured/featured';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Featured" element={<Featured />} />
      </Routes>
    </Router>
  );
}

export default App;
