import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import SinglePostPage from './pages/SinglePostPage'; // <-- Новый импорт
import ContactPage from './pages/ContactPage';
import ProtectedPage from './pages/ProtectedPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:id" element={<SinglePostPage />} />
        
        <Route path="contact" element={<ContactPage />} />
        <Route path="admin" element={<ProtectedPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;