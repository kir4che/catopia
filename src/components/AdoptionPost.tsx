import { useEffect, useState } from "react";

import { getAdoptionInfo } from '@/services/getAdoption';

interface ParamType {
  city: number;
  age: string;
  sex: string;
}

interface PostType {
  animal_id: number;
  animal_subid: string;
  animal_area_pkid: number;
  animal_shelter_pkid: number;
  animal_place: string;
  animal_kind: string;
  animal_Variety: string;
  animal_sex: string;
  animal_bodytype: string;
  animal_colour: string;
  animal_age: string;
  animal_sterilization: string;
  animal_bacterin: string;
  animal_foundplace: string;
  animal_title: string;
  animal_status: string;
  animal_remark: string;
  animal_caption: string;
  animal_opendate: string;
  animal_closeddate: string;
  animal_update: string;
  animal_createtime: string;
  shelter_name: string;
  album_file: string;
  album_update: string;
  cDate: string;
  shelter_address: string;
  shelter_tel: string;
}

export default function AdoptionPost(param: ParamType) {
  const [postList, setPostList] = useState<PostType | null>(null);

  useEffect(() => {
    // console.log(param)
    fetchAdoptionInfo();
  }, [param]);

  const fetchAdoptionInfo = async () => {
    try {
      const data = await getAdoptionInfo(param);
      setPostList(data);
    } catch (error) {
      console.error('發生錯誤:', error);
    }
  };

  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
      {postList && Array.isArray(postList) ? postList.map((post) => (
        <div className="space-x-6 lg:flex lg:items-center">
          <img className="object-cover object-center w-40 h-40 rounded-full shadow-xl aspect-square xl:w-56 xl:h-56" src={post.album_file} alt="cat image" />
          <ul className="flex flex-col space-y-1 leading-relaxed">
            <li><h4 className="mb-2 font-bold">{post.animal_bodytype == 'BIG' ? '大型' : (post.animal_bodytype == 'MEDIUM' ? '中型' : '小型')}{post.animal_colour}{post.animal_sex == 'M' ? '公' : '母'}貓</h4></li>
            <li>ID：{post.animal_subid}</li>
            <li>我在{post.animal_place}</li>
            <li>描述：{post.animal_remark ? post.animal_remark : '無'}</li>
            <li><button className="flex w-28 mt-2 justify-center py-1.5 text-sm tracking-widest font-medium text-white border-none bg-primary-green hover:bg-primary-green-hover" type='button' onClick={() => window.location.href = `tel:${post.shelter_tel}`} > 撥打電話</button></li>
          </ul>
        </div>
      )) : null
      }
    </div >
  );
}