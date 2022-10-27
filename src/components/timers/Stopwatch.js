import React, {useState, useEffect} from 'react';
import { startResume, stop, msToTime } from '../generic/commonThings';

const Stopwatch = () => {
    
  
    const [time, setTime] = useState(0)
    const [start, setStart] = useState(false)
    const [displayTime, setDisplayTime] = useState('')
  
    useEffect(() => {
      let timeInterval = null;
      if(start && time > -1){
        timeInterval = setInterval(() => {
          if(time < 1000000000){
            setTime(prevTime => prevTime + 10)
          }
          
        }, 10)
      } else {
        clearInterval(timeInterval)
      } 
      return () => clearInterval(timeInterval)
    },[start, time])
  
      useEffect(() => {
         setDisplayTime(msToTime(time))
  
      },[time])
  
  
      return(
        <>
          <h2>{displayTime}</h2>
          
          <button onClick={()=> setStart(!start)}>{!start ? startResume : stop}</button>
          <button onClick={() => setTime(0)}>Reset</button>
          <button onClick={() => setTime(1000000000)}>Fast Foward</button>
        </>
  
      )





};

export default Stopwatch;
