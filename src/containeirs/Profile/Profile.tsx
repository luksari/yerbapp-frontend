import React from 'react';
import styled from 'styled-components';
import { useGetMeDetailsQuery } from 'generated/graphql';
import { ProfileForm } from './components/ProfileForm';

const Wrapper = styled('div')`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
`;

const Profile = () => {
  const { data, loading, error } = useGetMeDetailsQuery();
  return (
    <Wrapper>
      {data && <ProfileForm data={data} loading={loading} /> }
    </Wrapper>
  );
};

export default Profile;
