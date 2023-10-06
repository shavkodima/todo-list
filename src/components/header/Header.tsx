import {FC} from 'react';
import {useLocation} from 'react-router-dom'
import styles from './header.module.css'
import { NAVLINK } from '../../utils/const';
import Times from '../times/Times';

const Header:FC = () => {
  const location = useLocation()

  return (
    <div className={styles.header}>
        {NAVLINK.find(nav=> nav.url === location.pathname)?.title} {<Times />}
    </div>
  );
};

export default Header;