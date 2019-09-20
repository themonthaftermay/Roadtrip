import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import ProfilePage from '../ProfilePage/ProfilePage';

export default function SummaryPage(props) {

    const [profileVisible, setProfileVisible] = useState(false);

    const setProfileVisibleHandler = () => {
        setProfileVisible(!profileVisible);
    }
    
    return ( 
        props.SummaryPage  ?
            <View style={styles.container}>
                <Text>Summary Page</Text>
                <Button title="Reset" onPress={props.Reset} />
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={profileVisible}
                >
                    <ProfilePage />
                    <Button title="GoBack" onPress={setProfileVisibleHandler}/>
                </Modal>
                <Button title="Profile" onPress={setProfileVisibleHandler}/>
            </View>
            :
            null
    );
}

const styles = StyleSheet.create({
    container: {

    },
});
