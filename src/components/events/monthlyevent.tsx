import React , {useState} from 'react'
import Card from './eventcard'
import Next from './next'

const ArrayMonth = [
  'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'
]

const Eventcards = [
  {
      id: 1,
      name: 'The World of Studio Ghibli\'s Animation',
      place: 'Central World',
      date: '2021.01.01',
      time: '10:00 ~ 18:00',
      image: 'https://th.bing.com/th/id/OIP.gWyiEiX-q58hancFtVWMagHaKC?pid=ImgDet&rs=1', //Path
      featured: true,
      tag: 'exhibition', //exhibition,event,concert
  },
  {
      id: 2,
      name: 'Crybaby Everybody',
      place: '서울시 강남구',
      date: '2021.02.01',
      time: '10:00 ~ 18:00',
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', //Path
      featured: true,
      tag: 'exhibition', //exhibition,event,concert
  },
  {
    id: 3,
    name: 'The World of Studio Ghibli\'s Animation',
    place: 'Central World',
    date: '2021.01.01',
    time: '10:00 ~ 18:00',
    image: 'https://th.bing.com/th/id/OIP.gWyiEiX-q58hancFtVWMagHaKC?pid=ImgDet&rs=1', //Path
    featured: true,
    tag: 'exhibition', //exhibition,event,concert
},
{
  id: 4,
  name: 'The World of Studio Ghibli\'s Animation',
  place: 'Central World',
  date: '2021.01.01',
  time: '10:00 ~ 18:00',
  image: 'https://th.bing.com/th/id/OIP.gWyiEiX-q58hancFtVWMagHaKC?pid=ImgDet&rs=1', //Path
  featured: true,
  tag: 'exhibition', //exhibition,event,concert
},
{
  id: 5,
  name: 'The World of Studio Ghibli\'s Animation',
  place: 'Central World',
  date: '2021.01.01',
  time: '10:00 ~ 18:00',
  image: 'https://th.bing.com/th/id/OIP.gWyiEiX-q58hancFtVWMagHaKC?pid=ImgDet&rs=1', //Path
  featured: true,
  tag: 'exhibition', //exhibition,event,concert
},
{
  id: 6,
  name: 'The World of Studio Ghibli\'s Animation',
  place: 'Central World',
  date: '2021.01.01',
  time: '10:00 ~ 18:00',
  image: 'https://th.bing.com/th/id/OIP.gWyiEiX-q58hancFtVWMagHaKC?pid=ImgDet&rs=1', //Path
  featured: true,
  tag: 'exhibition', //exhibition,event,concert
},
]

const monthlyevent = () => {
  return (
    <div>
      <Next/>
      <div className="grid grid-cols-6 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 place-content-center p-3">
      {Eventcards.filter((eventcard) => ( eventcard.date.split('.')[1] === "01")).map((eventcard) => (
        <a href="/events" className="">
        <Card image={eventcard.image} date={eventcard.date} name={eventcard.name} place={eventcard.place} />
        </a>
      ))}
      </div>
    </div>
  )
}

export default monthlyevent