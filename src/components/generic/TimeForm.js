import React, {useState} from 'react';
import '../styles/addButton.css';

export const TimeForm = (props) => {
  
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [rounds, setRounds] = useState(0);
  

  const handleHoursChange = (e) => {
      setHours(e.target.value)
  }

  const handleMinutesChange = (e) => {
    setMinutes(e.target.value)
  }

  const handleSecondsChange = (e) => {
    setSeconds(e.target.value)
  }

  const handleRoundsChange = (e) => {
    setRounds(e.target.value)
  }
  

  const handleSubmit = (event) => {
    event.preventDefault()
    let millHours = 3600000 * hours ;
    let millMinutes = 60000 * minutes;
    let millSeconds = 1000 * seconds;
    let timeTotal = millHours + millMinutes + millSeconds;
    props.handleTime(timeTotal)
    if(props.areWorkStart){
      props.handleWorkStart(timeTotal);
    }
    
    if(props.areRounds === true) {
      props.handleRounds(rounds)
    }

  }

  return (
    <form 
     onSubmit={handleSubmit}
     >
      <label>Hours</label>
      <input
        type="number"
        aria-label="Hours"
        min="0" 
        max="5"
        placeholder="Hours"
        value={hours}
        onChange={handleHoursChange}
      />
      <label>Minutes</label>
      <input
        type="number"
        aria-label="Minutes"
        min="0" 
        max="59"
        placeholder="Minutes"
        value={minutes}
        onChange={handleMinutesChange}
      />
      <label>Seconds</label>
      <input
        type="number"
        aria-label="Seconds"
        min="0" 
        max= "59"
        placeholder="Seconds"
        value={seconds}
        onChange={handleSecondsChange}
      />
          { props.areRounds ? 
            <>
              <label>Rounds</label>
              <input
                type="number"
                aria-label="Rounds"
                min="0" 
                max= "59"
                placeholder="Rounds"
                value={rounds}
                onChange={handleRoundsChange}
              />
              </>  : " "
          }
      <input 
        type="submit" 
        value="Add" 
        className="add"
        />
    </form>
  );
}