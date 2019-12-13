import React, {
  FC, ReactNode,
} from 'react';
import { Topbar } from 'components/Topbar';
import { Navbar } from 'components/Navigation/Navbar';
import { useInjectSaga } from 'utils/injectSaga';
import { watchAuthSaga } from 'store/auth/saga';
import { StyledAppLayout, ComponentWrapper } from './styled';

interface Props {
  children: ReactNode;
}

export const AppLayout: FC<Props> = ({
  children,
}) => {
  useInjectSaga({ key: 'auth', saga: watchAuthSaga });

  return (
    <>
      <Navbar />
      <StyledAppLayout>
        <Topbar />
        <ComponentWrapper>
          {children}
        </ComponentWrapper>
      </StyledAppLayout>
    </>
  );
};
