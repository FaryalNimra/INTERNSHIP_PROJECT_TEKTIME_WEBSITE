import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Element3.scss'; // Ensure the path is correct

const Element3 = () => {
  return (
    <div className="element3-container container">
      <div className="row">
        <div className="col-md-4 element3-col">
          <div className="text-center">
            <h2 className="element3-heading">47%</h2>
            <p className="element3-paragraph">Employees believe that meetings are the biggest waste of time at work.</p>
          </div>
        </div>

        <div className="col-md-4 element3-col">
          <div className="text-center">
            <h2 className="element3-heading">€100M</h2>
            <p className="element3-paragraph">Lost per year by companies due to ineffective meetings.</p>
          </div>
        </div>

        <div className="col-md-4 element3-col">
          <div className="text-center">
            <h2 className="element3-heading">34%</h2>
            <p className="element3-paragraph">Employees are burnt out, with 13% being severely burnt out.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Element3;
