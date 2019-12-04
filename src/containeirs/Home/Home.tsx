import React, { FC } from 'react';
import { Image, ImageSection, ImageText } from './styled';

const Home: FC = () => {
  return (
    <ImageSection>
      <Image src="img/background/HomeBG.jpg" alt="Test" />
      <ImageText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?</ImageText>
    </ImageSection>
  );
};

export default Home;
