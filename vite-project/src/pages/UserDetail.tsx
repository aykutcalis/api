import  { useState, useEffect } from 'react';
import { LoaderFunction } from 'react-router-dom'; // Bu importu ekleyin

import { useLoaderData } from 'react-router-dom';
import { User } from '../types/User';


interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Album {
  userId: number;
  id: number;
  title: string;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const UserDetail: React.FC = () => {
  const user = useLoaderData() as User;
  const [activeTab, setActiveTab] = useState('posts');
  const [posts, setPosts] = useState<Post[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  };

  const fetchAlbums = async () => {
    setLoading(true);
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`);
    const data = await response.json();
    setAlbums(data);
    setLoading(false);
  };

  const fetchTodos = async () => {
    setLoading(true);
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`);
    const data = await response.json();
    setTodos(data);
    setLoading(false);
  };

  useEffect(() => {
    if (activeTab === 'posts') {
      fetchPosts();
    } else if (activeTab === 'albums') {
      fetchAlbums();
    } else if (activeTab === 'todos') {
      fetchTodos();
    }
  }, [activeTab, user.id]);

  return (
    <div>
      <h1>Kullanıcı Detayları</h1>
      <p><strong>İsim:</strong> {user.name}</p>
      <p><strong>Kullanıcı Adı:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Telefon:</strong> {user.phone}</p>
      <p><strong>Web Site:</strong> {user.website}</p>
      <p><strong>Şirket:</strong> {user.company.name}</p>
      <p><strong>Adres:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
      <p><strong>Coğrafi Konum:</strong> {user.address.geo.lat}, {user.address.geo.lng}</p>
      <p><strong>Şirket Slogan:</strong> {user.company.catchPhrase}</p>
      <p><strong>Şirket Faaliyeti:</strong> {user.company.bs}</p>

      <div>
        <button onClick={() => setActiveTab('posts')}>Gönderiler</button>
        <button onClick={() => setActiveTab('albums')}>Albüm</button>
        <button onClick={() => setActiveTab('todos')}>Görevler</button>
      </div>

      <div>
        {loading && <p>Yükleniyor...</p>}

        {activeTab === 'posts' && (
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}

        {activeTab === 'albums' && (
          <ul>
            {albums.map(album => (
              <li key={album.id}>
                <h2>{album.title}</h2>
              </li>
            ))}
          </ul>
        )}

        {activeTab === 'todos' && (
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>
                <input type="checkbox" checked={todo.completed} readOnly />
                <span>{todo.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default UserDetail;
export const loader: LoaderFunction = async ({ params }) => {
    const userId = params.userId as string;
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await userResponse.json();
    return user;
  };