import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from '@chakra-ui/react'

interface PostType {
  晶片號碼: string
  寵物名: string
  寵物別: string
  性別: string
  品種: string
  毛色: string
  外觀: string
  特徵: string
  遺失時間: string
  遺失地點: string
  飼主姓名: string
  連絡電話: string
  EMail: string
  PICTURE: string
}

export default function DetailLostInfo({ post }: { post: PostType }) {
  return (
    <Popover
      placement='bottom'
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button px='20px' rounded='36px' colorScheme='twitter' size='sm'>詳細資訊</Button>
      </PopoverTrigger>
      <PopoverContent py={2} color='black'>
        <PopoverHeader fontWeight='bold'>
          遺失資訊
        </PopoverHeader>
        <PopoverArrow bg='white' />
        <PopoverCloseButton />
        <PopoverBody lineHeight={1.8}>
          <p>遺失時間：{post.遺失時間}</p>
          <p>遺失地點：{post.遺失地點}</p>
        </PopoverBody>
        <PopoverHeader fontWeight='bold'>
          聯絡方式
        </PopoverHeader>
        <PopoverBody lineHeight={1.8}>
          <p>飼主姓名：{post.飼主姓名}</p>
          <p>連絡電話：{post.連絡電話}</p>
          <p>EMail：{post.EMail}</p>
        </PopoverBody>
      </PopoverContent>
    </Popover >
  )
}