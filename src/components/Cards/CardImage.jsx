import { Card, CardBody } from '@nextui-org/react'

export const CardImage = ({ url, handlePress }) => {
  return (
    <Card shadow='sm' isPressable onPress={handlePress} className='w-full hover:scale-[1.02] homeImage opacity-0'>
      <CardBody className='overflow-visible p-0'>
        <img
          shadow='sm'
          radius='lg'
          width='100%'
          height='100%'
          alt='Imagen de la casa rural'
          className='w-full object-cover'
          src={url}
        />
      </CardBody>
    </Card>
  )
}