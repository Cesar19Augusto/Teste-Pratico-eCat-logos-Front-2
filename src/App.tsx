import { Routes, Route } from 'react-router-dom';
import PurchasePage from './pages/PurchasePage';
import GlobalStyle from './styled-components';

function App() {
  return (
    <>
    <GlobalStyle />
    <Routes>
      <Route path="/purchase" element={<PurchasePage />} />
    </Routes>
    </>
  );
}

export default App;
