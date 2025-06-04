import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import RosterMonster from './pages/RosterMonster';
import styled from '@emotion/styled';
import ScrollToTop from './components/ScrollToTop';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  margin-top: 8vh;
`;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContainer>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/roster-monster" element={<RosterMonster />} />
          {/* Add more routes here as we create more pages */}
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
