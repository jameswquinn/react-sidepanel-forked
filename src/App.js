import React, { useState } from "react";
import "./styles.css";
import Sidepanel from "./Sidepanel";

export default function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  return (
    <div className="App">
      <h1>Sidepanel Demo</h1>
      <p>main content goes here</p>
      <button className="toggleButton" onClick={() => setIsPanelOpen(true)}>
        Open
      </button>
      <Sidepanel
        isOpen={isPanelOpen}
        onPanelToggle={() => setIsPanelOpen(!isPanelOpen)}
      />
    </div>
  );
}
