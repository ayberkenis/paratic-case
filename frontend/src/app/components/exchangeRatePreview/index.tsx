import { BuyButton, IntervalButton, SellButton } from "./buttons";
import '@/assets/css/erp.component.css';

interface ExchangeRatePreviewProps {
    iso: string
}



export default function ExchangeRatePreview({iso}: ExchangeRatePreviewProps) {
    return (
        <div className="exchange-rate-preview">
            <div className="exchange-rate-info">
                <div className="flag"></div>
                <div className="rate-name-iso"></div>
                <div className="tooltip"></div>
            </div>
            <div className="exchange-rate-live">
                <div className="rate"></div>
                <div className="change"></div>
            </div>
            <div className="exchange-rate-previous">
            </div>
            <div className="buy-sell-actions flex flex-row gap-4">
                <BuyButton rate={2} onClick={() => console.log('')}/>
                <SellButton  rate={3} onClick={() => console.log('')}/>
            </div>
            <span className="sponsored-text">
                Sponsorlu
            </span>
            <div className="interval-actions flex flex-row gap-2">
                <IntervalButton interval="24s" onClick={() => console.log('')}/>
                <IntervalButton interval="1h" onClick={() => console.log('')}/>
                <IntervalButton interval="1y" onClick={() => console.log('')}/>
            </div>

            <div className="exchange-rate-progress"></div>
            <div className="exchange-rate-changes"></div>
        </div>
    )
}