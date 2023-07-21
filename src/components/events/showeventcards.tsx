import React from 'react'
import {Eventcard} from './eventcard'



const Eventcards = [
    {
        id: 1,
        name: 'The World of Studio Ghibli\'s Animation',
        place: 'Central World',
        datestart: '2021.06.01',
        dateend: '2021.09.30',
        time: '10:00 ~ 18:00',
        image: 'images/events/e1.png', //Path
        featured: true,
        tag: 'exhibition', //exhibition,event,concert
    },
    {
        id: 2,
        name: 'LEO presents CAT TSHIRT',
        place: 'Queen Sirikit National Convention Center',
        datestart: '2021.05.01',
        dateend: '2021.05.31',
        time: '10:00 ~ 18:00',
        image: 'images/events/e2.png', //Path
        featured: true,
        tag: 'exhibition', //exhibition,event,concert
    },
    {
        id: 3,
        name: 'The World of Studio Ghibli\'s Animation',
        place: 'Central World',
        datestart: '2021.05.01',
        dateend: '2021.06.31',
        time: '10:00 ~ 18:00',
        image: 'images/events/e3.png', //Path
        featured: true,
        tag: 'exhibition', //exhibition,event,concert
    },
    {
        id: 4,
        name: 'The World of Studio Ghibli\'s Animation',
        place: 'Central World',
        datestart: '2021.05.01',
        dateend: '2021.05.31',
        time: '10:00 ~ 18:00',
        image: 'images/events/e4.png', //Path
        featured: true,
        tag: 'exhibition', //exhibition,event,concert
    } 
]

const Card = () => {


    return (
      <div className='flex justify-center'>
        <div className='mt-12 grid lg:grid-cols-4 md:grid-cols-2 gap-1 place-content-baseline justify-items-center lg:w-8/12 md:w-10/12'>
          {Eventcards.filter(month => month.datestart.slice(5,7) === '01').map((item) => (
            <div className='h-64 text-left w-48' key={item.id}><Eventcard{...item}></Eventcard></div>
          ))}
          
        </div>
      </div>
    )
  }
  
  export default Card