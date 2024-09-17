
import { useLoaderData, Link } from 'react-router-dom';
import { LoaderFunction } from 'react-router-dom';
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface User {
  id: number;
  username: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface LoaderData {
  post: Post;
  user: User;
  comments: Comment[];
}

// Loader fonksiyonu
// Loader fonksiyonu
export const loader: LoaderFunction = async ({ params }) => {
    const { postId } = params;
  
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await postResponse.json();
  
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    const user = await userResponse.json();
  
    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const comments = await commentsResponse.json();
  
    return { post, user, comments };
  };

const PostDetail: React.FC = () => {
  const { post, user, comments } = useLoaderData() as LoaderData;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p><strong>Yazar:</strong> <Link to={`/users/${user.id}`}>{user.username}</Link></p>

      <h2>Yorumlar:</h2>
      {comments.length > 0 ? (
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              <h3>{comment.name}</h3>
              <p><strong>Email:</strong> {comment.email}</p>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Yorum bulunamadı.</p>
      )}
    </div>
  );
};

export default PostDetail;
