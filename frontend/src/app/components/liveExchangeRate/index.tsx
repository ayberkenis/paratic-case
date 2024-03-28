import '@/assets/css/live.component.css';

export default function LiveExchangeRate() {

    /* 
    
    */
    return (
        <div className="flex flex-col items-center justify-start live-exchange-rate max-w-[440px] w-full px-4">
            <div className="live-title w-full flex">
                <span className='text-start justify-start'>Canlı Dolar Fiyatı</span>
            </div>
            <div className='table-head flex flex-row justify-end gap-12 w-full'>
                <span className="table-head-title">Alış</span>
                <span className="table-head-title">Satış</span>
            </div>
            <div className="live-rate-table flex flex-row items-center justify-between w-full">
                <div className='banks flex flex-col'>
                    <span className="bank-name">Spot Piyasa</span>
                    <span className="bank-name">Serbest Piyasa</span>
                    <span className="bank-name">TCMB</span>
                </div>
                <div className='rates flex flex-col'>
                    <div className='buy-sell-rates flex flex-row gap-12'>
                        <span className="rate">8.70</span>
                        <span className="rate">8.70</span>
                    </div>
                    <div className='buy-sell-rates flex flex-row gap-12'>
                        <span className="rate">8.70</span>
                        <span className="rate">8.70</span>
                    </div>
                    <div className='buy-sell-rates flex flex-row gap-12'>
                        <span className="rate">8.70</span>
                        <span className="rate">8.70</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
