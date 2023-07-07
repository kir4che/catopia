import TopBreedList from '@/components/TopBreedList'
import Link from 'next/link'

export default function MostSearched() {
  return (
    <div className='-mt-1 w-full px-6 md:px-12 lg:px-20 py-20 space-y-6 bg-[#E3E1DD] sm:rounded-b-[40px]'>
      <div className='space-y-1'>
        <p className='text-lg tracking-widest'>人氣貓咪品種</p>
        <hr className='border-b-[3px] border-[#1C1917] w-16' />
      </div>
      <div className='flex items-baseline justify-between pb-10'>
        <h1 className='text-5xl leading-tight tracking-wider'>66+ 貓咪品種圖鑑供您查詢</h1>
        <p className='flex items-center space-x-1'>
          <Link href='/dex'></Link>
          <span className='text-sm font-semibold'>SEE MORE</span>
          <img width='16' height='16' src='https://img.icons8.com/ios-filled/50/forward--v1.png' alt='see more' />
        </p>
      </div>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4'>
        <TopBreedList />
      </div>
    </div>
  )
}