export default function BreedsSearch() {
  return (
    <div className='w-full max-w-lg'>
      <form className='mt-5 sm:flex sm:items-center'>
        <input
          id='q'
          name='q'
          className='inline w-full py-4 pl-5 leading-5 bg-white rounded-full focus:outline-none '
          placeholder='Enter your breed'
          type='search'
        />
        <button
          type='submit'
          className='w-full px-8 py-4 mt-3 font-medium text-white border-none rounded-full bg-primary-green hover:bg-primary-green-hover focus:outline-none sm:mt-0 sm:-ml-10 sm:mr-20 sm:w-auto sm:text-sm sm:rounded-l-none'
        >
          Search
        </button>
      </form>
    </div>
  )
}