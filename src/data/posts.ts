export type Post = {
  id: string;
  title: string;
  excerpt: string;
  content: string; 
};

export const posts: Post[] = [
  {
    id: '1',
    title: 'IWAMAD course review',
    excerpt: 'My rating on IWAMAD course and what i think',
    content: 'I like web development course so far, even though it might be challenging. It provides a lot of useful info for web developer.'
  },
  {
    id: '2',
    title: 'Plans on future',
    excerpt: 'Describing my plans on the future',
    content: 'After graduation I plan to start Master Degree and then find a good job'
  },
  {
    id: '3',
    title: 'My hobbies',
    excerpt: 'Talking about hobbies',
    content: 'I love videogames since I was a kid, I also love volleyball, it is hard to master and I like team interaction. Hiking is also pretty good'
  },
  {
    id: '4',
    title: 'Work and Travel',
    excerpt: 'Sharing on having W&T program',
    content: 'This summer I will visit USA by W&T Program. I am looking forward to it.'
  },
  {
    id: '5',
    title: 'SIS2',
    excerpt: 'Describing my work on SIS2',
    content: 'SIS2 is interesting to do, but I am kinda tired.'
  }
];