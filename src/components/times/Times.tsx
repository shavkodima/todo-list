import {FC, useEffect, useState} from 'react';

const Times = () => {
  const [time, setTime] = useState<string>()

  useEffect(()=>{
    setInterval(()=>{
      const date = new Date();
      const times = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
      setTime(times)
    },1000)
  },[])

  return (
    <div>
      
    </div>
  );
};

export default Times;