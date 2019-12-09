import React, { FC } from 'react';
import {
  FooterContainer, FooterMain,
} from './styled';


export const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterMain>
        <p>
          <a href="https://github.com/luksari/yerbapp-frontend">
            YerbApp
          </a>
          {' '}
      - Copyright ® All rights reserved
        </p>
      </FooterMain>
    </FooterContainer>
  );
};
