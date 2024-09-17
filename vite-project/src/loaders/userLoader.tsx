import { LoaderFunction } from 'react-router-dom';
import { User } from '../types/User';

export const userLoader: LoaderFunction = async ({ params }) => {
  const { userId } = params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  
  if (!response.ok) {
    throw new Error('Kullanıcı bilgisi yüklenemedi');
  }
  
  return response.json() as Promise<User>;
};
