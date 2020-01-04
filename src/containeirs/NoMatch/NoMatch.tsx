import React, { FC } from 'react';
import { ButtonType, Button } from 'components/Button';
import { Link } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';
import Helmet from 'react-helmet';
import {
  Wrapper, LeftSide, RightSide, NoMatchAltLoader, NoMatchLoader, NoMatchAppTitle, LogoLink, Text404, TextMessage,
} from './styled';

const NoMatch: FC = () => {
  return (
    <Wrapper>
      <LeftSide>
        <Helmet title="404 - Not found" />
        <LogoLink to="/">
          <Logo />
          <NoMatchAppTitle>
              YerbApp
          </NoMatchAppTitle>
        </LogoLink>
        <Text404>
            404
        </Text404>
        <TextMessage>
          Coś jest nie tak! Chciałeś się znaleźć w
          {' '}
          <pre>null | undefined</pre>
        </TextMessage>
        <Link to="/">
          <Button themeType={ButtonType.Secondary} type="button">
              Powrót do strony głównej
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

export default NoMatch;
