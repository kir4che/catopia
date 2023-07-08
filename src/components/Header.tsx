import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import Link from 'next/link';


import { useRouter } from 'next/navigation';
import BurgerMenu from './BurgerMenu';

export default function Header() {
  const router = useRouter()

  return (
    <div className="flex items-center justify-between w-full px-4 py-5 sm:px-0 sm:justify-start">
      <a href="/" onClick={() => router.push('/')}>
        <img className='pr-8 w-36' src="../images/CatopiaLogo.png" alt="catopia logo" />
      </a>
      <ul className="items-center hidden space-x-5 text-sm sm:flex">
        <li><Link href="/dex">喵喵圖鑑</Link></li>
        <li><Link href="/gallery">我家的喵</Link></li>
        <li>
          <Menu>
            <MenuButton className='flex items-center justify-between bg-white border-none text-stone-900 hover:bg-white'>
              領養喵喵 <ChevronDownIcon />
            </MenuButton>
            <MenuList className='p-3 space-y-2 rounded-md shadow-md bg-slate-50 w-36 '>
              <MenuItem className='py-1 pl-2 border-none hover:bg-white'><Link href="/publicAdoption">公立領養</Link></MenuItem>
              <MenuItem className='py-1 pl-2 border-none hover:bg-white'><Link href="/generalAdoption">一般領養</Link></MenuItem>
            </MenuList>
          </Menu>
        </li>
        <li><Link href="/lost">走失協尋</Link></li>
        <li><Link href="/quiz">愛喵測驗</Link></li>
      </ul>
      <div className='block sm:hidden'><BurgerMenu /></div>
    </div>
  )
}