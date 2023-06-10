/* eslint-disable @next/next/no-img-element */
import { Grid, GridItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

type Cat = {
  name: string
  img: string
};

export default function Gallery() {
  const catList: Cat[] = [
    {
      name: '小哺',
      img: '../images/gallery/IMG_1325.jpg'
    },
    {
      name: '花咪',
      img: '../images/gallery/IMG_8223.jpg'
    },
    {
      name: '葉教授',
      img: '../images/gallery/IMG_1661.jpg'
    },
    {
      name: '花花',
      img: '../images/gallery/IMG_1232.jpg'
    },
    {
      name: '一品',
      img: '../images/gallery/IMG_8232.jpg'
    },
    {
      name: '佩皮頭',
      img: '../images/gallery/IMG_8923.jpg'
    },
    {
      name: '小花',
      img: '../images/gallery/IMG_9697.jpg'
    },
  ]

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [catIndex, setCatIndex] = useState<number | null>(null)

  return (
    <>
      <h3 className="mt-6 mb-5 font-bold text-center">投稿分享<span className='text-3xl text-transparent bg-gradient-to-r bg-clip-text from-secondary-blue to-primary-green'>你家喵喵</span>，讓大家看看有<span className='text-3xl text-transparent bg-gradient-to-r bg-clip-text from-primary-green to-secondary-blue'>多可愛</span>！</h3>
      <button className="flex items-center px-20 py-2.5 mx-auto mb-12 space-x-1 tracking-widest text-white rounded-full bg-primary-green hover:bg-primary-green-hover" type='button'>
        <p className="inset-0 m-auto text-lg font-medium text-center">我要投稿</p>
        <img width="20" height="20" src="https://img.icons8.com/pastel-glyph/64/FFFFFF/cat--v1.png" alt="cat--v1" />
      </button>
      <Grid className='mb-20' templateColumns='repeat(4, 1fr)' gap={6}>
        {catList.map((cat, index) =>
          <GridItem w='100%' h='100%' key={cat.name}>
            <div className="relative group" onClick={() => {
              setCatIndex(index)
              onOpen()
            }}>
              <img className='object-cover w-full h-72' src={cat.img} alt={cat.name} />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 cursor-pointer group-hover:opacity-100">
                <span className="flex items-center justify-center w-full h-full text-xl font-bold tracking-widest text-white bg-stone-900 bg-opacity-20">{cat.name}</span>
              </div>
            </div>
          </GridItem>
        )}
      </Grid >
      {
        catIndex !== null && (
          <Modal isOpen={isOpen} onClose={onClose} size='lg'>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{catList[catIndex].name}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p>{catList[catIndex].name}</p>
              </ModalBody>
            </ModalContent>
          </Modal>
        )
      }
    </>
  )
}