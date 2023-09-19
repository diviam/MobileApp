import React from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Text } from 'react-native-paper';


const HomePage = ({ navigation }: any) => {
    const toggleScanner = () => {
        navigation.navigate("camera");
    };

    return (
        // <ImageBackground
        //     source={require('./background-image.jpg')} // Replace with an appealing background image
        //     style={styles.container}
        // >
        <View style={styles.overlay}>
            <Text style={styles.headerText}>QR Code Scanner</Text>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome to QR Code Scanner</Text>
                <Text style={styles.description}>
                    Scan a QR Code to get started!
                </Text>
                <TouchableOpacity
                    onPress={toggleScanner}
                    style={[styles.button, { backgroundColor: '#317773' }]} // Theme color for the button
                >
                    <Text style={styles.buttonText}>Scan QR Code</Text>
                </TouchableOpacity>
            </View>
        </View>
        // </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
    },
    overlay: {
        flex: 1,
        backgroundColor: '#FCF6F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#101820',
        fontSize: 32,  
        fontWeight: 'bold',
        marginBottom: 20,
    },
    content: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#101820',
    },
    description: {
        fontSize: 18,
        marginBottom: 30,
        textAlign: 'center',
        color: '#101820',
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,

        backgroundColor: '#990011',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default HomePage;
