import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';


import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter()

  return (
    <div className="flex items-center justify-start w-full py-5 space-x-12">
      <a href="/" onClick={() => router.push('/')}>
        <img src="../images/CatwikiLogo.svg" alt="catwiki logo" />
      </a>
      <ul className="flex items-center space-x-5">
        <li><a href="/dex" onClick={() => router.push('/dex')}>喵喵圖鑑</a></li>
        <li><a href="/gallery" onClick={() => router.push('/gallery')}>我家的喵</a></li>
        <li>
          <Menu>
            <MenuButton className='flex items-center justify-between bg-white border-none text-stone-900 hover:bg-white'>
              領養喵喵 <ChevronDownIcon />
            </MenuButton>
            <MenuList className='p-3 space-y-2 rounded-md shadow-md bg-slate-50 w-36 '>
              <MenuItem className='py-1 pl-2 border-none hover:bg-white'><a href="/publicAdoption" onClick={() => router.push('/publicAdoption')}>公立領養</a></MenuItem>
              <MenuItem className='py-1 pl-2 border-none hover:bg-white'><a href="/generalAdoption" onClick={() => router.push('/generalAdoption')}>一般領養</a></MenuItem>
            </MenuList>
          </Menu>
        </li>
        <li><a href="/lost" onClick={() => router.push('/lost')}>走失協尋</a></li>
        <li><a href="/quiz" onClick={() => router.push('/quiz')}>愛喵測驗</a></li>
      </ul>
    </div>
  )
}