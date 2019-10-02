import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { useDispatch } from 'react-redux';
import authorize from '../../network/authorization';
import bitch from '../../network/authorization';
import * as firebase from "firebase";


export default function LoginPage(props) {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    const dispatch = useDispatch();


    const handleAuthentication = (type) => {
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

        try {
                firebase.auth()
                    .createUserWithEmailAndPassword(email, password);
        
                console.log("Account created");
        
                // Navigate to the Home page, the user is auto logged in
        
            } catch (error) {
                console.log(error.toString())
            }
        
        }

        // const response = fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCLM1JnNX9bUvOqf2l5gemhgjw5Ywc8NZk',
        //     {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             email: email,
        //             password: password,
        //             returnSecureToken: true
        //         })
        //     });

        //     console.log("before");        
        // console.log(response);
        // dispatch(() => {
        //     return async dispatch => {
        //     const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCLM1JnNX9bUvOqf2l5gemhgjw5Ywc8NZk',
        //     {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             email: email,
        //             password: password,
        //             returnSecureToken: true
        //         })
        //     });
    
        //     if(!response.ok){
        //         throw new Error('Error');
        //     }
    
    
        //     const authData = await response.json();
        //     dispatch({type: type});
        // }});
        // dispatch(authorize(type, email, password));
    

    const SIGNUP = "SIGNUP";
    const SIGNIN = "SIGNIN";


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
                <Button title="Sign Up" onPress={() => {handleAuthentication(SIGNUP)}} />
                <Button title="Sign In" onPress={() => {handleAuthentication(SIGNIN)}} />
            </View> 
            :
            null 
    )
};


const styles = StyleSheet.create({
    container: {
    },
});