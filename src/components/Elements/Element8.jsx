import React from 'react';
import './Element8.scss'; // Ensure the path is correct

const Element8 = () => {
  return (
    <div className="element8-container container" style={{ marginTop:'100px' }}>
      <div className="text-center">
      <br></br>
      <h3 className="element8-heading2">Why Choose us</h3>
      <br></br>
        <h2 className="element8-heading">People choose us because we serve the <br />best for everyone</h2>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="element8-content">
            <div className="d-flex align-items-center">
              <img src="/Assests/Icon.png" alt="Icon" className="img-fluidn" />
              <h3 className="element8-subheading"style={{ fontSize: '24px' }}>Associative</h3>
            </div>
            <p className="element8-subparagraph"style={{ fontSize: '18px' }}>Lorem ipsum dolor sit amet consectetur. Elementum odio amet tempor adipiscing nunc libero non.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="element8-content">
            <div className="d-flex align-items-center">
              <img src="/Assests/Icon (1).png" alt="Icon" className="img-fluidn" />
              <h3 className="element8-subheading"style={{ fontSize: '24px' }}>Ecological</h3>
            </div>
            <p className="element8-subparagraph"style={{ fontSize: '18px' }}>Lorem ipsum dolor sit amet consectetur. Elementum odio amet tempor adipiscing nunc libero non.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="element8-content">
            <div className="d-flex align-items-center">
              <img src="/Assests/Icon (2).png" alt="Icon" className="img-fluidn" />
              <h3 className="element8-subheading"style={{ fontSize: '24px' }}>Privacy</h3>
            </div>
            <p className="element8-subparagraph"style={{ fontSize: '18px' }}>Lorem ipsum dolor sit amet consectetur. Elementum odio amet tempor adipiscing nunc libero non.</p>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Element8;
