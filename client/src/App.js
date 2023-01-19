import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Detail from './pages/Detail';
import Edit from './pages/Edit';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/detail/:id" element={<Detail />} />
      <Route exact path="/edit/:id" element={<Edit />} />
    </Routes>
  );
}

export default App;
