import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from 'firebase/app';


export default function LoginPage(props) {
    return (
        props.LoginPage ?
        <View style={styles.container}>
        <Text>Login Page</Text>
        </View>
        :
        null
    );
}

const styles = StyleSheet.create({
    container: {
    
    },
});