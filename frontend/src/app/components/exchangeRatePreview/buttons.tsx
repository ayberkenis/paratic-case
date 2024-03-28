

import '@/assets/css/buttons.layout.css';
import { useState } from 'react';

interface ButtonProps {
    rate: number;
    href: string;
}

interface IntervalButtonProps {
    active?: boolean;
    interval: String;
    onClick: () => void;
}

export function BuyButton({rate, href} : ButtonProps ) {
    return (
        <a className="button buy-button" target='__blank' href={href}>
            <span className="button-title">Al</span>
            <span className="button-subtitle">{rate}</span>
        </a>
    )
}

export function SellButton({rate, href} : ButtonProps ) {
    return (
        <a className="button sell-button"  target='__blank' href={href}>
            <span className="button-title">Sat</span>
            <span className="button-subtitle">{rate}</span>
        </a>
    )
}

export function IntervalButton({active, interval, onClick} : IntervalButtonProps ) {
    return (
        <div className={`interval-button ${active ? 'active' : ''}`} onClick={onClick}>
            <span className="button-text">{interval}</span>
        </div>
    )
}

export function IntervalActions() {


    const [activeInterval, setActiveInterval] = useState('24s');
    return (
        <div className="interval-actions flex flex-row gap-2">
            <IntervalButton active={activeInterval == '24s' ? true : false} interval="24s" onClick={() => setActiveInterval('24s')}/>
            <IntervalButton active={activeInterval == '1h' ? true : false} interval="1h" onClick={() => setActiveInterval('1h')}/>
            <IntervalButton active={activeInterval == '1y' ? true : false} interval="1y" onClick={() => setActiveInterval('1y')}/>
        </div>
    )
}