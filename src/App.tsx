import React from 'react';

import MyCustomGrid from "./MyCustomGrid";
import MyCustomTablet from "./MyCustomTablet";

const App: React.FC = () => {
  return (
    <div>
      <MyCustomGrid />
      <MyCustomTablet />
    </div>
  );
};

export default App;