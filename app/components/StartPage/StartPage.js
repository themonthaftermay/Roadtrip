import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal, TouchableOpacity } from 'react-native';
import ProfilePage from '../ProfilePage/ProfilePage';

export default function StartPage(props) {
    
    const [profileVisible, setProfileVisible] = useState(false);

    const setProfileVisibleHandler = () => {
        setProfileVisible(!profileVisible);
    }

    return ( 
        props.StartPage  ?
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <TouchableOpacity onPress={setProfileVisibleHandler} style={styles.profile}>
                        <Text>Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.startContainer}>
                    <TouchableOpacity onPress={props.StartTrip} style={styles.start}>
                        <Text>Start</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={profileVisible}
                >
                    <ProfilePage />
                    <Button title="GoBack" onPress={setProfileVisibleHandler}/>
                </Modal>
            {/* add search compo */}
            </View>
            :
            null
    );
}

const styles = StyleSheet.create({
    start: {
        borderRadius: 60,
        backgroundColor: '#DDDDDD',
        height: 120,
        width: 120,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    },
    startContainer: {
        display: "flex",
        height: "90%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    profile: {

    },
    profileContainer: {
        borderRadius: 50,
        backgroundColor: '#DDDDDD',
        height: 45,
        width: 45,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '7%',
        marginTop: 35
    }
});
