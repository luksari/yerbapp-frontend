import React, { FC, memo } from 'react';
import { Wrapper } from 'containeirs/Users/styled';
import { Title } from 'components/TitleBar';
import Helmet from 'react-helmet';
import { ActionBar } from 'components/ActionBar/ActionBar';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { compose } from 'redux';
import { usePagination } from 'hooks/usePagination';
import { FilterForm } from './components/FilterForm';

interface Props {
  redirectEdit: (id: string) => void;
  redirectCreate: VoidFunction;
}


const Explore: FC<Props> = ({
  redirectCreate,
}) => {
  const { offset, perPage, setPage } = usePagination(5, 1);

  const formValues = {
    aromaImportance: 0,
    bitternessImportance: 0,
    energyImportance: 0,
    priceImportance: 0,
    tasteImportance: 0,
    overallImportance: 0,
    name: '',
  };

  return (
    <Wrapper>
      <Helmet
        title="Przeglądaj produkty"
      />
      <Title>Przeglądaj produkty</Title>
      <ActionBar
        perPage={perPage}
        createText="Utwórz Yerba Mate"
        total={5}
        redirectCreate={redirectCreate}
        onPageChange={setPage}
      >
        <FilterForm
          formValues={formValues}
          handleSubmit={console.log}
        />
      </ActionBar>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  redirectEdit: (id: string) => dispatch(push(`/explore/${id}`)),
  redirectCreate: () => dispatch(push('/explore/create')),
});

export default compose(
  memo,
  connect(null, mapDispatchToProps),
)(Explore);
