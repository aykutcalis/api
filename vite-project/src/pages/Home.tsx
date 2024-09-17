

import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Ana Sayfa</h1>
      <Link to="/users">
        <button>Kullanıcılar Listesine Git</button>
      </Link>
    </div>
  );
}

export default Home;
