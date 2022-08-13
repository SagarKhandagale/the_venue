import React, { useState, useEffect, useCallback } from 'react'
import { Slide } from 'react-awesome-reveal'

const TimeUntil = () => {

  const [time, setTime] = useState({
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0'
  })

  const renderItem = (time, value) => {
    return (
      <div className="countdown_item">
        <div className="countdown_time">{time}</div>
        <div className="countdown_tag">{value}</div>
      </div>
    );
  }

  const getTimeUntil = useCallback((deadline) => {

    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log(time);

    if (time < 0) {
      console.log('Date passed');
    } else {
      console.log('Still going on');
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor((time / (1000 * 60 * 60 * 24)));

      setTime((prev) => {
        return ({
          ...prev,
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        })
      });
    }
  },[]) 

  useEffect(() => {
    setInterval(() => getTimeUntil('Sep, 20, 2022, 01:20:000'), 1000)
  }, [getTimeUntil])

  return (
    <>
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">
            Event starts in
          </div>
          <div className="countdown_bottom">
            {renderItem(time.days, 'DAYS')}
            {renderItem(time.hours, 'HS')}
            {renderItem(time.minutes, 'MIN')}
            {renderItem(time.seconds, 'SEC')}
          </div>
        </div>
      </Slide>
    </>
  )
}

export default TimeUntil