import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import StartPage from '../containers/_StartPage';
import TripPage from '../containers/_TripPage';
import ProgressPage from '../containers/_ProgreesPage';
import ProfilePage from '../containers/_ProfilePage';
import SummaryPage from '../containers/_SummaryPage';
import LoginPage from '../containers/_LoginPage';

export default function Index() {
  return (
    <View style={styles.notchAdjust}>
      <LoginPage />
      <StartPage />
      <TripPage />
      <ProgressPage />
      <ProfilePage />
      <SummaryPage />
    </View>
  );
}

const styles = StyleSheet.create({
  notchAdjust: {
    paddingTop: "10%"
  }
});
  