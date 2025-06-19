import React from 'react';

const Header = ({ head }) => (
  <header className="cv-header">
    <h1 className="name">{head.name}</h1>
    
    <div className="contact-info">
      <span className="location">{head.location}</span>
      <span className="divider">•</span>
      <span className="email">{head.email}</span>
      <span className="divider">•</span>
      <span className="phone">{head.phone_Number}</span>
    </div>
    
    <div className="links">
      {head.links.map((link, index) => (
        <a 
          key={index} 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="link"
        >
          {link.includes('linkedin') ? 'LinkedIn' : 'GitHub'}
        </a>
      ))}
    </div>
  </header>
);

export default Header;