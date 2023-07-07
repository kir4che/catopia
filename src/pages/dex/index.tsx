import { getCatBreeds } from '@/services/getBreeds';
import Link from 'next/link';
import { useEffect, useState } from "react";

import AlertInfo from '@/components/AlertInfo';
import { BreedType } from '@/types/BreedType'; // 根據你的檔案路徑進行調整
import router from 'next/router';


export default function Dex() {
  const [breedInfoList, setBreedInfoList] = useState<BreedType[]>();
  const [top10BreedList, setTop10BreedList] = useState<BreedType[]>();
  const [breedOptions, setBreedOptions] = useState<string[]>();

  const [breedName, setBreedName] = useState<string>('');

  useEffect(() => {
    fetchBreeds()
  }, [])

  const fetchBreeds = async () => {
    try {
      const data = await getCatBreeds('')
      const breedInfo = data.map((breed: BreedType) => {
        return {
          id: breed.id,
          name: breed.name,
          reference_image_id: breed.reference_image_id,
          description: breed.description,
        };
      });
      setBreedInfoList(breedInfo);
      setTop10BreedList(breedInfo.slice(0, 10));
      setBreedOptions(breedInfo.map((breed: { name: string; }) => breed.name));
    } catch (error) {
      console.error('發生錯誤:', error)
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (breedInfoList) {
      const targetBreed = breedInfoList.find((breed) => breed.name === breedName);

      if (breedName && targetBreed) {
        const id = targetBreed.id;
        router.push(`/dex/${id}`);
        setBreedName('');
      } else {
        console.log("找不到該品種的資訊！");
      }
    }
  };

  return (
    <div className='pt-4 px-[8vw]'>
      <AlertInfo info={'由於 The Cat API 有限制流量，目前貓咪品種只能顯示 10 個。'} />
      <form className='flex items-center justify-end pt-4 space-x-2' onSubmit={handleFormSubmit}>
        <select
          className="py-2 pl-3 pr-8 border border-gray-300 rounded"
          value={breedName}
          onChange={(event) => setBreedName(event.target.value)}
        >
          <option value=''>選擇貓咪品種</option>
          {breedOptions && breedOptions.map((name: string) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
        <button
          type="submit"
          className="px-6 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-700">搜尋</button>
      </form>
      <div className='pt-10 pb-40 space-y-10'>
        {top10BreedList && Array.isArray(top10BreedList) ? top10BreedList.map((breed) => (
          <div className='flex items-start space-x-10' key={breed.id}>
            <img className="object-cover object-center w-56 h-56 rounded-lg aspect-square" src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`} alt={breed.id} />
            <div className='space-y-4'>
              <Link href={`/dex/${breed.id}`}>
                <h2 className='font-semibold hover:text-secondary-blue'>{breed.name}</h2>
              </Link>
              <p>{breed.description}</p>
            </div>
          </div>
        )) : null
        }
      </div>
    </div>
  );
}