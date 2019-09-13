import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import StartPage from '../containers/_StartPage';
import TripPage from '../containers/_TripPage';
import ProgressPage from '../containers/_ProgreesPage';
import ProfilePage from '../containers/_ProfilePage';

export default function Index() {
  return (
    <View style={styles.container}>
      <StartPage />
      <TripPage />
      <ProgressPage />
      <ProfilePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  