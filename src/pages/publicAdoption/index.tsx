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
    <div className="w-full pt-4 pb-20 mx-auto">
      <AlertInfo info={'資料來源於行政院農委會的動物認領養 API，集合所有的公立收容所送養貓咪之資訊，有意領養請直洽各區收容所。'} />
      <div className="flex pt-12 sm:space-x-12 lg:space-x-20">
        <aside className="hidden md:block">
          <AdoptionFilter onFilterChange={handleFilterChange} />
        </aside>
        <main>
          <AdoptionPost {...filterValues} />
        </main>
      </div >
    </div >
  )
}