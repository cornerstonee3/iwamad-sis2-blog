import { Link } from 'react-router';
import { Card } from './ui/Card';
import { type Post } from '../data/posts';

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <Link to={`/posts/${post.id}`}>Read more</Link>
    </Card>
  );
}