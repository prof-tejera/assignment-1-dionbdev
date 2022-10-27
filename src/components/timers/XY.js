import React, {useState, useEffect} from 'react';
import { TimeForm } from '../generic/TimeForm';
import { startResume, stop, msToTime } from '../generic/commonThings';

const XY = () => {
  const [time, setTime] = useState(3000)
  const [start, setStart] = useState(false)
  const [displayTime, setDisplayTime] = useState('')
  const [rounds, setRounds]  = useState(3)
  
  const handleTime = (f) => {
    setTime(f)
  }

  const handleRounds = (f) => {
    setRounds(f)
  }
  
  useEffect(() => {

    
    let timeInterval = null;
    if(start &&  rounds !== 0 ){
      timeInterval = setInterval(() => {
        setTime(prevTime => prevTime - 10)
        if(time === 0){
          setRounds(prevRound => prevRound - 1)
          setTime(3000)
        }
      }, 10)
    } else {
      clearInterval(timeInterval)
    } 
    return () => clearInterval(timeInterval)
  },[start, time, rounds])

    useEffect(() => {
        setDisplayTime( msToTime(time))


    },[time])


    return(
      <>
        <h2>{displayTime}</h2>
        <h3>{rounds}</h3>
        <TimeForm handleTime={handleTime} areRounds={true} handleRounds={handleRounds} />
        <button onClick={()=> setStart(!start)}>{!start ? startResume : stop}</button>
        <button onClick={() => setTime(0)}>Reset</button>
        <button onClick={() => setRounds(0)}>Fast Foward</button>
      </>

    )


};

export default XY;
