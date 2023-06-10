import { useState } from 'react';

import AdoptionFilter from '@/components/AdoptionFilter';
import AdoptionPost from '@/components/AdoptionPost';
import AlertInfo from '@/components/AlertInfo';

interface ParamType {
  city: number;
  age: string;
  sex: string;
}

export default function PublicAdoption() {
  const [filterValues, setFilterValues] = useState<ParamType>({ city: 0, age: '', sex: '' });

  const handleFilterChange = (city: number, age: string, sex: string) => {
    setFilterValues({ city, age, sex })
  }

  return (
    <div className="w-full px-10 mx-auto mt-6 mb-20">
      <AlertInfo info={'資料來源於行政院農委會的動物認領養 API，集合所有的公立收容所送養貓咪之資訊，有意領養請直洽各區收容所。'} />
      <div className="flex flex-row flex-wrap">
        <aside className="hidden lg:block lg:w-1/5">
          <AdoptionFilter onFilterChange={handleFilterChange} />
        </aside>
        <main className="lg:w-4/5">
          <AdoptionPost {...filterValues} />
        </main>
      </div >
    </div >
  )
}