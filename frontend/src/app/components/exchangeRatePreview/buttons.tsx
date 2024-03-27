import '@/assets/css/buttons.layout.css';


interface ButtonProps {
    rate: number;
    onClick: () => void;
}

interface IntervalButtonProps {
    interval: String;
    onClick: () => void;
}

export function BuyButton({rate, onClick} : ButtonProps ) {
    return (
        <div className="button buy-button">
            <span className="button-title">Al</span>
            <span className="button-subtitle">{rate}</span>
        </div>
    )
}

export function SellButton({rate, onClick} : ButtonProps ) {
    return (
        <div className="button sell-button">
            <span className="button-title">Sat</span>
            <span className="button-subtitle">{rate}</span>
        </div>
    )
}

export function IntervalButton({interval, onClick} : IntervalButtonProps ) {
    return (
        <div className="interval-button">
            <span className="button-text">{interval}</span>
        </div>
    )
}

