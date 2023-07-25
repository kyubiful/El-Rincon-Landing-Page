import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react"
import { House } from "./Icons"

export const Home = () => {
  return (
		<div 
      className='bg-[url(/assets/img/home.webp)] h-screen w-screen bg-cover bg-center bg-no-repeat z-10 relative flex justify-center items-center' 
      id='home'
    >
      <Card className='opacity-0' isBlurred id='homeCard'>
        <CardHeader />
        <CardBody className='flex flex-row gap-3 items-center'>
          <div className='hidden md:block '>
            <House width={175} height={175}/>
          </div>
          <div className='block md:hidden'>
            <House width={100} height={100}/>
          </div>
          <div>
            <p className='text-lg md:text-4xl text-gray-800'>Casa Rural</p>
            <p className='text-5xl md:text-9xl text-gray-800'>El Rincón</p>
          </div>
        </CardBody>
        <CardFooter />
      </Card>
		</div>
  )
}