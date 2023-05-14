import React from 'react'
import './css/Service.css'
const Service = () => {
  return (
    <div className="service-section">
      <h2 className="service-title">Our Services</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="service-card">
            <div className="service-card-content">
              <h3 className="service-card-title">Training & Capacity Building</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-card">
            <div className="service-card-content">
              <h3 className="service-card-title">Farm Visit & Housing Quotation</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-card">
            <div className="service-card-content">
              <h3 className="service-card-title">Production Costing and Budget</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-card">
            <div className="service-card-content">
              <h3 className="service-card-title">Farm Support and Technical Assistance</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
