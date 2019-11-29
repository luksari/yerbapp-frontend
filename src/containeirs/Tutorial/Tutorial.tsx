import React, { FC } from 'react';
import {
  HeaderStyled, TutorialContainer, TextMain, ListContainer, ListItem,
} from './styled';


const Tutorial: FC = () => {
  return (
    <TutorialContainer>
      <HeaderStyled>
        Jak przygotować Yerba Mate?
      </HeaderStyled>
      <TextMain>
        Początki czasami bywają trudne. Bez specjalistycznej wiedzy, bombilli za 150 zł i specjalnego nabieraka mógłbyś np. upuścić Yerbę na podłogę lub rozlać wodę (oczywiście w temperaturze nie wyższej niż 90 stopni). Z naszym tutorialem nie zbłaźnisz się przed kolegą z Ameryki Południowej, a kto wie może, nawet zaipomujesz swojej latynoamerykańskiej sympatii ( ͡° ͜ʖ ͡°)
      </TextMain>
      <ListContainer>
        <ListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste iusto quas eligendi corporis id eius corrupti temporibus velit? Molestias harum voluptatibus veritatis explicabo ut velit deserunt, saepe sit commodi?
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste iusto quas eligendi corporis id eius corrupti temporibus velit? Molestias harum voluptatibus veritatis explicabo ut velit deserunt, saepe sit commodi?
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste iusto quas eligendi corporis id eius corrupti temporibus velit? Molestias harum voluptatibus veritatis explicabo ut velit deserunt, saepe sit commodi?
        </ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste iusto quas eligendi corporis id eius corrupti temporibus velit? Molestias harum voluptatibus veritatis explicabo ut velit deserunt, saepe sit commodi?
        </ListItem>
      </ListContainer>
    </TutorialContainer>
  );
};

export default Tutorial;
