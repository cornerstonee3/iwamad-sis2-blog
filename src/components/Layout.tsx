import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Header 
        name="Amanbol Moldash" 
        tagline="My blog" 
      />
      
      <div style={{ minHeight: '60vh', padding: '20px 0' }}>
        <Outlet />
      </div>
      
      <Footer 
        year={2026} 
        name="Amanbol" 
      />
    </>
  );
}