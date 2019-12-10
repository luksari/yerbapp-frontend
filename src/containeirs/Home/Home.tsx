import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ButtonType } from 'components/Button';
import {
  Slogan, HomeContainer, ExploreButton,
} from './styled';

const Home: FC = () => {
  return (
    <HomeContainer>
      <Slogan>
       Świat yerba mate stoi przed Tobą otworem
      </Slogan>
      <Link to="/explore">
        <ExploreButton themeType={ButtonType.Secondary}>
          Zobacz!
        </ExploreButton>
      </Link>
    </HomeContainer>
  );
};

export default Home;
