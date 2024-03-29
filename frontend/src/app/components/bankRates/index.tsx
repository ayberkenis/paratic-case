import '@/assets/css/bankRates.component.css';
import { priceFormatter } from '@/utils/priceFormatter';
import Image from 'next/image';

interface BankProps {
    name: string;
    image: string;
    buy_rate: number;
    sell_rate: number;
    spread_rate: number;
}


async function Bank({ name, image, buy_rate, sell_rate, spread_rate }: BankProps) {

    return (
        <div className='bank flex flex-row justify-between'>
            <div className='bank-info flex flex-row items-center gap-8 w-1/3'>
                <Image src={`http://localhost:8000/api/assets/${image}`} alt='Banka' width={0} height={0} className='bank-logo' style={{
                    width: 'auto',
                    height: '24px'
                }} quality={100} />
                <span className='bank-name'>{name}</span>

            </div>
            <div className='bank-rates flex flex-row justify-between items-center w-3/4'>
                <span className='rate'>{priceFormatter(buy_rate)}</span>
                <span className='rate'>{priceFormatter(sell_rate)}</span>
                <span className='rate'>{priceFormatter(spread_rate)}</span>
            </div>

        </div>
    )
}

export default async function BankRates() {
    const banks = await (await fetch('http://localhost:8000/api/rates/banks/all')).json()
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
                <div className='banks mt-4'>
                    {
                        [
                            // Filter banks with name 'GCM Yatırım' and map to Bank component as it is sponsored, it should be in the 1st row
                            ...banks.filter((bank: BankProps) => bank.name === 'GCM Yatırım').map((bank: BankProps) => (
                                <Bank key={bank.name} image={bank.image} name={bank.name} buy_rate={bank.buy_rate} sell_rate={bank.sell_rate} spread_rate={bank.spread_rate} />
                            )),
                            // Map all other banks except 'GCM Yatırım' to Bank component
                            ...banks.filter((bank: BankProps) => bank.name !== 'GCM Yatırım').map((bank: BankProps) => (
                                <Bank key={bank.name} image={bank.image} name={bank.name} buy_rate={bank.buy_rate} sell_rate={bank.sell_rate} spread_rate={bank.spread_rate} />
                            ))
                        ]
                    }
                </div>

            </div>
        </div>
    )
}