import React, { useState } from 'react';
import Header from './components/Header';
import ContentGroup from './components/ContentGroup';
import PDFDownloadButton from './components/PDFDownloadButton';
import initialData from './data/cvData.json';
import './App.css';

function App() {
  const [cvData] = useState(initialData);
  
  return (
    <div className="app-background">
      <div className="app-container">
        <div className="cv-paper">
          <Header head={cvData.head} />
          
          <div className="content-container">
            {cvData.content.map((group, index) => (
              <ContentGroup key={index} group={group} />
            ))}
          </div>
        </div>
        
        <div className="controls">
          <PDFDownloadButton cvData={cvData} />
        </div>
      </div>
    </div>
  );
}

export default App;