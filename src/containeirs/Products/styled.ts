import styled from 'styled-components';
import { FormField } from 'components/Form/components/FormField';

export const RatingWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

export const StyledFormField = styled(FormField)`

`;

export const CardGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(690px, 1fr));
  align-items: center;
  justify-items: center;
  grid-gap: 45px;
`;

export const DetailsWrapper = styled.div`
  padding: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 65%;
  height: 100%;
  background: ${({ theme }) => theme.colors.mainBackground};
  box-shadow: 0px 5px 10px -1px ${({ theme }) => theme.colors.shadow};
  z-index: 0;
  margin-top: 25px;
  border-radius: 10px;
`;

export const YerbaDetailsTitle = styled.h2`
  position: relative;
  font-size: ${({ theme }) => theme.metrics.fontSize.xxl};
  font-weight: 650;
  z-index: 5;
  ::after, ::before {
    position: absolute;
    content: '';
    width: 50%;
    height: 50px;
    background: ${({ theme }) => theme.colors.shadow};
    z-index: -1;
    opacity: 0.5;
  }
  ::after {
    bottom: -10px;
    left: 0;
  }
  ::before {
    top: 15%;
    height: 15px;
    right: 40%;
    width: 20%;
  }
`;

export const StyledImg = styled.img`
  width: 500px;
  height: auto;
`;

export const ScoreValue = styled.span`
  font-weight: 700;
  font-size: ${({ theme }) => theme.metrics.fontSize.xl};
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(0.01);
  transition: 150ms linear transform;
  background: #ffffffaa;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainDataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

`;

export const ImageWrapper = styled.div`
  position: relative;
  &:hover {
    ${ScoreValue} {
      transform: scale(1)
    }
  }

`;
