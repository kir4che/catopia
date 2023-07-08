/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
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
  const [postList, setPostList] = useState<PostType | null>(null)
  const [showOriginalImage, setShowOriginalImage] = useState<number | null>(null);

  useEffect(() => {
    fetchAdoptionInfo()
  }, [param])

  const fetchAdoptionInfo = async () => {
    try {
      const data = await getAdoptionInfo(param)
      setPostList(data)
    } catch (error) {
      console.error('發生錯誤:', error)
    }
  };

  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
      {postList && Array.isArray(postList) ? postList.map((post, index) => (
        <div className='space-x-6 space-y-4  lg:flex lg:items-center' key={index}>
          <div className="relative group" onClick={() => setShowOriginalImage(index)}>
            <img
              className='object-cover object-center w-full h-64 shadow-md sm:rounded-full sm:w-40 sm:h-40 xl:w-56 xl:h-56'
              src={post.album_file}
              alt="cat image"
            />
          </div>
          {showOriginalImage !== null && (
            <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-60">
              <img
                className="max-w-full max-h-full"
                src={postList[showOriginalImage].album_file}
                alt="cat image"
                onClick={() => setShowOriginalImage(null)}
              />
            </div>
          )}
          <ul className='flex flex-col space-y-1 text-sm leading-6'>
            <li>
              <h4 className="mb-2 font-bold">
                {post.animal_bodytype == 'BIG' ? '大型' : (post.animal_bodytype == 'MEDIUM' ? '中型' : '小型')}{post.animal_colour}{post.animal_sex == 'M' ? '公' : '母'}貓
              </h4>
            </li>
            <li>ID：{post.animal_subid}</li>
            <li>我在{post.animal_place}</li>
            <li>描述：{post.animal_remark ? post.animal_remark : '無'}</li>
            <li>
              <button className="flex space-x-1 w-28 mt-3 justify-center items-center py-1.5 text-sm tracking-widest font-medium text-white rounded-full bg-primary-green hover:bg-primary-green-hover" type='button' onClick={() => window.location.href = `tel:${post.shelter_tel}`} >
                <img width="16" height="16" src="https://img.icons8.com/ios-filled/50/FFFFFF/phone.png" alt="phone" />
                <span>撥打電話</span>
              </button>
            </li>
          </ul>
        </div>
      )) : null
      }
    </div >
  );
}