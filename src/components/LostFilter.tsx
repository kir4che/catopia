import { Input, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { ChangeEvent, useEffect, useState } from 'react';

export default function LostFilter({ onFilterChange }: { onFilterChange: (sex: string, location: string) => void }) {
  const [sex, setSex] = useState('')
  const [location, setLocation] = useState('')

  const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleClearAll = () => {
    setSex('')
    setLocation('')
  }

  useEffect(() => {
    onFilterChange(sex, location)
  }, [sex, location])

  return (
    <div className="h-full">
      <menu className="flex flex-col mb-10 space-y-8">
        <div className='space-y-3'>
          <p>遺失地點查詢</p>
          <Input value={location} size='sm' width='auto' onChange={handleLocationChange} />
        </div>

        <div className='space-y-3'>
          <p>性別</p>
          <RadioGroup value={sex} onChange={setSex}>
            <Stack direction="row">
              <Radio key='M' value='公' size='sm'>公</Radio>
              <Radio key='F' value='母' size='sm'>母</Radio>
            </Stack>
          </RadioGroup>
        </div>
      </menu >
      <button className="w-36 py-1.5 text-sm border-2 tracking-widest font-medium text-primary-green border-primary-green hover:text-white  hover:bg-primary-green" type='button' onClick={handleClearAll}>清除全部</button>
    </div >
  )
}