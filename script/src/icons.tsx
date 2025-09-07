import React, { useState } from 'react';
import './icon.css';

const SimpleIconRow = () => {
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);

  const icons = [
    { id: 1, 
      emoji: '⚛️', 
      title: 'Chemistry',
      info: 'Explore the science of chemistry with these project ideas!', 
      projects: [
        {id: 1, name: 'Chemical Reactions', teacher: 'Jinbachian', status: 'Incomplete', link: "https://theuselessweb.com/"},
        {id: 2, name: 'Organix Chemistry', teacher: 'Halab', status: 'Incomplete', link: "https://theuselessweb.com/"},
        {id: 3, name: 'The body', teacher: 'Gillis', status: 'Incomplete', link: "https://theuselessweb.com/"}
      ]},
    { id: 2, 
      emoji: '🧮', 
      title: 'Mathematics', 
      info: 'Discover the numerical and symbolic world of math with these project ideas!', 
      projects: [
        {id: 1, name: 'Linear Algebra', teacher: 'Charette', status: 'Incomplete', link: "https://theuselessweb.com/"},
        {id: 2, name: 'Cal III', teacher: 'Turner', status: 'In Progress', link: "https://theuselessweb.com/"},
        {id: 3, name: 'Logic', teacher: 'Mailhot', status: 'Complete', link: "https://theuselessweb.com/"},
      ]},
    { id: 3, 
      emoji: '⚡', 
      title: 'Physics', 
      info: 'Learn about the various fields of physics with the help of these project ideas!',
      projects: [
        {id: 1, name: 'Waves', teacher: 'Sabik', status: 'Incomplete', link: "https://theuselessweb.com/"},
        {id: 2, name: 'Nuclear technology', teacher: 'Fatholahzadeh', status: 'Incomplete', link: "https://theuselessweb.com/"},
        {id: 3, name: 'Forces', teacher: 'Sankeralli', status: 'Incomplete', link: "https://theuselessweb.com/"}
      ] },
      
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
        <div className="modal-overlay" onClick={() => setSelectedIcon(null)}>
          <div className="modal-content" onClick={(prevent_close) => prevent_close.stopPropagation()}>
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
              <p>Featured Projects: </p>
              <div className='headers'>
                <span className="name_header">Project Name</span>
                <span className="teacher_header">Teacher Name</span>
                <span className="status_header">Status</span>
              </div>
              <div className='list'>
                <ul className='list_ul'>
                  {icons[selectedIcon-1].projects.map((project) => (
                   <li key={project.id} className='list_item'>
                    <a className="list_link" target="_blank" href={project.link} onClick={(no_close) => no_close.stopPropagation()}>
                      <span className="project_name">{project.name}</span>
                      <span className="project_teacher">{project.teacher}</span>
                      <span className="project_status" data-status={project.status}>{project.status}</span>
                    </a>

                   </li> 
                  ))}
                </ul>
              </div>
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