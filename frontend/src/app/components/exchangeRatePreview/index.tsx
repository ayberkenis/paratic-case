import Image from "next/image";
import { BuyButton, IntervalButton, SellButton } from "./buttons";
import '@/assets/css/erp.component.css';
import helpTooltip from '@/assets/img/helpTooltip.svg';
import ProgressBar from "./progressBar";
import type {Rate} from "@/types/rate"; 
import ChangeInterval from "./changeInterval";
import DailyChange from "./dailyChange";


interface RateData {
    data: Rate;
}

export default function ExchangeRatePreview({data}: RateData) {
    console.log(data)
    return (
        <div className="exchange-rate-preview">
            <div className="exchange-rate-info">
                <div className="container">
                    <div className="flag">
                        <Image src="https://flagcdn.com/us.svg" alt={data.Description} width={45} height={45} className="rounded-full aspect-square  object-cover object-center" />
                    </div>
                    <div className="rate-name-iso">
                        <span className="rate-name">{data.Description}</span>
                        <span className="rate-iso">{data.Code}</span>
                    </div>
                </div>
                <div className="tooltip self-start">
                    <Image src={helpTooltip} alt="info" width={24} height={24} />
                </div>
            </div>
            <div className="exchange-rate-live">
                <div className="rate">
                    <span className="rate-value">{data.Last}</span>

                </div>
                <DailyChange percent={data.DailyChangePercent} />
            </div>
            <div className="exchange-rate-previous">
            </div>
            <div className="buy-sell-actions flex flex-row gap-4">
                <BuyButton rate={data.Bid} onClick={() => console.log('')}/>
                <SellButton  rate={data.Ask} onClick={() => console.log('')}/>
            </div>
            <span className="sponsored-text">
                Sponsorlu
            </span>
            <div className="interval-actions flex flex-row gap-2">
                <IntervalButton interval="24s" onClick={() => console.log('')}/>
                <IntervalButton interval="1h" onClick={() => console.log('')}/>
                <IntervalButton interval="1y" onClick={() => console.log('')}/>
            </div>

            <div className="exchange-rate-progress w-full px-4">
                <ProgressBar lowest={data.Low} highest={data.High} current={data.Last} />
            </div>
            <div className="exchange-rate-changes w-full px-4">
                <div className="changes-title font-inter">
                    Dolar Değişim Oranları
                </div>
                <div className="changes-table">
                    <div className="change-row">
                        <div className="change-text">
                            Değişim(%)
                        </div>
                        <div className="change-intervals flex flex-row gap-4">
                            <ChangeInterval intervalName="Günlük" dcp={data.DailyChangePercent} />
                            <ChangeInterval intervalName="Haftalık" dcp={data.WeeklyChangePercent} />
                            <ChangeInterval intervalName="Aylık" dcp={data.MonthlyChangePercent} />
                            <ChangeInterval intervalName="Yıllık" dcp={data.YearlyChangePercent} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}