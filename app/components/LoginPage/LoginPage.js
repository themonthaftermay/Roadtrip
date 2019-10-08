import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { useEffect } from 'react-redux';
import authorize from '../../network/authorization';
import bitch from '../../network/authorization';
import * as firebase from "firebase";


export default function LoginPage(props) {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();


    const handleAuthentication = async (type) => {
        if(type === "SIGNUP"){
                try {
                        await firebase.auth()
                        .createUserWithEmailAndPassword(email, password);
                        props.authenticated();
                    } catch (error) {
                        console.log(error.toString());
                    }
        }else{
                try {
                    await firebase.auth()
                    .signInWithEmailAndPassword(email, password);
                    props.authenticated();
                } catch (error) {
                    console.log(error.toString());
                }
        }
    };


    return (
        props.LoginPage ? 
            <View style={styles.container}>
                <Text>Sign Up</Text>
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={email => setEmail(email)}
                    value={email}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={password => setPassword(password)}
                    value={password}
                />
                <Button title="Sign Up" onPress={() => {handleAuthentication("SIGNUP")}} />
                <Button title="Sign In" onPress={() => {handleAuthentication("SIGNIN")}} />
            </View> 
            :
            null 
    )
};


const styles = StyleSheet.create({
    container: {
    },
});