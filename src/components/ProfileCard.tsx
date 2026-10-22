import LikeButton from './LikeButton';
import { Card } from './ui/Card';

type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl?: string;
  bio: string;
  skills?: string[];
};

export default function ProfileCard({ name, role, avatarUrl, bio }: ProfileCardProps) {
  return (
    <main>
      <Card>
        <div style={{ textAlign: 'center' }}>
          {avatarUrl && (
            <img 
              src={avatarUrl} 
              alt={`Profile picture of ${name}`} 
              style={{ 
                width: '240px', 
                height: '240px', 
                borderRadius: '50%', 
                objectFit: 'cover', 
                display: 'block', 
                margin: '0 auto 16px',
                border: '3px solid var(--color-border)'
              }} 
            />
          )}
          
          <h2>{name}</h2>
          <h3 style={{ color: 'var(--color-text-muted)', marginTop: '4px' }}>{role}</h3>
          <p>{bio}</p>

          <div style={{ marginTop: '20px' }}>
            <LikeButton />
          </div>
        </div>
      </Card>
    </main>
  );
}