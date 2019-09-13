import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function TripPage(props) {
    return (
        props.TripPage ?
            <View style={styles.container}>
                <Text>Trip Page</Text>
                {props.PauseOrPlayState ? 
                <Button title="Pause"/>
                :
                <Button title="Play"/>}
                <Button title="Stop"/>
                <Button title="Profile"/>
                {/* Same progress button as on ProgressPage */}
                <Button title="Progress"/>  
            </View> 
            :
            null
    );
}

const styles = StyleSheet.create({
    container: {

    },
});
