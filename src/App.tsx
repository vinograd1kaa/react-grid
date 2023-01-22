import React from 'react';
import { Wrapper } from "./App.style";
import MyCustomGrid from "./MyCustomGrid";
import MyCustomTablet from "./MyCustomTablet";

const App: React.FC = () => {
  return (
    <Wrapper>
      <MyCustomGrid />
      <MyCustomTablet />
    </Wrapper>
  );
};

export default App;