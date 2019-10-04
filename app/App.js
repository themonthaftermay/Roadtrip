import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Index from './components/index';
import rootReducer from './reducers/stateReducer';
import ReduxThunk from 'redux-thunk';
import * as firebase from "firebase";


export default function App() {

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
  firebase.initializeApp(
    {
        apiKey: "AIzaSyCLM1JnNX9bUvOqf2l5gemhgjw5Ywc8NZk",
        authDomain: "roadtrip-d9985.firebaseapp.com",
        databaseURL: "https://roadtrip-d9985.firebaseio.com",
        projectId: "roadtrip-d9985",
        storageBucket: "",
        messagingSenderId: "7913978399",
        appId: "1:7913978399:web:3b42fa2c20c0a02adc332a",
        measurementId: "G-QCBYZLKQZK"
    }
  );

  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

