import React from 'react';

import MyCustomGrid from "./MyCustomGrid";
import MyCustomTablet from "./MyCustomTablet";

const App = () => {
  return (
    <div>
      <MyCustomGrid />
      <MyCustomTablet />
      <MyCustomTablet />
      <MyCustomTablet />
    </div>
  );
};

export default App;