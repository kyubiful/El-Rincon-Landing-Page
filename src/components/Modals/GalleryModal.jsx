import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import { useEffect, useState } from 'react'

export const GalleryModal = ({ imageOpenId, images, isOpen, handleClose }) => {
  const [modalImageOpenId, setModalImageOpenId] = useState(0)
  const lastIamgeId = images[images.length - 1].id

  useEffect(() => {
    setModalImageOpenId(imageOpenId)
  },[imageOpenId])
  
  const handleNextImage = () => {
    let nextImageId = modalImageOpenId + 1
    if(nextImageId > lastIamgeId) nextImageId = 0
    setModalImageOpenId(nextImageId)
  }

  const handlePrevImage = () => {
    let prevImageId = modalImageOpenId - 1
    if(prevImageId < 0) prevImageId = lastIamgeId
    setModalImageOpenId(prevImageId)
    
  }

  return (
    <Modal 
      size='lg' 
      isOpen={isOpen} 
      onClose={handleClose} 
      classNames={{ closeButton: 'bg-white' }}
      placement='bottom'
      backdrop='blur'
    >
      <ModalContent>
        <ModalBody className='p-0'>
          <img
            shadow='sm'
            radius='lg'
            width='100%'
            alt='Imagen de la casa rural'
            className='w-full object-cover rounded-xl'
            src={images[modalImageOpenId].url}
          />
        </ModalBody>
        <ModalFooter>
          <Button onPress={handlePrevImage}>Anterior</Button>
          <Button onPress={handleNextImage}>Siguiente</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}