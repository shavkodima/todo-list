import {FC} from 'react';
import {useLocation} from 'react-router-dom'
import styles from './header.module.css'
import { NAVLINK } from '../../utils/const';
import Times from '../times/Times';

const Header:FC = () => {
  const location = useLocation()
  
  return (
    <div className={styles.header}>
        <div>{NAVLINK.find(nav=> nav.url.toLocaleLowerCase().lastIndexOf(location.pathname) >= 0 )?.title}</div>
        <div>{<Times />}</div>
    </div>
  );
};

export default Header;