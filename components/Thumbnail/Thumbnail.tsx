'use client'

import { FC, useState } from 'react';
import Image from 'next/image';

import { ThumnailProps } from './Thumbnail.interface';
import { Spinner } from '../Spinner/Spinner';

export const Thumbnail: FC<ThumnailProps> = ({ image })=> {
  const [error, setError] = useState(false);
  const [vis, setVis] = useState<'visible' | 'hidden'>('hidden')
  
  const handleError = (): void => {
    setError(true);
  }

  return (
    <div
      className='relative w-full h-full overflow-hidden flex justify-center items-center'
    >
      <Image 
        src={!error ? image : '/fallback.png' }
        alt=''
        className='hover:scale-110 transition duration-300 cursor-pointer'
        onLoad={() => setVis('visible')}
        onError={handleError}
        sizes='200px'
        fill
        style={{ visibility: vis }}
      />
      {vis === 'hidden' && <Spinner />}
    </div>
  )
}