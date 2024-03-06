import { FC } from 'react'

import { ModalProps } from './Modal.interface';

export const Modal:FC<ModalProps> = ({ isVisible, children, onClose }) => {
  return isVisible ? (
    <div className='flex justify-center items-center w-screen h-screen bg-black bg-opacity-70 absolute top-0 left-0'>
      <div className='flex flex-col bg-black'>
        <button onClick={onClose} className='self-end'>X</button>
        {children}
      </div>
    </div>
  ) : null
}