import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useFavoritesStore } from '../store/favoritesStore';

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface LoaderData {
  album: {
    id: number;
    title: string;
  };
  photos: Photo[];
}

const AlbumDetail: React.FC = () => {
  const { album, photos } = useLoaderData() as LoaderData;
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  return (
    <div>
      <h1>{album.title}</h1>
      <div>
        {photos.map(photo => (
          <div key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <h3>{photo.title}</h3>
            <button
  className={isFavorite(photo.id) ? 'favorite' : 'not-favorite'}
  onClick={() => isFavorite(photo.id) ? removeFavorite(photo.id) : addFavorite({
    userId: 1,  // Bu değeri dinamik olarak almanız gerekebilir
    albumId: album.id,
    id: photo.id,
    title: photo.title,
    url: photo.url,
    thumbnailUrl: photo.thumbnailUrl
  })}
>
  {isFavorite(photo.id) ? '❤️' : '🤍'}
</button>


          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumDetail;
