import { createBrowserRouter } from 'react-router-dom';
import UserDetail, { loader as userLoader } from './pages/UserDetail';
import PostDetail, { loader as postLoader } from './pages/PostDetail';
import Users from './pages/Users';
import AlbumDetail, { loader as albumLoader } from './pages/AlbumDetail';
import Layout from './components/Layout'; // Layout bileşenini import edin

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Rotaları Layout ile sarmalayın
    children: [
      {
        path: "/",
        element: <Users />,
        loader: async () => fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
      },
      {
        path: "/users/:userId",
        element: <UserDetail />,
        loader: userLoader
      },
      {
        path: "/users/:userId/posts/:postId",
        element: <PostDetail />,
        loader: postLoader
      },
      {
        path: "/users/:userId/albums/:albumId",
        element: <AlbumDetail />,
        loader: albumLoader
      }
    ]
  }
]);

export default router;
