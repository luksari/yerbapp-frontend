import React, { FC, ReactNode } from 'react';
import { UserModel } from 'models/user';
import { Topbar } from 'components/Topbar';
import { Footer } from 'components/Footer';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { StyledLayout, ComponentWrapper } from './styled';

interface Props {
  user: UserModel;
  title: string;
  logout: VoidFunction;
  isLoggedIn: boolean;
  children: ReactNode;
}

const LayoutRaw: FC<Props> = ({
  children, logout, title, isLoggedIn,
}) => {
  return (
    <StyledLayout>
      <Topbar handleLogout={logout} title={title} isLoggedIn={isLoggedIn} />
      <ComponentWrapper>
        {children}
      </ComponentWrapper>
      <Footer />
    </StyledLayout>
  );
};

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = (dispatch) => ({

});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export const Layout = compose(
  withConnect,
)(LayoutRaw);
