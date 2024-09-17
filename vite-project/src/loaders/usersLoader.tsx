import { LoaderFunction } from 'react-router-dom';
import { User } from '../types/User';

export const usersLoader: LoaderFunction = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
  if (!response.ok) {
    throw new Error('Veri yüklenemedi');
  }
  
  return response.json() as Promise<User[]>;
};
