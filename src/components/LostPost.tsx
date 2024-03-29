import { useEffect, useState } from 'react'

import DetailLostInfo from '@/components/DetailLostInfo'
import { getLostInfo } from '@/services/getLost'

interface ParamType {
  sex: string
  location: string
}

interface PostType {
  晶片號碼: string
  寵物名: string
  寵物別: string
  性別: string
  品種: string
  毛色: string
  外觀: string
  特徵: string
  遺失時間: string
  遺失地點: string
  飼主姓名: string
  連絡電話: string
  EMail: string
  PICTURE: string
}

export default function LostPost(param: ParamType) {
  const [postList, setPostList] = useState<PostType | null>(null)
  const [showOriginalImage, setShowOriginalImage] = useState<number | null>(null)

  useEffect(() => {
    fetchLostInfo()
  }, [param])

  const fetchLostInfo = async () => {
    try {
      let data = await getLostInfo(param)
      // 只抓取近五年的走失資料
      data = data.filter((item: PostType) => {
        const year: number = new Date().getFullYear()
        return item.遺失時間.startsWith(year.toString()) || item.遺失時間.startsWith((year - 1).toString()) || item.遺失時間.startsWith((year - 2).toString()) || item.遺失時間.startsWith((year - 3).toString()) || item.遺失時間.startsWith((year - 4).toString())
      });
      setPostList(data)
    } catch (error) {
      console.error('發生錯誤:', error)
    }
  }

  return (
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
      {postList && Array.isArray(postList) ? postList.map((post, index) => (
        <div className='space-x-6 space-y-4 lg:flex lg:items-center' key={index}>
          <div className='relative group' onClick={() => setShowOriginalImage(index)}>
            <img
              className='object-cover object-center w-full h-64 shadow-md sm:h-40 sm:rounded-full sm:w-40 xl:w-56 xl:h-56'
              src={post.PICTURE}
              alt={post.寵物名}
            />
          </div>
          {showOriginalImage !== null && (
            <div className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-60'>
              <img
                className='max-w-full max-h-full'
                src={postList[showOriginalImage].PICTURE}
                alt={post.寵物名}
                onClick={() => setShowOriginalImage(null)}
              />
            </div>
          )}
          <ul className='flex flex-col space-y-1 text-sm leading-6'>
            <li className='flex items-center'>
              <h4 className='mb-2 font-bold'>{post.寵物名}</h4>
              {post.性別 == '母' ? (
                <img className='mb-2' width='25' height='25' src='https://img.icons8.com/stickers/100/female.png' alt='female' />
              ) : (
                <img className='mb-1' width='25' height='25' src='https://img.icons8.com/stickers/100/male.png' alt='male' />
              )}
            </li>
            <li>晶片號碼：{post.晶片號碼}</li>
            <li>品種：{post.品種}</li>
            <li>特徵：{post.外觀}{post.毛色}</li>
            {post.特徵 ? <li className='px-3 py-2 rounded-md bg-stone-100'>{post.特徵}</li> : null}
            <li className='pt-2'>
              <DetailLostInfo post={post} />
            </li>
          </ul>
        </div>
      )) : null}
    </div>
  )
}
