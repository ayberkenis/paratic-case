import type {Rate} from "@/types/rate"; 

import ExchangeRatePreview from "./components/exchangeRatePreview";


async function fetchHomePageData(): Promise<Rate[]> {
    const response = await fetch('http://localhost:8000/api/rates/USDTRY');
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
  }


export default async function Home() {
  const data = await fetchHomePageData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ExchangeRatePreview data={data[0]} />
    </main>
  );
}
