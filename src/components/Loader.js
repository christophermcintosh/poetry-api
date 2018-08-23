import React from 'react';

const Loader = ({ size, margin }) => {
  const styles = {
    load: {
      width: size,
      height: size,
      margin
    }
  };

  return (
    <div id="loader-wrapper">
      <div style={styles.load} className="loader" />
    </div>
  );
};

export default Loader;
