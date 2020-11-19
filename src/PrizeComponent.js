import { ListComponent } from './components/ListComponent';
import { prizeHeader, prizes } from './prizes';

import React from 'react';

export const PrizeComponent = () => {
  const renderPrizes = (prizes) => {
    return prizes.map(({ _id, position, prize, bonus }) => {
      return (
        <tr key={_id}>
          <td>{position}</td>
          <td>{prize}</td>
          <td>{bonus}</td>
        </tr>
      );
    });
  };
  return (
    <>
      <ListComponent
        title='Prizes'
        headerArgs={prizeHeader}
        content={renderPrizes(prizes)}
      />
    </>
  );
};
