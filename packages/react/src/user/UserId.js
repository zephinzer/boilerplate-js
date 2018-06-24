import React from 'react';

export default ({match}) => {
  console.info(match);
  return (
    <div>
      User Id : {match.params.id}
    </div>
  );
};
