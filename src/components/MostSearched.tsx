import TopBreedList from '@/components/TopBreedList'

export default function MostSearched() {
  return (
    <div className='-mt-1 w-full px-20 pt-24 pb-28 space-y-6 bg-[#E3E1DD] sm:rounded-b-[40px]'>
      <div className='space-y-1'>
        <p className='text-lg'>Most Searched Breeds</p>
        <hr className='border-b-[3px] border-[#1C1917] w-16' />
      </div>
      <div className='flex items-end justify-between pb-8'>
        <h1 className='max-w-lg text-5xl leading-tight tracking-wider'>66+ Breeds for you to discover</h1>
        <p className='flex items-center space-x-1'>
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