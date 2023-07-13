import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import Link from 'next/link';

export default function BurgerMenu() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
      />
      <MenuList className='p-3 space-y-2.5 text-sm bg-slate-50 rounded shadow' zIndex={1}>
        <MenuItem>
          <Link href="/dex">喵喵圖鑑</Link>
        </MenuItem>
        <MenuItem >
          <Link href="/gallery">我家的喵</Link>
        </MenuItem>
        <Menu>
          <MenuButton className='flex items-center justify-between bg-white border-none text-stone-900 hover:bg-white'>
            領養喵喵 <ChevronDownIcon />
          </MenuButton>
          <MenuList className='p-3 space-y-2 rounded-md shadow bg-slate-50 w-28'>
            <MenuItem className='border-none hover:bg-white'><Link href="/publicAdoption">公立領養</Link></MenuItem>
            <MenuItem className='border-none hover:bg-white'><Link href="/generalAdoption">一般領養</Link></MenuItem>
          </MenuList>
        </Menu>
        <MenuItem>
          <Link href="/lost">走失協尋</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/quiz">愛喵測驗</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

