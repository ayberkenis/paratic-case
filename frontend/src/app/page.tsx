import type { Rate } from "@/types/rate";

import ExchangeRatePreview from "./components/exchangeRatePreview";
import LiveExchangeRate from "./components/liveExchangeRate";
import BankRates from "./components/bankRates";
import Comments from "./components/comments";


async function fetchHomePageData(exchange_code: string): Promise<Rate[]> {
  /* 
  This function fetches the home page data from the API. 
  Defaults to USD/TRY exchange. 


  */
  const response = await fetch(`http://localhost:8000/api/rates/${exchange_code}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}




export default async function Home() {
  const DEFAULT_CODE = 'USDTRY';
  const data = await fetchHomePageData(DEFAULT_CODE);

  return (
    <main className="flex min-h-screen flex-col px-2 py-4">
      <div className="flex-col grid grid-cols-2 lg:grid-rows-2 xl:flex xl:flex-row gap-4">
        <div className="lg:order-1 flex flex-col px-4">
          <ExchangeRatePreview data={data[0]} />
          <LiveExchangeRate />
        </div>
        <div className="order-3 lg:order-2 xl:order-2 2xl:order-2 col-span-1 sm:col-span-2 flex flex-col px-4 bank-rates-container">
          <BankRates />
        </div>
        <div className="order-2 lg:order-3 xl:order-3 2xl:order-3 flex flex-col gap-4 comments-container">
          <Comments exchange_code={DEFAULT_CODE} />
        </div>
      </div>

    </main>
  );
}
