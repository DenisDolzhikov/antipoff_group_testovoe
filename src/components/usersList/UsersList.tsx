import styles from './UsersList.module.scss';
import { useState } from 'react';
import { useListUsersQuery } from '../../store/api/usersListApi';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdArrowForward, MdBook } from 'react-icons/md';


const UsersList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data: users, isLoading, isFetching } = useListUsersQuery(page);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!users?.data) {
    return <div>No users...</div>
  }
  
  return (
    <div>
      <h1>HomePage</h1>

      {users?.data.map(({ id, first_name, last_name }) => (
        <div key={id}>
          <Link to={`/users/${id}`}>
            {first_name} {last_name}
          </Link>
        </div>
      ))}

      <button 
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page === 1}
      >
        <MdArrowBack />
      </button>
      <button 
        onClick={() => setPage((prev) => prev + 1)}
        disabled={page === users.total_pages} 
      >
        <MdArrowForward />
      </button>
      <div>{`${page} / ${users.total_pages}`}</div>
    </div>
  )
};

export default UsersList;