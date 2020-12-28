import React from "react";
import classNames from "classnames";

function Sidepanel({ isOpen, onPanelToggle }) {
  return (
    <div class="container">
      <div className={classNames("sidepanel", { active: isOpen })}>
        <button className="toggleButton" onClick={onPanelToggle}>
          Close
        </button>
        Sidepanel content goes here
      </div>
      <div className={classNames("content", { active: isOpen })} />
    </div>
  );
}

export default Sidepanel;
