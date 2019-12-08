import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Title } from 'components/TitleBar';

const Home: FC = () => {
  return (
    <div>
      <Helmet title="Strona główna" />
      <Title>Strona główna</Title>
        Homepage
    </div>
  );
};

export default Home;
