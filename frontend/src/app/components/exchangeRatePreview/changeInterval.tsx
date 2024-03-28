export default function ChangeInterval({intervalName, dcp}: {intervalName: string, dcp: number}) {
    return (
        <span className="change-interval flex flex-col">
            <span className="change-interval-text">{intervalName}</span>
            <span className={`change-interval-value ${Math.sign(dcp) === -1 ? 'down' : 'up'}`}>{dcp}</span>
        </span>
    )
}