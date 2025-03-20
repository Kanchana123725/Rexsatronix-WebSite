import React, { useState } from 'react';
import './Readmore.css'; // Make sure to import the CSS for styling
import { jsPDF } from "jspdf"; // Import jsPDF

const ReadMoreComponent: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to handle the "Read More" button click
  const handleReadMoreClick = () => {
    setIsModalVisible(true); // Show the modal when "Read More" is clicked
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalVisible(false); // Close the modal when "X" is clicked
  };

  // Function to generate PDF and trigger the download
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Get the images as base64 (assuming you have the images in the public folder)
    const image1 = document.getElementById("modal-image-1") as HTMLImageElement;
    const image2 = document.getElementById("modal-image-2") as HTMLImageElement;

    if (image1 && image2) {
      // Add the first image to the PDF
      doc.addImage(image1, 'JPEG', 10, 10, 180, 160); // Image 1 at coordinates (10, 10)
      
      // Add the second image below the first one
      doc.addImage(image2, 'JPEG', 10, 180, 180, 160); // Image 2 at coordinates (10, 180)

      // Save the PDF as a file
      doc.save("downloaded-images.pdf");
    }
  };

  return (
    <div className="read-more-container">
      {/* Read More Button */}
      <button className="read-more-button" onClick={handleReadMoreClick}>
        Read More
      </button>

      {/* Modal */}
      {isModalVisible && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>
            <img
     
      src="/image/close.png"
      alt="close"
    
    />
            </button>
           
            <div className="modal-body">
  {/* Container for images stacked vertically without gap */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    {/* Image 1 */}
    <img
      id="modal-image-1"
      src="/image/img1.jpg"
      alt="img1"
      style={{
        maxWidth: '150%',
        height: 'auto',
        marginBottom: '0', // Ensures no space between images
      }}
    />
    {/* Image 2 */}
    <img
      id="modal-image-2"
      src="/image/img11.jpg"
      alt="img11"
      style={{
        maxWidth: '150%',
        height: 'auto',
        marginTop: '0', // Ensures no space between images
      }}
    />
   <button
  onClick={handleDownloadPDF}
  style={{
    backgroundColor: '#2124b1',
    color: 'white', 
    border: 'none', // No border
    padding: '10px 20px', // Add padding around the text
    fontSize: '16px', // Font size
    cursor: 'pointer', // Pointer cursor on hover
    borderRadius: '10px'
  }}
  
>
  Download PDF
</button>

  </div>
</div>

        </div>
        </div>
      )}
    </div>
  );
};

export default ReadMoreComponent;



