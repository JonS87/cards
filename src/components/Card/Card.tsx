import React from 'react';
import { CardBody } from './CardBody';
import { CardImage } from './CardImage';
import { CardProps } from '../../types';

export const Card: React.FC<CardProps> = ({ title, text, imageUrl, children }) => {
    return (
        <div className="card" >
            {imageUrl && <CardImage imageUrl={imageUrl} alt={title} />}
            <div className="card-body">
                <CardBody title={title} text={text} />
                {children}
            </div>
        </div>
    );
};
