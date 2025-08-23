import React, { useState } from 'react';
import './icon.css';

const SimpleIconRow = () => {
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);

  const icons = [
    { id: 1, emoji: '⚛️', title: 'Chemistry', info: 'Explore chemical reactions and elements.' },
    { id: 2, emoji: '🧮', title: 'Mathematics', info: 'Discover numbers, equations, and formulas.' },
    { id: 3, emoji: '⚡', title: 'Physics', info: 'Learn about forces, energy, and motion.' },
  ];

  return (
    <div className="icon-row-container">
      <div className="icon-row">
        {icons.map((icon) => (
          <button
            key={icon.id}
            onClick={() => setSelectedIcon(icon.id)}
            className="icon-button"
          >
            {icon.emoji}
          </button>
        ))}
      </div>

      {selectedIcon !== null && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="modal-close"
              onClick={() => setSelectedIcon(null)}
            >
              ×
            </button>
            <div className="modal-body">
              <div className="modal-icon">{icons[selectedIcon - 1].emoji}</div>
              <h3>{icons[selectedIcon - 1].title}</h3>
              <p>{icons[selectedIcon - 1].info}</p>
              <button
                className="modal-action-button"
                onClick={() => setSelectedIcon(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleIconRow;