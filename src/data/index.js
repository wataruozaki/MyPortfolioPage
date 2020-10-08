export const worksContents = [
  {
    name: 'SNSアプリケーション',
    date: '2020.09.01',
    image: `${process.env.PUBLIC_URL}/image/test.jpg`,
    description: 'フロントにはReact,Reduxを使い、ExpressをApiにしています。',
    skilList: ['React', 'Redux', 'Express', 'mongoDB'],
    url: 'https://wataruozaki.netlify.app/',
  },
  {
    name: 'カレンダー',
    date: '2020.09.11',
    image: `${process.env.PUBLIC_URL}/image/test.jpg`,
    description:
      'Reduxの動作確認、date.js UIにはAtomic design,styled-componentで組み上げました。',
    skilList: ['React', 'Redux', 'Styled-components'],
    url: 'https://wataruozaki.netlify.app/',
  },
  {
    name: 'blog app',
    date: '2020.08.31',
    image: `${process.env.PUBLIC_URL}/image/test.jpg`,
    description:
      'Next.jsを使ったMERNスタックでブログ風アプリケーションを作りました.',
    skilList: ['Next', 'ReactHooks'],
    url: 'https://wataruozaki.netlify.app/',
  },
];
