import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Home from './pages/home/Home';
import EventDetail from './pages/eventDetail/EventDetail';

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path=":id" element={<EventDetail />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
