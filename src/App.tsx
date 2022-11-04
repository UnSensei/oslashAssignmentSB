import React from "react";
import "./App.css";
import { PopoverCP } from "./components/popover/popover";
import { Share } from "./components/shareComponent/Share";
import { access } from "./data";

const App: React.FC = () => {
  return (
    <div className="App container flex justify-center mx-auto my-6">
      <PopoverCP accessLevels={access} />
    </div>
  );
};

export default App;
