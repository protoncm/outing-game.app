import { Routes, Route } from "react-router-dom";

import './App.css';
import Home from './pages/home';
import Guide from './pages/guide/main';
import Detail from './pages/guide/detail';
import Game from './pages/game';
import Layout from './layout/layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="guide" element={<Guide />} />
        <Route path="guide/:id" element={<Detail />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </Layout>
  );
}

export default App;
