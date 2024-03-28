import '@/assets/css/bankRates.component.css';
import Image from 'next/image';

interface BankProps {
    name: string;
    buy: number;
    sell: number;
    spread: number;
}


function Bank({ name, buy, sell, spread }: BankProps) {
    return (
        <div className='bank flex flex-row justify-between'>
            <div className='bank-info flex flex-col items-center gap-8'>
                <Image src='/bank.png' alt='Banka' width={32} height={32} />
                <span className='bank-name'>{name}</span>

            </div>
            <span className='bank-rate'>{buy}</span>
            <span className='bank-rate'>{sell}</span>
            <span className='bank-rate'>{spread}</span>
        </div>
    )
}

export default function BankRates() {
    return (
        <div className="bank-rates">
            <div className='bank-rates-title'>
                <span>Bankaların Dolar Fiyatları</span>
            </div>
            <div className='bank-rates-table'>
                <div className='table-head'>
                    <span className='table-head-title'>Banka</span>
                    <span className='table-head-title'>Alış</span>
                    <span className='table-head-title'>Satış</span>
                    <span className='table-head-title'>Makas</span>
                </div>
                <div className='banks'>
                    <Bank name='Akbank' buy={8.70} sell={8.80} spread={0.0100} />
                    <Bank name='Akbank' buy={8.70} sell={8.80} spread={0.0100} />
                    <Bank name='Akbank' buy={8.70} sell={8.80} spread={0.0100} />
                    <Bank name='Akbank' buy={8.70} sell={8.80} spread={0.0100} />
                </div>

            </div>
        </div>
    )
}