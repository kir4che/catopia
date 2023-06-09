import AdoptionFilter from '@/components/AdoptionFilter';
import AdoptionPost from '@/components/AdoptionPost';
import { useState } from 'react';

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
    <div className="w-full mx-auto mt-8 mb-20">
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