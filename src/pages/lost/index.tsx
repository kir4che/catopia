import { useState } from 'react';

import AlertInfo from '@/components/AlertInfo';
import LostFilter from '@/components/LostFilter';
import LostPost from '@/components/LostPost';

interface ParamType {
  sex: string;
  location: string;
}

export default function Lost() {
  const [filterValues, setFilterValues] = useState<ParamType>({ sex: '', location: '' });

  const handleFilterChange = (sex: string, location: string) => {
    setFilterValues({ sex, location })
  }

  return (
    <div className="w-full px-10 mx-auto mt-6 mb-20">
      <AlertInfo info={'資料來源於行政院農委會的動物認領養 API，尋獲及領回貓咪的飼主，記得至登記站辦理登記～'} />
      <div className="flex flex-row flex-wrap">
        <aside className="hidden lg:block lg:w-1/5">
          <LostFilter onFilterChange={handleFilterChange} />
        </aside>
        <main className="lg:w-4/5">
          <LostPost {...filterValues} />
        </main>
      </div >
    </div >
  )
}