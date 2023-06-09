import BreedsSearch from '@/components/BreedsSearch'

export default function Banner() {
  return (
    <div className="w-full px-20 pt-28 pb-36 bg-[url('/images/HeroImagelg.png')] bg-cover bg-right-bottom bg-no-repeat sm:rounded-t-[40px]">
      <img className='h-24 mb-4 white_logo' src='../images/CatwikiLogo.svg' alt='catwiki logo' />
      <h3 className='max-w-sm tracking-wider text-white mb-9'>Get to know more about your cat breed</h3>
      <BreedsSearch />
    </div>
  )
}