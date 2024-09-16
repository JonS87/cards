import React from 'react';

export const CardBody: React.FC<{ title: string; text: string }> = ({ title, text }) => {
    return (
        <>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
        </>
    );
};
