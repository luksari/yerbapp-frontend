import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

interface Props {
  props: any;
}


export const AdminPanelRaw: React.FC<Props> = () => {
  return (
    <div>

    </div>
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
