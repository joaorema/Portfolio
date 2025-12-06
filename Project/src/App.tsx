import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content */}
      <main className="flex-1">
        <Homepage></Homepage>
      </main>
    </div>
  );
};

export default App;