import React from 'react';

export const CardImage: React.FC<{ imageUrl: string; alt: string }> = ({ imageUrl, alt }) => {
    return <img src={imageUrl} className="card-img-top" alt={alt} />;
};
