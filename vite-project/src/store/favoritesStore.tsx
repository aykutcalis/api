import create from 'zustand';

interface Photo {
  userId: number;
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface FavoritesState {
  photos: Photo[];
  addPhoto: (photo: Photo) => void;
  removePhoto: (photoId: number) => void;
}

export const useFavoritesStore = create<FavoritesState>((set) => ({
  photos: [],
  addPhoto: (photo) => set((state) => ({
    photos: [...state.photos, photo]
  })),
  removePhoto: (photoId) => set((state) => ({
    photos: state.photos.filter(photo => photo.id !== photoId)
  })),
}));
