import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from './global';
import { Home } from './pages/Home';

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
