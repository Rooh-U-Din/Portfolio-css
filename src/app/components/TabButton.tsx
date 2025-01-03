import '../style/tab.css'
import React, { MouseEventHandler } from "react";

interface button {
  active: boolean;
  selectTab: MouseEventHandler<HTMLButtonElement>;
  children: string;
}

const TabButton: React.FC<button> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "tab-button active" : "tab-button inactive";

  return (
    <button className={buttonClasses} onClick={selectTab}>
      {children}
    </button>
  );
}

export default TabButton;