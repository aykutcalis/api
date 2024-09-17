
import { Link, useLoaderData } from 'react-router-dom';
import { User } from '../types/User';

const Users: React.FC = () => {
  const users = useLoaderData() as User[];  // Loader'dan gelen kullanıcı verisi

  return (
    <div>
      <h1>Kullanıcılar Listesi</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name} - {user.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
