import React, { FC } from 'react';
import { ButtonType, Button } from 'components/Button';
import { Link } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';
import Helmet from 'react-helmet';
import {
  Wrapper, LeftSide, RightSide, NoMatchAltLoader, NoMatchLoader, NoMatchAppTitle, LogoLink, Text404, TextMessage,
} from './styled';

const NotAllowed: FC = () => {
  return (
    <Wrapper>
      <Helmet title="405 - Not allowed" />
      <LeftSide>
        <LogoLink to="/">
          <Logo />
          <NoMatchAppTitle>
              YerbApp
          </NoMatchAppTitle>
        </LogoLink>
        <Text404>
            405
        </Text404>
        <TextMessage>
          Hej ty! Chyba nie powinno Cię tu być!
        </TextMessage>
        <Link to="/">
          <Button themeType={ButtonType.Secondary} type="button">
              Powrót do katalogu Yerba Mate
          </Button>
        </Link>
      </LeftSide>
      <RightSide>
        <NoMatchLoader />
        <NoMatchAltLoader />
      </RightSide>
    </Wrapper>
  );
};

export default NotAllowed;
