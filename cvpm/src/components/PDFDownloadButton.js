import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';

const PDFDownloadButton = ({ cvData, language }) => {
  const getFileName = () => {
    const langSuffix = language === 'en' ? 'EN' : language === 'ru' ? 'RU' : 'KZ';
    return `SamalAli_CV_${langSuffix}.pdf`;
  };

  const getButtonText = () => {
    if (language === 'en') return 'Export PDF';
    if (language === 'ru') return 'Экспорт PDF';
    return 'PDF жүктеп алу';
  };

  const getLoadingText = () => {
    if (language === 'en') return 'Generating PDF...';
    if (language === 'ru') return 'Генерация PDF...';
    return 'PDF жасалуда...';
  };

  return (
    <PDFDownloadLink
      document={<PDFDocument cvData={cvData} />}
      fileName={getFileName()}
      className="export-button"
    >
      {({ loading }) => (
        <button className="download-button">
          {loading ? getLoadingText() : getButtonText()}
        </button>
      )}
    </PDFDownloadLink>
  );
};

export default PDFDownloadButton;