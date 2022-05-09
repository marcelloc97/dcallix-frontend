import { Routes, Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Launches, Error } from './pages';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/launches" element={<Launches />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
