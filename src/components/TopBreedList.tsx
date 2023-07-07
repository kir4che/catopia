"use client"

import { getBreedImg, getBreedInfo } from '@/services/getBreed';
import { useEffect, useState } from 'react';

export default function TopBreedList() {
  const topBreedIds: string[] = ['mcoo', 'ragd', 'pers', 'sphy']
  const [topBreed, setTopBreed] = useState<{ url: string; name: string }[]>([]);

  useEffect(() => {
    fetchBreedImg();
  }, []);

  const fetchBreedImg = async () => {
    try {
      const topBreedList: { url: string; name: string }[] = [];
      for (const id of topBreedIds) {
        const data = await getBreedImg(id);
        const data2 = await getBreedInfo(data[0]?.id || '')
        topBreedList.push({ url: data[0]?.url || '', name: data2.breeds[0]?.name || '' })
      }
      setTopBreed(topBreedList);
    } catch (error) {
      console.error('發生錯誤:', error);
    }
  };

  return (<>
    {topBreed.map((breed, index) => (
      <div key={index}>
        <img className='object-cover w-full h-64 mb-3 rounded-xl xl:h-56' src={breed.url} alt={breed.name} />
        <h3 className='font-medium text-center md:text-left'>{breed.name}</h3>
      </div>
    ))}
  </>)
}