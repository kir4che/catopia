import Rating from '@/components/Rating';
import { getBreedImg, getBreedInfo } from '@/services/getBreed';
import { BreedType } from '@/types/BreedType';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface BreedInfo {
  id: string;
  url: string;
  breeds: BreedType[];
  width: number;
  height: number;
}

interface BreedGallery {
  map(arg0: (img: any) => import("react").JSX.Element): import("react").ReactNode;
  id: string;
  url: string;
  width: number;
  height: number;
}

export default function BreedPage() {
  const router = useRouter();
  const { id } = router.query as { id: string };

  const [info, setInfo] = useState<BreedInfo | null>(null);
  const [gallery, setGallery] = useState<BreedGallery | null>(null);


  useEffect(() => {
    if (id !== undefined) fetchBreed();
  }, [id]);

  const fetchBreed = async () => {
    try {
      const data = await getBreedImg(`${id}&limit=10`);
      setGallery(data);
      const referenceImageId = data[0].id;
      const data2 = await getBreedInfo(referenceImageId);
      setInfo(data2);
    } catch (error) {
      console.error('發生錯誤:', error);
    }
  };

  return (
    <div className='pt-10 pb-28 px-[6vw]'>
      {
        info ? (
          <>
            <div className='flex items-start mb-16 space-x-24' key={info.id}>
              <img className="object-cover object-center rounded-lg w-96 h-96 aspect-square" src={info.url} alt={info.id} />
              <div>
                <h1 className='font-bold tracking-wider'>{info.breeds[0].name}</h1>
                <p className='py-6'>{info.breeds[0].description}</p>
                <div className='space-y-5'>
                  <p><span className='font-bold'>Temperament: </span>{info.breeds[0].temperament}</p>
                  <p><span className='font-bold'>Origin: </span>{info.breeds[0].origin}</p>
                  <p><span className='font-bold'>Life Span: </span>{info.breeds[0].life_span}</p>
                  <ul className='pt-3 space-y-4'>
                    <li className='flex items-center space-x-4'><span className='font-bold'>Adaptability: </span><Rating value={info.breeds[0].adaptability} /></li>
                    <li className='flex items-center space-x-4'><span className='font-bold'>Affection level: </span><Rating value={info.breeds[0].affection_level} /></li>
                    <li className='flex items-center space-x-4'><span className='font-bold'>Child friendly: </span><Rating value={info.breeds[0].child_friendly} /></li>
                    <li className='flex items-center space-x-4'><span className='font-bold'>Grooming: </span><Rating value={info.breeds[0].grooming} /></li>
                    <li className='flex items-center space-x-4'><span className='font-bold'>Intelligence: </span><Rating value={info.breeds[0].intelligence} /></li>
                    <li className='flex items-center space-x-4'><span className='font-bold'>Health issues: </span><Rating value={info.breeds[0].health_issues} /></li>
                    <li className='flex items-center space-x-4'><span className='font-bold'>Social needs: </span><Rating value={info.breeds[0].social_needs} /></li>
                    <li className='flex items-center space-x-4'><span className='font-bold'>Stranger friendly: </span><Rating value={info.breeds[0].stranger_friendly} /></li>
                  </ul>
                </div>
              </div>
            </div>
            <h1 className='mb-10 font-semibold'>Other photos</h1>
            <div className='grid w-full grid-cols-4 gap-4'>
              {
                gallery !== null ? gallery.map((img) => (
                  <img className="object-cover object-center w-64 h-64 rounded-lg aspect-square" src={img.url} alt={img.id} key={img.id} />
                )) : null
              }
            </div>
          </>
        ) :
          <div className='flex items-center justify-center grow'>
            <div className="mx-auto h-16 w-16 animate-spin rounded-full border-8 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" >
                Loading...
              </span>
            </div>
          </div>
      }
    </div >
  );
}