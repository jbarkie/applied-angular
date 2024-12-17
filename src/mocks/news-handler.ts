import { delay, http, HttpResponse } from 'msw';

const fakeData = [
  {
    id: '1',
    title: 'Angular Inputs and Outputs',
    shortDescription:
      'Read about Angular inputs and outputs in "modern" Angular',
    link: 'https://applied-angular.hypertheory.com/guides/components.html',
    datePublished: '2024-12-16T17:32:12.556Z',
    linkSlug: 'Read about Angular Inputs and Outputs',
  },
  {
    id: '2',
    title: 'Creating an Angular Application',
    shortDescription: 'Learn how to create a super rad Angular app!',
    link: 'https://applied-angular.hypertheory.com/guides/angular-setup.html',
    datePublished: '2024-12-05T13:18:12.556Z',
    linkSlug: 'Read about Creating an App',
  },
  {
    id: '3',
    title: 'Deborah Kurata YouTube',
    shortDescription:
      'Youtube Videos about Angular Signals and stuff from Deborah Kurata',
    link: 'https://www.youtube.com/@deborah_kurata/videos',
    datePublished: '2024-12-16T21:20:17.014Z',
    linkSlug: 'Deborah Kurata Videos',
  },
];

const handlers = [
  http.get('http://fake-news.some-fake-server.com/news-feed', async () => {
    await delay(); // provides random, reasonable delay as if a real HTTP call was being made
    return HttpResponse.json(fakeData);
  }),
];

export default handlers;
