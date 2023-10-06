import {FC, useEffect, useState} from 'react';
import { addZero } from '../../utils/parseDate';

const Times = () => {
  const [time, setTime] = useState<string>()

  useEffect(()=>{
    setInterval(()=>{
      const date = new Date();
      const times = addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds())
      setTime(times)
    },1000)
  },[])

  return (
    <div>
      {time}
    </div>
  );
};

export default Times;