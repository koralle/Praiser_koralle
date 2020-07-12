import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as UiContext from './contexts/ui';
import Routes from './routes';

const App = () => {

  const [applicationState, setApplicationState] = useState(UiContext.createApplicationInitialState());

  return (
    <UiContext.Context.Provider value={{ applicationState, setApplicationState }}>
      <Routes />
    </UiContext.Context.Provider>
  );
};


export default App;
