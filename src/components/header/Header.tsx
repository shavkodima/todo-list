import {FC, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom'
import styles from './header.module.css'
import { NAVLINK } from '../../utils/const';

const Header:FC = () => {
  const [time, setTime] = useState<string>()
  const location = useLocation()
  
  useEffect(()=>{
    setInterval(()=>{
      const date = new Date();
      const times = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
      setTime(times)
    },1000)
  },[])

  return (
    <div className={styles.header}>
        {NAVLINK.find(nav=> nav.url === location.pathname)?.title} {time}
    </div>
  );
};

export default Header;