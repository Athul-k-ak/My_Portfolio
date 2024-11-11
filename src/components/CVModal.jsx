// src/components/CVModal.jsx
import React from 'react';
import './CVModal.css';

const CVModal = ({ onClose }) => {
    const handleDownload = () => {
        // Trigger download
        const link = document.createElement('a');
        link.href = '/Athul_CV.pdf'; // Direct path to PDF in public folder
        link.download = 'Athul_CV.pdf';
        link.click();
        onClose();
    };

    return (
        <div className="cv-modal-overlay">
            <div className="cv-modal">
                <h2>Preview CV</h2>
                <iframe src="/Athul_CV.pdf" title="CV Preview" className="cv-preview" />
                <div className="modal-buttons">
                    <button className="confirm-btn" onClick={handleDownload}>Confirm Download</button>
                    <button className="cancel-btn" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default CVModal;
