import styles from './UsersList.module.scss';
import { useEffect, useState } from 'react';
import { useListUsersQuery } from '../../store/api/usersListApi';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import LikeSVG from '../../assets/like.svg?react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchUsers } from '../../store/slices/usersListSlice';


const UsersList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { data: users, isLoading } = useListUsersQuery(page);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!users?.data) {
    return <div>No users...</div>
  }

  const handeLike = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsLiked(!isLiked);
    dispatch(fetchUsers());
  }
  
  return (
    <div className={styles.usersList}>

      <div className={styles.usersListWrapper}>

        <div className={styles.users}>

          {users?.data.map(({ id, first_name, last_name, avatar }) => (
            <Link to={`/users/${id}`} key={id} className={styles.userContainer}>
              <div className={styles.userContainerWrapper}>
                <div className={styles.userAvatarContainer}>
                  <img src={avatar} alt="avatar" className={styles.userAvatar} />
                </div>
                <p>{first_name} {last_name}</p>
                <button 
                  className={styles.likeButtonContainer}
                  onClick={handeLike}
                >
                  <LikeSVG 
                    className={`${styles.likeButton} ${isLiked ? styles.likeButtonActive : ''}`} 
                    
                  />
                </button>
              </div>
            </Link>
          ))}
          
        </div>

        <div className={styles.paganationContainer}>
          <button 
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 1}
            className={styles.paginationButton}
          >
            <MdArrowBack />
          </button>

          <div className={styles.paginationPagesCount}>{`${page} / ${users.total_pages}`}</div>

          <button 
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === users.total_pages} 
            className={styles.paginationButton}
          >
            <MdArrowForward />
          </button>
          
        </div>
      </div>
    </div>
  )
};

export default UsersList;