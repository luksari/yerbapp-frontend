import React, { Component } from 'react';
import { CardBack } from './CardBack';
import { CardFront } from './CardFront';

interface CardProps {
  Product: Array<any>;
}

type CardState = {
  IsSideFront: boolean;
}

export class Card extends Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);

    this.state = { IsSideFront: true };
  }

  ChangeSideToBack = () => {
    this.setState({ IsSideFront: false });
  }

  ChangeSideToFront = () => {
    this.setState({ IsSideFront: true });
  }

  render() {
    const { IsSideFront } = this.state;
    return (
      <div>
        { IsSideFront ? <CardFront ChangeSide={this.ChangeSideToBack} />
          : <CardBack ChangeSide={this.ChangeSideToFront} />}
      </div>
    );
  }
}
