type EventitemProps = {
    id: number,
    name: string,
    place: string,
    date: string,
    time: string,
    image: string, //Path
    featured: boolean,
    tag: string, //exhibition,event,concert
}


export function Eventcard({ id, name, place, date, time, image, featured, tag }:EventitemProps){
    return (
        <div>
            <img src={image}></img>
        </div>
    )
}