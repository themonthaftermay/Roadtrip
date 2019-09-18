import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function StartPage(props) {
    return ( 
        props.StartPage  ?
            <View style={styles.container}>
                <Text>Start Page</Text>
                <Button title="Start" onPress={props.StartTrip}/>
                <Button title="Profile"/>
            {/* add search compo */}
            </View>
            :
            null
    );
}

const styles = StyleSheet.create({
    container: {

    },
});
