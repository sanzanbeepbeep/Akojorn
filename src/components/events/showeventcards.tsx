import React from 'react'
import {Eventcard} from './eventcard'



const Eventcards = [
    {
        id: 1,
        name: '2021년 1월 전시회',
        place: '서울시 강남구',
        date: '2021.01.01',
        time: '10:00 ~ 18:00',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', //Path
        featured: true,
        tag: 'exhibition', //exhibition,event,concert
    },
    {
        id: 2,
        name: '2021년 2월 전시회',
        place: '서울시 강남구',
        date: '2021.02.01',
        time: '10:00 ~ 18:00',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', //Path
        featured: true,
        tag: 'exhibition', //exhibition,event,concert
    }
]

const Card = () => {


    return (
      <div className='flex justify-center'>
        <div className='mt-12 grid lg:grid-cols-4 md:grid-cols-2 gap-1 place-content-baseline justify-items-center lg:w-8/12 md:w-10/12'>
          {Eventcards.map((item) => (
            <div className='h-64 text-left w-48' key={item.id}><Eventcard{...item}></Eventcard></div>
          ))}
          
        </div>
      </div>
    )
  }
  
  export default Card