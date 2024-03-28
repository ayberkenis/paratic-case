"use client"
import '@/assets/css/tooltip.layout.css';
import { useState } from "react"
import helpTooltip from '@/assets/img/helpTooltip.svg';
import Image from 'next/image';

interface TooltipProps {
    children?: React.ReactNode;
    text: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
}

export default function Tooltip({ children, text, position }: TooltipProps) {
    const [show, setShow] = useState(false)


    return (
        <div className='tooltip-wrapper'>

            <span className={`tooltip-button ${show === true ? 'active' : ''}`} onClick={() => setShow(!show)}>
                <Image src={helpTooltip} alt="info" width={24} height={24} />
            </span>
            {
                show && <div className={`tooltip-container ${position}`}>
                    {children}
                    <span className="tooltip-text">{text}</span>
                </div>
            }

        </div>
    )
}