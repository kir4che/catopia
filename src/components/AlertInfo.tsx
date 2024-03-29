import { Alert, AlertIcon, Stack } from '@chakra-ui/react';


interface AlertInfo {
  info: string;
}

export default function AlertInfo({ info }: AlertInfo) {

  return (
    <Stack className='text-sm -z-10' zIndex={-1}>
      <Alert status='info' colorScheme='twitter' variant='left-accent'>
        <AlertIcon />
        {info}
      </Alert>
    </Stack>
  );
}