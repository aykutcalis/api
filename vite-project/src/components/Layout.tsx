import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useFavoritesStore } from '../store/favoritesStore';

const Layout: React.FC = () => {
  const { photos } = useFavoritesStore();
  const favoritesCount = photos.length;

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><Link to="/favorites">Favoriler ({favoritesCount})</Link></li>
        </ul>
      </nav>
      <main>
        <Outlet /> {/* Bu, mevcut rotanın bileşenini render eder */}
      </main>
    </div>
  );
};

export default Layout;
