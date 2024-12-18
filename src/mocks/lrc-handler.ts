import { http, HttpResponse, delay } from 'msw';

const fakeLinks = [
  {
    id: '1',
    name: 'TypeScript Handbook',
    description: 'The TypeScript Language Handbook',
    link: '',
    datePosted: '2024-12-18',
    postedBy: 'Jeff',
  },
];

export const lrcHandlers = [
  http.get('/api/posts', async () => {
    await delay();
    return HttpResponse.json(fakeLinks);
  }),
];
