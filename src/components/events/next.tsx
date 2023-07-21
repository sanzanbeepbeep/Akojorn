import React , {useState} from 'react';
import MaterialSymbolsArrowBackIosNew from '../icon/PreButton'
import MaterialSymbolsArrowForwardIos from '../icon/ForwardButton'
import MaterialSymbolsArrowBackIos from '../icon/BackwardButton'

const ArrayMonth = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'
]

const Next = ({}) => {
    const [current, setCurrent] = useState(0);

    return (
        <div className="flex justify-around p-4 ">
        <div className="flex text-xl font-montserrat font-bold items-center">
            <button onClick={()=>setCurrent((current-1+12)%12)}><MaterialSymbolsArrowBackIos></MaterialSymbolsArrowBackIos></button>
            <div className="text-xl font-montserrat pl-2">{ArrayMonth[((current-1+12)%12)]}</div>
        </div>
        <div className="text-2xl font-montserrat font-bold">{ArrayMonth[current]}</div>
        <div className="flex text-2xl font-montserrat font-bold items-center">
          <div className="text-xl font-montserrat pr-2">{ArrayMonth[((current+1)%12)]}</div>
          <button onClick={()=>setCurrent((current+1)%12)}><MaterialSymbolsArrowForwardIos></MaterialSymbolsArrowForwardIos></button>
        </div>
      </div>
    )
}
export default Next;