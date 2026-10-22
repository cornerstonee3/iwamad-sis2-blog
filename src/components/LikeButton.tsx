import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button 
      onClick={() => setLikes(likes + 1)}
      style={{
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-on-primary, #ffffff)',
        border: 'none',
        padding: '8px 16px',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        fontWeight: '600',
        transition: 'opacity 0.2s',
      }}
      onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
      onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
    >
      ❤️ {likes}
    </button>
  );
}