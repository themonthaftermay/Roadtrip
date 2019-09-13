import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Index from './components/index';
import rootReducer from './reducers/stateReducer';

export default function App() {

  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

