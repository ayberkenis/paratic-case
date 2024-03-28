import type { Rate } from "@/types/rate";

import ExchangeRatePreview from "./components/exchangeRatePreview";
import LiveExchangeRate from "./components/liveExchangeRate";
import BankRates from "./components/bankRates";
import Comments from "./components/comments";


async function fetchHomePageData(): Promise<Rate[]> {
  /* 
  This function fetches the home page data from the API. 
  Defaults to USD/TRY exchange. 


  */
  const response = await fetch('http://localhost:8000/api/rates/USDTRY');

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}


export default async function Home() {
  const data = await fetchHomePageData();

  return (
    <main className="flex min-h-screen flex-col px-2 py-4">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col px-4">
          <ExchangeRatePreview data={data[0]} />
          <LiveExchangeRate />
        </div>
        <div className="flex flex-col px-4 bank-rates-container">
          <BankRates />
        </div>
        <div className="flex flex-col gap-4 comments-container">
          <Comments />
        </div>
      </div>

    </main>
  );
}
