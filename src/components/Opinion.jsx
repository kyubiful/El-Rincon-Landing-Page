import { Avatar, Card, CardBody, CardHeader } from '@nextui-org/react'
import { Star, HalfStar, EmptyStar } from './Icons'

export const Opinion = ({ name, text, stars }) => {
  const convertToArray = () => {
    let array = []
    for (let i = 1; i <= 5; i++) {
      i <= stars && stars - i !== 0.5 && array.push('rated')
      stars - i === 0.5 && array.push('midrated')
      i > stars && array.push('unrated')
    }
    return array
  }

  return (
    <div className='flex flex-col justify-center items-center h-full max-w-2xl p-12'>
        <Avatar
          showFallback
          isBordered
          name={name}
          color='success'
          classNames={{ name: 'text-white text-3xl', base: 'ring-green-800 bg-green-800' }}
          className='-mb-14 w-24 h-24'
        />
        <Card className='max-w-none m-2'>
          <CardHeader className='h-14' />
          <CardBody className='flex flex-col justify-center gap-2 items-center pt-0'>
            <p className='text-3xl text-center mt-2 text-gray-800'>{name}</p>
            <div className='h-72 lg:h-44 flex items-center'>
              <p className='text-md text-gray-800'>"{text}"</p>
            </div>
            
            <div className='flex gap-1 mt-2 mb-2'>
              {
                convertToArray().map((star, index) => 
                  star === 'rated' ? 
                    <Star width={30} height={30} fill='warning' key={index} /> 
                  : star === 'midrated' ? 
                    <HalfStar width={30} height={30} fill='warning' key={index} /> 
                  : 
                    <EmptyStar width={30} height={30} fill='warning' key={index} />
                )
              }
            </div>
          </CardBody>
        </Card>
    </div>
  )
}