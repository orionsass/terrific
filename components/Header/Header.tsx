import { FC } from 'react';
import Image from 'next/image';


export const Header:FC = () => {
  return (
    <div className='h-20 w-screen pl-4 flex items-center'>
      <Image 
        src='https://assets-global.website-files.com/6459104881f89436cd6072cc/648abd6af1b00eb24642f979_Group%202.svg'
        alt='terrific-logo'
        width={150}
        height={100}
      />
    </div>
  )
}