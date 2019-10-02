import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Index from './components/index';
import rootReducer from './reducers/stateReducer';
import ReduxThunk from 'redux-thunk';


export default function App() {

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

