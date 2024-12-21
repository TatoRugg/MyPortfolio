// src/ResumeExport.js
import jsPDF from 'jspdf';

const ResumeExport = (sidebarInfo, experiences, projects, tools) => {
  const doc = new jsPDF('p', 'mm', 'a4'); // A4 size paper

  // Set colors and fonts
  doc.setFillColor(30, 30, 30); // Dark background color
  doc.rect(0, 0, 60, 297, 'F'); // Left dark rectangle filling height of A4

  // Profile photo
  if (sidebarInfo.photo) {
    doc.addImage(sidebarInfo.photo, 'JPEG', 0, 0, 60, 60); // Full corner photo, no padding
  }

  // Full name
  doc.setTextColor(255, 255, 255); // White text color for the left section
  doc.setFontSize(16);
  doc.text(sidebarInfo.fullName, 10, 70); // Adjusted positioning for name

  // Current position
  doc.setFontSize(12);
  doc.text(sidebarInfo.currentPosition, 10, 80); // Adjusted positioning

  // About Me / Description
  doc.setFontSize(10);
  doc.text('About Me', 10, 100); // Adjusted positioning
  doc.setFontSize(9);
  doc.text(doc.splitTextToSize(sidebarInfo.description, 50), 10, 110); // Wrap text, no padding

  // Skills / Tools
  doc.setFontSize(10);
  doc.text('Skills', 10, 160); // Adjusted positioning
  tools.forEach((tool, index) => {
    doc.setFontSize(9);
    doc.text(`- ${tool.name}`, 10, 170 + index * 5); // List skills, no padding
  });

  // Move to the right side for the rest of the content
  doc.setTextColor(0, 0, 0); // Black text color
  doc.setFontSize(16);
  doc.text(sidebarInfo.fullName, 70, 30); // Full name in the main section
  doc.setFontSize(10);
  doc.text('Contact Info', 70, 40); // Example placeholder

  // Experience Section
  doc.setFontSize(14);
  doc.text('Experience', 70, 60);
  experiences.forEach((exp, index) => {
    doc.setFontSize(10);
    doc.text(`${exp.title} (${exp.date})`, 70, 70 + index * 20);
    doc.setFontSize(9);
    doc.text(doc.splitTextToSize(exp.description, 120), 70, 75 + index * 20); // Wrap text for descriptions
  });

  // Projects Section
  doc.setFontSize(14);
  doc.text('Projects', 70, 140);
  projects.forEach((project, index) => {
    doc.setFontSize(10);
    doc.text(`${project.title}`, 70, 150 + index * 20);
    doc.setFontSize(9);
    doc.text(doc.splitTextToSize(project.description, 120), 70, 155 + index * 20); // Wrap text for descriptions
  });

  // Save the PDF
  doc.save('resume.pdf');
};

export default ResumeExport;
