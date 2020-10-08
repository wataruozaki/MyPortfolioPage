import React from 'react';

import { About, Header, Heading, Profile, SkillSet, Footer } from './organisms';

import Works from './organisms/Works/container';

function App() {
  return (
    <>
      <Header />
      <About />
      <Heading />
      <Works />
      <SkillSet />
      <Profile />
      <Footer />
    </>
  );
}

export default App;
