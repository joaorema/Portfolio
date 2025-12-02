import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;