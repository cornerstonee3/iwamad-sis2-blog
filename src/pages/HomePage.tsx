import ProfileCard from '../components/ProfileCard';
import myAvatar from '../assets/me.jpg'; 

export default function HomePage() {
  return (
    <ProfileCard 
      name="Amanbol Moldash"
      role="IWAMAD Student"
      avatarUrl={myAvatar} 
      bio="Hello, everyone! I'm a 3rd year student at KBTU. I like gaming and hiking. This is my personal card."
      skills={[]} 
    />
  );
}