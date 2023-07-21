export interface EventitemProps{
    name : string,
    place : string,
    date : string,
    image: string,
}

export interface monthlyeventProps{
    setCurrentMonth: (currentMonth: number) => void;
}