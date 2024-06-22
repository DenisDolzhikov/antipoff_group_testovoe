import styles from './LogoutButton.module.scss';
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { logout } from "../../store/slices/authSlice";
import React from 'react';
import { useMediaQuery } from 'usehooks-ts'
import LogoutSVG from '../../assets/logout.svg?react';

interface Props {
  className?: string
}

const LogoutButton: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const matches = useMediaQuery('(min-width: 1000px)');

  return (
      <button 
        className={`${styles.logoutButton} ${className}`}
        onClick={() => dispatch(logout())}
      >
        {matches ? 'Выход' : <LogoutSVG className={styles.logoutSVG} />}
      </button>
  )
}

export default LogoutButton;