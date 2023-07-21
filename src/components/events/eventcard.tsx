type EventitemProps = {
    id: number,
    name: string,
    place: string,
    datestart: string,
    dateend: string,
    time: string,
    image: string, //Path
    featured: boolean,
    tag: string, //exhibition,event,concert
}


export function Eventcard({ id, name, place, datestart, dateend, time, image, featured, tag }:EventitemProps){
    return (
        <div>
            <img src={image}></img>
        </div>
    )
}