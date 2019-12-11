import styled from 'styled-components';
import { Button } from 'components/Button';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 120px;
  width: 70%;
  height: 100%;
  justify-content: flex-start;
`;

export const Slogan = styled.h2`
  margin-top: ${({ theme }) => theme.metrics.margin.xxl};
  font-size: ${({ theme }) => theme.metrics.fontSize.xxl};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.alternativeText};
`;

export const ExploreButton = styled(Button)`
  font-size: ${({ theme }) => theme.metrics.fontSize.l};
  padding: ${({ theme }) => theme.metrics.padding.m};
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
`;

export const StyledLink = styled(Link)`
  width: fit-content;
  margin: 0;
  padding: 0;
`;
