import React from 'react';

const YourComponent = () => {
  const containerStyle = {
    overflowX: 'hidden',
    overflowY: 'scroll',
  };

  return (
    <div style={containerStyle}>
      {/* Le contenu de votre composant va ici */}
    </div>
  );
};

export default YourComponent;