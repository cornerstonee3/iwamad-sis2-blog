import { NavLink } from 'react-router';
import logo from '../assets/logo.svg';

type HeaderProps = {
  name: string;
  tagline: string;
};

export default function Header({ name, tagline }: HeaderProps) {
  return (
    <header>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img src={logo} alt="" width={32} height={32} />
        <h1>{name}</h1>
      </div>
      
      <p style={{ color: '#ffffff', marginTop: '4px' }}>{tagline}</p>
      
      <nav style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/posts" className={({ isActive }) => isActive ? "active" : ""}>Posts</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
        <NavLink to="/admin" className={({ isActive }) => isActive ? "active" : ""}>Admin</NavLink>
      </nav>
    </header>
  );
}