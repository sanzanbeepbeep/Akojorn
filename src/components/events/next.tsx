import React , {useState} from 'react';
import MaterialSymbolsArrowBackIosNew from '../icon/PreButton'
import MaterialSymbolsArrowForwardIos from '../icon/ForwardButton'

const ArrayMonth = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'
]

const Next = ({}) => {
    const [current, setCurrent] = useState(0);

    return (
      <div className="flex justify-around p-4 ">
        <div className="flex text-2xl font-montserrat font-bold items-center">
            <button onClick={()=>setCurrent((current-1+12)%12)} className='flex'><MaterialSymbolsArrowBackIosNew></MaterialSymbolsArrowBackIosNew>
              <div className="text-xl font-montserrat pl-2">{ArrayMonth[((current-1+12)%12)]}</div>
            </button>
        </div>
        <div className="text-2xl font-montserrat font-bold">{ArrayMonth[current]}</div>
        <div className="flex text-2xl font-montserrat font-bold items-center">
          <button onClick={()=>setCurrent((current+1)%12)} className='flex'>
            <div className="text-xl font-montserrat pr-2">{ArrayMonth[((current+1)%12)]}</div>
            <MaterialSymbolsArrowForwardIos></MaterialSymbolsArrowForwardIos>
          </button>
        </div>
      </div>
    )
}
export default Next;