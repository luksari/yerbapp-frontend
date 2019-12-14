import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import { Wrapper } from './styled';

interface Props {
  props: any;
}


export const AdminPanelRaw: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Helmet title="Panel administratora" />
      <Title>Panel administratora</Title>
    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = (dispatch) => ({

});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(AdminPanelRaw);
