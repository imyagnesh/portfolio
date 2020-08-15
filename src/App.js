import React from 'react';
import PropTypes from 'prop-types';

const App = ({ text, desc }) => (
  <div className="container">
    <Choose>
      <When condition="text">
        <h1>{text}</h1>
      </When>
      <Otherwise>
        <h1>No Data</h1>
      </Otherwise>
    </Choose>

    <h1>{desc}</h1>
  </div>
);

App.propTypes = {
  text: PropTypes.string,
  desc: PropTypes.string.isRequired,
};

App.defaultProps = {
  text: '',
};

export default App;
