import { useRouter } from 'next/navigation'

export default function CatBenefits() {
  const router = useRouter()

  return (
    <div className='flex items-center px-40 pt-24 space-y-6 pb-28'>
      <div className='space-y-8'>
        <hr className='border-b-[3px] border-[#1C1917] w-16' />
        <h1 className='tracking-wide'>你真的了解貓咪嗎？</h1>
        <p className='max-w-xl pb-2 leading-relaxed'>貓咪是我們生活中可愛且神秘的伴侶，但你是否真的了解牠們呢？貓咪擁有獨特的行為和需求，並展現出令人驚奇的本能和智慧。透過參與貓咪測驗，你可以測試自己對貓咪的了解程度，並發現更多關於貓咪的小知識。<br /><br />點擊下方按鈕，看看你是否真正瞭解貓咪的世界！</p>
        <button className="flex items-center w-64 px-16 py-2.5 tracking-widest text-white rounded-full bg-primary-green hover:bg-primary-green-hover" type='button' onClick={() => router.push('/quiz')}>
          <p className="inset-0 m-auto text-lg font-medium text-center">開始測驗</p>
          <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </button>
      </div>
      <div className="flex">
        <div className="flex flex-wrap justify-end mr-4 space-y-4">
          <img className="block object-cover object-center rounded-lg w-72" src="../images/image 2.png" alt="image 2" />
          <img className="block object-cover object-center w-48 rounded-lg" src="../images/image 1.png" alt="image 1" />
        </div>
        <div className="pb-1">
          <img className="block object-cover object-center w-64 rounded-lg" src="../images/image 3.png" alt="image 3" />
        </div>
      </div>

    </div>)
}