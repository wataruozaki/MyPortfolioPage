import React from 'react';
import style from './Profile.module.css';

const Profile = () => {
  return (
    <div className={style.wrapper}>
      <h3>Profile</h3>
      <div className={style.container}>
        <img
          src={`${process.env.PUBLIC_URL}/image/guitar.png`}
          alt="プロフィール"
          className="img"
        />
        <section>
          <h4>尾崎　航</h4>
          <p>1991.08.20</p>
          <p>フィリピン マニラ出身 神奈川育ち</p>
          <br />
          <p>
            2019年まで様々なアーティストのサポートや、レコーディング、舞台への楽曲提供など精力的に活動。
            <br />
            他、過去に六本木の老舗ディスコで主任を任され、新人教育をする経験や、音楽フェスにて飲料メーカーのブースの運営に従事するなど、活動は多岐にわたる。
            <br />
            <br />
            祖母の死後、人の生き方について考え、
            <br />
            人のために生きることこそが人の生きる道と悟り、
            音楽をやめ、IT業界に進むことを決意。
            <br />
            <br />
            新規参入するならより新しい技術を。とReactを独学し、UI/UXのヒントを得るためにweb制作の訓練校に通う。
            <br />
            合言葉は「chord to cord」コードを弾く人からコードを書く人へ。
          </p>
        </section>
      </div>
    </div>
  );
};

export default Profile;
