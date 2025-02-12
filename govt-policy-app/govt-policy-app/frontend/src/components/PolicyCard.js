import React from 'react';
import PropTypes from 'prop-types';
import './PolicyCard.css'; // Assuming you have a CSS file for styling

const PolicyCard = ({ title, description, eligibility, benefits }) => {
    return (
        <div className="policy-card">
            <h2 className="policy-title">{title}</h2>
            <p className="policy-description">{description}</p>
            <h4 className="policy-eligibility">Eligibility: {eligibility}</h4>
            <h4 className="policy-benefits">Benefits: {benefits}</h4>
            <button className="register-button">Register Now</button>
        </div>
    );
};

PolicyCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    eligibility: PropTypes.string.isRequired,
    benefits: PropTypes.string.isRequired,
};

export default PolicyCard;