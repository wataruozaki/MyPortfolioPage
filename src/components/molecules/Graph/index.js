import React from 'react';
import { Radar } from 'react-chartjs-2';
const data = {
  labels: [
    'Next.js',
    'React/Redux',
    'Node/Express',
    'HTML5/CSS3',
    'TypeScript',
    'Photoshop',
    'Illustrator',
    'XD',
  ],
  datasets: [
    {
      label: '自分の中での技術量',
      backgroundColor: 'rgba(10, 143, 173,0.2)',
      borderColor: 'rgba(10, 143, 173,1)',
      pointBackgroundColor: 'rgba(10, 143, 173,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(10, 143, 173,1)',
      data: [4, 4.5, 3, 5, 3, 4, 4, 3],
    },
    {
      label: '現在取り組んでいるスキル',
      backgroundColor: 'rgba(247, 198, 2,0.2)',
      borderColor: 'rgba(247, 198, 2,1)',
      pointBackgroundColor: 'rgba(247, 198, 2,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(247, 198, 2,1)',
      data: [5, 5, 4.5, 2, 5, 3, 3, 4],
    },
  ],
};
const Graph = () => <Radar data={data} />;

export default Graph;
