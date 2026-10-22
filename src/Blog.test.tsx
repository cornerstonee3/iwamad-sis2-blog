import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { describe, test, expect } from 'vitest';

import LikeButton from './components/LikeButton';
import PostsPage from './pages/PostsPage';
import App from './App';

import { LikesProvider } from './context/LikesContext';
import { AuthProvider } from './context/AuthContext';
import { posts } from './data/posts';

describe('Blog Application Tests', () => {

  test('1. Like button changes when clicked', async () => {
    const user = userEvent.setup();
    
    render(
      <LikesProvider>
        <LikeButton />
      </LikesProvider>
    );

    const button = screen.getByRole('button');
    const initialText = button.textContent;

    await user.click(button);

    expect(button.textContent).not.toBe(initialText);
  });


  test('2. Posts list shows one card per post in the array', () => {
    render(
      <MemoryRouter>
        <PostsPage />
      </MemoryRouter>
    );

    const readMoreLinks = screen.getAllByText(/Read more/i);

    expect(readMoreLinks.length).toBe(posts.length);
  });


  test('3. Protected page shows sign-in when signed out', () => {
    render(
      <MemoryRouter initialEntries={['/admin']}>
        <AuthProvider>
          <LikesProvider>
            <App />
          </LikesProvider>
        </AuthProvider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Sign In Required/i)).toBeInTheDocument();
  });

});