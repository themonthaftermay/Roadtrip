import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ProfilePage(props) {
    return (
      props.ProfilePage ?
      <View style={styles.container}>
        <Text>Profile Page</Text>
      </View>
      :
      null
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      
    },
  });
  