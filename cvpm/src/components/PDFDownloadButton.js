import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';

const PDFDownloadButton = ({ cvData }) => (
  <PDFDownloadLink
    document={<PDFDocument cvData={cvData} />}
    fileName="SamalAli_CV.pdf"
    className="export-button"
  >
    {({ loading }) => (
      <button className="download-button">
        {loading ? 'Generating PDF...' : 'Export PDF'}
      </button>
    )}
  </PDFDownloadLink>
);

export default PDFDownloadButton;