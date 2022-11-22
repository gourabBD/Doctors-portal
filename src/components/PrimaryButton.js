import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button 
        className="btn btn-primary bg-gradient-to-r from-pink-600 to-red-600 text-white">{children}</button>
    );
};

export default PrimaryButton;