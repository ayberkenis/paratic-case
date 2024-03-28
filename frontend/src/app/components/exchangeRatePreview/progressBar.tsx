import Arrow from '@/assets/img/progressArrow.svg';
import Image from 'next/image';


interface ProgressBarProps {
    lowest: number;
    highest: number;
    current: number;
}

export default function ProgressBar({
    lowest,
    highest,
    current
}: ProgressBarProps) {
    const progress = (current - lowest) / (highest - lowest) * 100;
    return (
        <div className="progress-container w-full">
            <div className="upper flex flex-row justify-between items-center w-full">
                <div className="lowest">
                    <span className="lowest-text">En Düşük</span> <span className="lowest-price">{lowest}</span>
                </div>

                <div className="highest">
                    <span className="highest-text">En Yüksek</span> <span className="highest-price">{highest}</span>
                </div>
            </div>
            <div className="progress-bar">
                <div className="progress-bar-inner" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="bottom flex flex-row justify-between items-center w-full px-4">
                <span className="down-chevron" style={{
                    marginLeft: `calc(${progress}% - 1.5rem)`
                }}>
                    <Image src={Arrow} alt="arrow" />
                    <span className="current-price">{current}</span>
                </span> 

            </div>
        </div>
    )
}