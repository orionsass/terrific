import { FC } from 'react';

import { VideoProps } from './Video.interface';

export const Video: FC<VideoProps> = ({ src }) => {
  return (
    <>
      <video 
        className='w-[80vw] h-[45vw]' 
        playsInline
        aria-label="Video player"
        autoPlay 
        controls
        muted
        preload="none" 
      >
        <source src={src} />
      </video>
    </>
  )
}