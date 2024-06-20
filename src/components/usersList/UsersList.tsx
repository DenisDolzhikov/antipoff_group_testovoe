import styles from './UsersList.module.scss';
import { useState } from 'react';
import { useListUsersQuery } from '../../store/api/usersListApi';


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

      {users.data.map(({ id, first_name, last_name }) => (
        <div key={id}>
          {first_name} {last_name}
        </div>
      ))}

      <button onClick={() => setPage(page - 1)} isLoading={isFetching}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)} isLoading={isFetching}>
        Next
      </button>
    </div>
  )
};

export default UsersList;