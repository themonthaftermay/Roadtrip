import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import ProfilePage from '../ProfilePage/ProfilePage';
import ProgressPage from '../ProgressPage/ProgressPage';

export default function TripPage(props) {

    const [profileVisible, setProfileVisible] = useState(false);
    const [progressVisible, setProgressVisible] = useState(false);

    const setProfileVisibleHandler = () => {
        setProfileVisible(!profileVisible);
    }
    const setProgressVisibleHandler = () => {
        setProgressVisible(!progressVisible)
    }
    
    return (
        props.TripPage ?
            <View style={styles.container}>
                <Text>Trip Page</Text>
                {props.PauseOrPlayState ? 
                <Button title="Pause" onPress={props.PauseResume} />
                :
                <Button title="Resume" onPress={props.PauseResume} />
                }
                <Button title="Stop" onPress={props.StopTrip} />
                <Button title="Profile" onPress={setProfileVisibleHandler} />
                {/* Same progress button as on ProgressPage */}
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={profileVisible}
                >
                    <View style={styles.pageSize}>
                        <ProfilePage />
                        <Button title="GoBack" onPress={setProfileVisibleHandler}/>
                    </View>
                </Modal>
                <Button title="Progress" onPress={setProgressVisibleHandler}/>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={progressVisible}
                >
                    <View style={styles.pageSize}>
                        <ProgressPage />
                        <Button title="GoBack" onPress={setProgressVisibleHandler}/>
                    </View>
                </Modal>  
            </View> 
            :
            null
    );
}

const styles = StyleSheet.create({
    pageSize: {
        paddingTop: "10%",
        flex: 1
    }
});
