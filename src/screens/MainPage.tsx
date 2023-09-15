import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import { Button } from 'react-native-paper';
// import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icon from 'react-native-vector-icons' package

const MainPage = ({ navigation }: any) => {
    const handleClockIn = () => {
        // Handle Clock In logic here
        console.log('Clock In button pressed');
    };

    const handleClockOut = () => {
        // Handle Clock Out logic here
        console.log('Clock Out button pressed');
    };

    const handleTakeBreak = () => {
        // Handle Take a Break logic here
        console.log('Take a Break button pressed');
    };

    const handleReportIssue = () => {
        // Handle Report an Issue logic here
        console.log('Report an Issue button pressed');
    };

    return (
        <SafeAreaView style={[styles.container, commonStyles.offWhiteBg]}>
            <Button mode='contained' buttonColor={commonStyles.buttonBg.backgroundColor} rippleColor="#4AB3B9" onPress={handleClockIn}>TExt</Button>
            {/* Custom header with title and menu button */}
            {/* <LinearGradient
                colors={['#007bff', '#3c9aff']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.header}
            >
                <View style={styles.headerContent}>
                    <Text style={styles.headerText}>HomePage</Text>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icon name="bars" size={24} color="#ffffff" />
                    </TouchableOpacity>
                </View>
            </LinearGradient> */}
            {/* <Button
                    onPress={handleClockIn}
                    mode='contained'
                    // style={[styles.button, styles.clockInButton]}
                >
                   Clock In
                </Button> */}

            {/* Centered "Clock In" and "Clock Out" buttons */}
            {/* <View style={styles.centeredButtons}>
                <Button
                    onPress={handleClockIn}
                    mode='contained'
                    // style={[styles.button, styles.clockInButton]}
                >
                   Clock In
                </Button>
                <TouchableOpacity
                    onPress={handleClockOut}
                    style={[styles.button, styles.clockOutButton]}
                >
                    <Text style={styles.buttonText}>Clock Out</Text>
                </TouchableOpacity>
            </View> */}

            {/* "Take a Break" button */}
            {/* <View style={styles.centeredTakeBreak}>
                <TouchableOpacity
                    onPress={handleTakeBreak}
                    style={styles.takeBreakButton}
                >
                    <Text style={styles.buttonText}>Take a Break</Text>
                </TouchableOpacity>
            </View> */}

            {/* Report an Issue button at the bottom */}
            {/* <TouchableOpacity
                onPress={handleReportIssue}
                style={[styles.button, styles.reportIssueButton]}
            >
                <Text style={styles.buttonText}>Report an Issue</Text>
            </TouchableOpacity> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS==='android' ? 25 : 0
        
        // backgroundColor: '#ffffff',
    },
    header: {
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerText: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    centeredButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20, // Adjust the padding as needed
        marginTop: 20, // Adjust the margin as needed
    },
    centeredTakeBreak: {
        alignItems: 'center',
    },
    button: {
        flex: 1, // Equal flex for both buttons to make them occupy half of the space
        paddingVertical: 15,
        borderRadius: 25,
        backgroundColor: '#007bff', // Common background color for all buttons
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    clockInButton: {
        marginRight: 10,
    },
    clockOutButton: {},
    takeBreakButton: {
        // Centered "Take a Break" button
        marginTop: 10,
        paddingVertical: 25,
        paddingHorizontal: 20,
        borderRadius: 25,
        backgroundColor: '#007bff', // Background color for "Take a Break" button
    },
    reportIssueButton: {
        backgroundColor: '#ff9800',
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
});

export default MainPage;
