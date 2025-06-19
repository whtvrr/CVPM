import React from 'react';

const ContentGroup = ({ group }) => (
  <div className="content-group">
    <h2 className="group-title">{group.title}</h2>
    
    {group.items.map((item, itemIndex) => (
      <div key={itemIndex} className="content-item">
        <div className="header-row">
          <h3 className="header1">{item.header1}</h3>
          {item.location && <span className="location">{item.location}</span>}
        </div>
        
        <div className="subheader-row">
          {item.header2 && <h4 className="header2">{item.header2}</h4>}
          {item.duration && <span className="duration">{item.duration}</span>}
        </div>
        
        {item.text.length > 0 && (
          <ul className="text-list">
            {item.text
              .filter(line => line.trim() !== '')
              .map((line, lineIndex) => (
                <li key={lineIndex} className="text-item">{line}</li>
              ))}
          </ul>
        )}
      </div>
    ))}
  </div>
);

export default ContentGroup;