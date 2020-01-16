import React, { FC, memo, useMemo } from 'react';
import { ButtonType } from 'components/Button';
import { SizeType } from 'components/Rating/types';
import { truncate } from 'lodash';
import { Icon } from 'antd';
import { User } from 'generated/graphql';
import {
  CardContainer, YerbaTitle, DataWrapper, Image, CardButton, Description, StyledRating, ActionButtons, RoundedButton, AuthorLabel,
} from './styled';
import { CardValue } from './CardValue';

interface CardProps {
  id?: string;
  manufacturer?: string;
  type?: string;
  name?: string;
  details?: string;
  country?: string;
  photoUrl?: string;
  addedAt?: string;
  aromaScore?: number;
  tasteScore?: number;
  bitternessScore?: number;
  energyScore?: number;
  priceScore?: number;
  overallScore?: number;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onRedirectDetails: (id: string) => void;
  isAdmin: boolean;
  userId: string;
  author: User;
}

export const Card: FC<CardProps> = memo((
  {
    id,
    name,
    photoUrl,
    manufacturer,
    type,
    country,
    aromaScore = 0,
    tasteScore = 0,
    bitternessScore = 0,
    energyScore = 0,
    priceScore = 0,
    overallScore = 0,
    details,
    isAdmin,
    userId,
    onDelete,
    onEdit,
    onRedirectDetails,
    author,
  },
) => {
  const shortDescription = details ? truncate(details, { length: 100, separator: '...' }) : 'Nieznany opis';
  const shortName = name ? truncate(name, { length: 45, separator: '...' }) : 'Nieznana nazwa';
  const shortProducer = manufacturer ? truncate(manufacturer, { length: 45, separator: '...' }) : 'Nieznany producent';
  const shortType = type ? truncate(type, { length: 15, separator: '...' }) : 'Nieznany typ';
  const shortCountry = country ? truncate(country, { length: 15, separator: '...' }) : 'Nieznany kraj';
  const authorUsername = author?.username ? truncate(author.username, { length: 15, separator: '...' }) : 'Gal Anonim';
  const isAllowed = useMemo(() => isAdmin || author?.id === userId, [isAdmin, userId]);
  return (
    <CardContainer>
      <ActionButtons isAllowed={isAllowed}>
        <RoundedButton onClick={() => onEdit(id)} icon={<Icon type="edit" />} themeType={ButtonType.Secondary} />
        <RoundedButton onClick={() => onDelete(id)} icon={<Icon type="delete" />} themeType={ButtonType.Danger} />
      </ActionButtons>
      <DataWrapper primary>
        <YerbaTitle>
          {shortName}
        </YerbaTitle>
        <AuthorLabel>{authorUsername}</AuthorLabel>
        <Image src={photoUrl} alt={name} />
        <CardButton themeType={ButtonType.Secondary} onClick={() => onRedirectDetails(id)}>
          Zobacz więcej
        </CardButton>
      </DataWrapper>
      <DataWrapper>
        <CardValue label="Producent: " value={shortProducer} />
        <CardValue label="Typ: " value={shortType} />
        <CardValue label="Kraj pochodzenia: " value={shortCountry} />
        <Description>
          {shortDescription}
        </Description>
        <StyledRating size={SizeType.Small} label="Aromat: " initialRating={aromaScore} readonly />
        <StyledRating size={SizeType.Small} label="Smak: " initialRating={tasteScore} readonly />
        <StyledRating size={SizeType.Small} label="Gorycz: " initialRating={bitternessScore} readonly />
        <StyledRating size={SizeType.Small} label="Moc: " initialRating={energyScore} readonly />
        <StyledRating size={SizeType.Small} label="Cena: " initialRating={priceScore} readonly />
        <StyledRating size={SizeType.Small} label="Ocena ogólna: " initialRating={overallScore} readonly />
      </DataWrapper>
    </CardContainer>
  );
});
