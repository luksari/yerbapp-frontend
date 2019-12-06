import React, { FC } from 'react';
import { ButtonType, Button } from 'components/Button';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
import {
  Wrapper, LeftSide, RightSide, NoMatchAltLoader, NoMatchLoader, NoMatchAppTitle, LogoNameContainer, Text404, TextMessage,
} from './styled';

const NoMatch: FC = () => {
  return (
    <Wrapper>
      <LeftSide>
        <Link to="/">
          <LogoNameContainer>
            <Logo />
            <NoMatchAppTitle>
              YerbApp
            </NoMatchAppTitle>
          </LogoNameContainer>
        </Link>
        <Text404>
            404
        </Text404>
        <TextMessage>
          No nie! Twoja strona nie została znaleziona :(
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
