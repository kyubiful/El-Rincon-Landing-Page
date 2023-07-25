import { InfoText } from './Text/InfoText'
import { INFO } from '../data/info'

export const HouseInfo = () => {
  return (
    <div className='flex flex-col gap-4 items-center pb-24 pt-24 -mt-12 lg:pb-40 lg:pt-56 lg:-mt-32' id='info'>
      <p className='text-5xl text-gray-800'>Alquiler íntegro</p>
      <div className='mt-10'>
        <ul className='flex flex-col flex-wrap md:max-h-72 max-h-full justify-start content-center gap-x-36 gap-y-4 opacity-0' id='homeInfo'>
          {
            INFO.map(inf => 
              <li key={inf.id} className='flex items-center gap-2'>
                { inf.icon }
                <InfoText>{inf.text}</InfoText>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}