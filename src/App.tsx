import { Routes, Route } from 'react-router-dom';

import { Header } from './components';
import { /*Home,*/ Launches, Error } from './pages';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Launches />} />
        {/* <Route path="/launches" element={<Launches />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}
