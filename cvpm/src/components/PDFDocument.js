import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link, Font } from '@react-pdf/renderer';

// Register fonts (using Roboto for confidence/IT look)
Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf',
      fontWeight: 400,
    },
    {
      src: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc9.ttf',
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  page: { 
    padding: 22, 
    fontFamily: 'Roboto',
    backgroundColor: '#fffcea'
  },
  header: { 
    marginBottom: 10,
    textAlign: 'center'
  },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#5e0f0f',
    marginBottom: 5
  },
  contact: { 
    fontSize: 12, 
    flexDirection: 'row', 
    justifyContent: 'center',
    gap: 4,
    marginBottom: 4
  },
  group: { 
    marginBottom: 7 
  },
  groupTitle: { 
    fontSize: 15, 
    fontWeight: 'bold', 
    textAlign: 'center',
    color: '#5e0f0f',
    marginBottom: 7,
    borderBottom: '1px solid #2f060c',
    paddingBottom: 2
  },
  item: { 
    marginBottom: 6 
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2
  },
  header1: { 
    fontSize: 12,
    fontWeight: 'bold' 
  },
  location: { 
    fontSize: 11
  },
  subheaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  header2: { 
    fontSize: 11 
  },
  duration: { 
    fontSize: 11
  },
  list: { 
    marginLeft: 10 
  },
  listItem: { 
    fontSize: 11, 
    marginBottom: 2 
  },
  link: { 
    fontSize: 12, 
    color: '#5e0f0f' 
  }
});


const PDFDocument = ({ cvData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{cvData.head.name}</Text>
        <View style={styles.contact}>
          <Text>{cvData.head.location}</Text>
          <Text>•</Text>
          <Text>{cvData.head.email}</Text>
          <Text>•</Text>
          <Text>{cvData.head.phone_Number}</Text>
        </View>
        <View style={styles.contact}>
          {cvData.head.links.map((link, i) => (
            <Link key={i} src={link} style={styles.link}>
              {link.includes('linkedin') ? 'LinkedIn' : 'GitHub'}
            </Link>
          ))}
        </View>
      </View>

      {/* Grouped Content Sections */}
      {cvData.content.map((group, groupIndex) => (
        <View key={groupIndex} style={styles.group}>
          <Text style={styles.groupTitle}>{group.title}</Text>
          
          {group.items.map((item, itemIndex) => (
            <View key={itemIndex} style={styles.item}>
              <View style={styles.headerRow}>
                <Text style={styles.header1}>{item.header1}</Text>
                {item.location && <Text style={styles.location}>{item.location}</Text>}
              </View>
              
              <View style={styles.subheaderRow}>
                {item.header2 && <Text style={styles.header2}>{item.header2}</Text>}
                {item.duration && <Text style={styles.duration}>{item.duration}</Text>}
              </View>
              
              {item.text.length > 0 && (
                <View style={styles.list}>
                  {item.text
                    .filter(line => line.trim() !== '')
                    .map((line, lineIndex) => (
                      <Text key={lineIndex} style={styles.listItem}>• {line}</Text>
                    ))}
                </View>
              )}
            </View>
          ))}
        </View>
      ))}
    </Page>
  </Document>
);

export default PDFDocument;