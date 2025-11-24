import React from 'react';

export interface Message {
    id: string;
    role: 'user' | 'model';
    text: string;
}

export interface FeatureCardProps {
    title: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
    fullHeight?: boolean;
}