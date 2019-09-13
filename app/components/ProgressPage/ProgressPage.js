import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ProgressPage(props) {
    return (
      props.ProgressPage ? 
        <View style={styles.container}>
            <Text>Progress Page</Text>
            <Button title="Profile"/>
            <Button title="TripPage"/>  
        </View>
        :
        null
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      
    },
  });
  