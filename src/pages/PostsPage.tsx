import PostCard from '../components/PostCard';
import { posts } from '../data/posts';

export default function PostsPage() {
  return (
    <main>
      <h2>Blog Posts</h2>

      <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
        {posts.map((post) => (
          <PostCard 
            key={post.id} 
            post={post} 
          />
        ))}
      </div>
    </main>
  );
}