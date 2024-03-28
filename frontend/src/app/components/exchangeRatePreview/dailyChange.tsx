import { ArrowDown } from "@/app/commons/icons";
import Image from "next/image";


function ArrowIcon({direction}: {direction: 'up' | 'down'}) {
    return (
        <ArrowDown className={direction === "up" ? "arrow-up" : "arrow-down"} height={30} width={30} color={direction === 'up' ? '#2DCE89' : '#E84257' }/>
    )
}

export default function DailyChange({percent}: {percent: number}) {
    return (
        <div className="change-container flex flex-row">
            {
                Math.sign(percent) === -1 ? <ArrowIcon direction="down" /> : <ArrowIcon direction="up" />
            }
            <div className={`change ${Math.sign(percent) === -1 ? 'down' : 'up'}`}>
                <span className="change-icon"></span>
                <span className="change-value">%{percent}</span>
            </div>
        </div>
    )
}