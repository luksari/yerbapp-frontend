import React, { FC } from 'react';
import {
  FooterContainer, FooterMiddle, Row, Column1, Column2, Column3, Bottom,
} from './styled';

export const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterMiddle>
        <Row>
          <Column1>
            <h2>Lorem ipsum</h2>
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </Column1>
          <Column2>
            <h2>Lorem ipsum</h2>
            <ul>
              <li>
                  Lorem ipsum
              </li>
              <li>
                  Lorem ipsum
              </li>
              <li>
                  Lorem ipsum
              </li>
              <li>
                  Lorem ipsum
              </li>
            </ul>
          </Column2>
          <Column3>
            <h2>Lorem ipsum</h2>
            <ul>
              <li>
                  Lorem ipsum
              </li>
              <li>
                  Lorem ipsum
              </li>
              <li>
                  Lorem ipsum
              </li>
              <li>
                  Lorem ipsum
              </li>
            </ul>
          </Column3>
        </Row>
        <Bottom>
          <p>
            {new Date().getFullYear()}
              YerbApp - All Rights
          </p>
        </Bottom>
      </FooterMiddle>
    </FooterContainer>
  );
};
