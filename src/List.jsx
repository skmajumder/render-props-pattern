import { useState } from "react";

const List = ({ title, items, render }) => {
  const [isListOpen, setIsListOpen] = useState(true);
  const [isListCollapsed, setListCollapsed] = useState(false);

  const displayItems = isListCollapsed ? items.slice(0, 3) : items;

  function toggleOpen() {
    setIsListOpen((isListOpen) => !isListOpen);
    setListCollapsed(false);
  }

  return (
    <div className="list-container">
      <div className="heading">
        <h2>{title}</h2>
        <button onClick={toggleOpen}>
          {isListOpen ? <span>&or;</span> : <span>&and;</span>}
        </button>
      </div>
      {isListOpen && <ul className="list">{displayItems.map(render)}</ul>}

      <button onClick={() => setListCollapsed((collapsed) => !collapsed)}>
        {isListCollapsed ? `Show all ${items.length}` : "Show less"}
      </button>
    </div>
  );
};

export default List;
