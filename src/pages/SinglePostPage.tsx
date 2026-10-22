import { useParams, Link } from 'react-router';
import { posts } from '../data/posts';
import LikeButton from '../components/LikeButton'; 

export default function SinglePostPage() {
  const { id } = useParams<{ id: string }>();

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Post not found</h2>
        <p>Sorry, the post you are looking for does not exist.</p>
        <Link to="/posts">&larr; Back to all posts</Link>
      </div>
    );
  }

  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px 0' }}>
      <Link to="/posts" style={{ display: 'inline-block', marginBottom: '20px', textDecoration: 'none' }}>
        &larr; Back to posts
      </Link>
      
      <h1>{post.title}</h1>
      
      <div style={{ marginTop: '20px', lineHeight: '1.6', fontSize: '1.1rem' }}>
        <p>{post.content}</p>
      </div>

      <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--color-border, #ddd)' }}>
        <p style={{ marginBottom: '10px', color: 'gray' }}>Did you enjoy this post?</p>
        <LikeButton />
      </div>
    </article>
  );
}