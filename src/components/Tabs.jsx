import { useState } from 'react';

// tabs: [{ id, label, content }]
export default function Tabs({ id, label, tabs }) {
  const [active, setActive] = useState(tabs[0].id);

  return (
    <div className="tabs" id={id}>
      <div className="tab-list" role="tablist" aria-label={label}>
        {tabs.map((tab) => {
          const on = tab.id === active;
          return (
            <button
              key={tab.id}
              className={`tab-btn${on ? ' is-active' : ''}`}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={on}
              aria-controls={`panel-${tab.id}`}
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="tab-panel"
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          hidden={tab.id !== active}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
