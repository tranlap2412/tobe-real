import { IoStar } from "react-icons/io5"

export const renderStart = (start:number, size:number = 10):any => {
    const arrStart = []
    for (let i = 1; i <= 5 ; i++ ) {
        if(i <= start) {
            arrStart.push(<IoStar size={size} color={'F0B90B'} key={i}/>)
            continue;
        }
        arrStart.push(<IoStar size={size} color={'#cdcdcd'} key={i}/>)
    }
    return arrStart
}