'use client'

import { FC, useState } from 'react'

import { Thumbnail } from '../Thumbnail/Thumbnail';
import { Modal } from '../Modal/Modal';
import { Video } from '../Video/Video';
import { PromotionVideosProps } from './PromotionVideos.interface';

export const PromotionVideos:FC<PromotionVideosProps> = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState<string>('');
  
  return (
    <div className="flex gap-4 p-4 flex-wrap">
      {
        videos.map(({ image, video }) => (
          <button className='aspect-video w-1/4' key={`thumbnail-${image}`} onClick={()=> setCurrentVideo(video)}>
            <Thumbnail image={image} />
          </button> 
        ))
      }
      <Modal isVisible={!!currentVideo} onClose={() => setCurrentVideo('')}>
        <Video src={currentVideo} />
      </Modal>
    </div>
  )
}