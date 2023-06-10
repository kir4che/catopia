import { Radio, RadioGroup, Select, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

type City = {
  code: number;
  name: string;
}

export default function AdoptionFilter({ onFilterChange }: { onFilterChange: (city: number, age: string, sex: string) => void }) {
  const cityList: City[] = [
    {
      code: 2,
      name: '臺北市'
    },
    {
      code: 3,
      name: '新北市'
    },
    {
      code: 4,
      name: '基隆市'
    },
    {
      code: 5,
      name: '宜蘭縣'
    },
    {
      code: 6,
      name: '桃園縣'
    },
    {
      code: 7,
      name: '新竹縣'
    },
    {
      code: 8,
      name: '新竹市'
    },
    {
      code: 9,
      name: '苗栗縣'
    },
    {
      code: 10,
      name: '臺中市'
    },
    {
      code: 11,
      name: '彰化縣'
    },
    {
      code: 12,
      name: '南投縣'
    },
    {
      code: 13,
      name: '雲林縣'
    },
    {
      code: 14,
      name: '嘉義縣'
    },
    {
      code: 15,
      name: '嘉義市'
    },
    {
      code: 16,
      name: '臺南市'
    },
    {
      code: 17,
      name: '高雄市'
    },
    {
      code: 18,
      name: '屏東縣'
    },
    {
      code: 19,
      name: '花蓮縣'
    },
    {
      code: 20,
      name: '臺東縣'
    },
    {
      code: 21,
      name: '澎湖縣'
    },
    {
      code: 22,
      name: '金門縣'
    },
    {
      code: 23,
      name: '連江縣'
    },
  ]

  const [city, setCity] = useState(0)
  const [age, setAge] = useState('')
  const [sex, setSex] = useState('')

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(parseInt(event.target.value));
  };

  const handleClearAll = () => {
    setCity(0)
    setAge('')
    setSex('')
  }

  useEffect(() => {
    // console.log(city, age, sex)
    onFilterChange(city, age, sex)
  }, [city, age, sex])

  return (
    <div className="h-full">
      <menu className="flex flex-col mb-10 space-y-8">
        <div className='space-y-2'>
          <p>所在地</p>
          <Select value={city} onChange={handleCityChange} w="150px" size='sm' placeholder="請選擇所在地">
            {
              cityList.map((city) => <option key={city.code} value={city.code}>{city.name}</option>)
            }
          </Select>
        </div>
        <div className='space-y-3'>
          <p>貓齡</p>
          <RadioGroup value={age} onChange={setAge}>
            <Stack>
              <Radio key='CHILD' value='CHILD' size='sm'>幼貓（1 歲以下）</Radio>
              <Radio key='ADULT' value='ADULT' size='sm'>成貓（1 歲以上）</Radio>
            </Stack>
          </RadioGroup>
        </div>
        <div className='space-y-3'>
          <p>性別</p>
          <RadioGroup value={sex} onChange={setSex}>
            <Stack direction="row">
              <Radio key='M' value='M' size='sm'>公</Radio>
              <Radio key='F' value='F' size='sm'>母</Radio>
            </Stack>
          </RadioGroup>
        </div>
      </menu >
      <button className="w-36 py-1.5 text-sm border-2 tracking-widest font-medium text-primary-green border-primary-green hover:text-white  hover:bg-primary-green" type='button' onClick={handleClearAll}>清除全部</button>
    </div >
  )
}