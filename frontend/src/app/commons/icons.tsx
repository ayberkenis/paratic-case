export function ArrowDown({ className, color, width, height }: { className: string, color: string, width: number, height: number }) {
    return (
        <div className={className}>
        <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.2493 8.74982L8.74927 21.2498" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21.2493 21.2498H8.74927V8.74982" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </div>
    )
}
