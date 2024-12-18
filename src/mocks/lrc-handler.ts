import { http, HttpResponse, delay } from 'msw';

const fakeLinks = [
  {
    id: '1',
    name: 'TypeScript Handbook',
    description: 'The TypeScript Language Handbook',
    link: 'https://www.typescriptlang.org/docs/handbook/intro.html',
    datePosted: '2024-12-18',
    postedBy: 'Jeff',
  },
  {
    id: '2',
    name: 'Mozilla Developer Network',
    description: 'Good stuff here',
    link: 'https://www.developer.mozilla.org/',
    datePosted: '2024-12-18',
    postedBy: 'Bob',
  },
];

export const lrcHandlers = [
  http.get('/api/posts', async () => {
    await delay();
    return HttpResponse.json(fakeLinks);
  }),
];
