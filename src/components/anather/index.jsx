import React from 'react';

function AnotherComponent({ name }) {
  return (
    <div>
      <p>First Name (from AnotherComponent): {name.first}</p>
      <p>Last Name (from AnotherComponent): {name.last}</p>
    </div>
  );
}

export default AnotherComponent;
