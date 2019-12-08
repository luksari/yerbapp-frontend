import React, { FC } from 'react';
import {
  FooterContainer, FooterBottom,
} from './styled';


export const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterBottom>
        <p>
          <a href="https://github.com/luksari/yerbapp-frontend">
            YerbApp
          </a>
          {' '}
      - Copyright ® All rights reserved
        </p>
      </FooterBottom>
    </FooterContainer>
  );
};
