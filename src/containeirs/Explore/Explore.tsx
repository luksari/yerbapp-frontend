import React, { FC, memo } from 'react';
import { Wrapper } from 'containeirs/Users/styled';
import { Title } from 'components/TitleBar';
import Helmet from 'react-helmet';
import { ActionBar } from 'components/ActionBar/ActionBar';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { compose } from 'redux';
import { usePagination } from 'hooks/usePagination';
import { Rating } from 'components/Rating';
import { SizeType } from 'components/Rating/types';
import { Formik } from 'formik';
import { FormField } from 'components/Form/components/FormField';
import { Input } from 'components/Input';
import { RatingWrapper, FilterWrapper } from './styled';

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
  };

  type ValuesType = typeof formValues;

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
        <Formik<ValuesType>
          initialValues={formValues}
          onSubmit={console.log}
        >
          {({ values, submitForm }) => (
            <FilterWrapper>
              <FormField
                name="name"
                component={Input}
                fullWidth
                props={{
                  placeholder: 'Wyszukaj po nazwie...',
                }}
              />
              <RatingWrapper>
                <Rating
                  label="Aromat"
                  name="aromaImportance"
                  size={SizeType.Small}
                />
                <Rating
                  label="Gorycz"
                  name="bitternessImportance"
                  size={SizeType.Small}
                />
                <Rating
                  label="Pobudzenie"
                  name="energyImportance"
                  size={SizeType.Small}
                />
                <Rating
                  label="Cena"
                  name="priceImportance"
                  size={SizeType.Small}
                />
                <Rating
                  label="Smak"
                  name="tasteImportance"
                  size={SizeType.Small}
                />
                <Rating
                  label="Ogólna ocena"
                  name="overallImportance"
                  size={SizeType.Small}
                />
              </RatingWrapper>
            </FilterWrapper>
          )}
        </Formik>
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
