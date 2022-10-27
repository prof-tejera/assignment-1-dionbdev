import React, {useState, useEffect} from 'react';
import { TimeForm } from '../generic/TimeForm';
import { startResume, stop, msToTime } from '../generic/commonThings';

const Countdown = () => {

  const [time, setTime] = useState(10000)
  const [start, setStart] = useState(false)
  const [displayTime, setDisplayTime] = useState('')
  

  const handleTime = (f) => {
      setTime(f)
  }

  
  useEffect(() => {
    let timeInterval = null;
    if(start && time !== 0){
      timeInterval = setInterval(() => {
        setTime(prevTime => prevTime - 10)
      }, 10)
    } else {
      clearInterval(timeInterval)
    } 
    return () => clearInterval(timeInterval)
  },[start, time])

    useEffect(() => {
       setDisplayTime( msToTime(time) )


    },[time])


    return(
      <>
        <h2>{displayTime}</h2>
        <TimeForm handleTime={handleTime} areRounds={false} />
        <button onClick={()=> setStart(!start)}>{!start ? startResume : stop}</button>
        <button onClick={() => setTime(0)}>Reset</button>
        <button onClick={() => setTime(0)}>Fast Foward</button>
      </>

    )
}

export default Countdown;
