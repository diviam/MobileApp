import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { commonStyles } from '../../../styles/commonStyles';
import { colors } from '../../../colors';

const StartScreen = ({ navigation }: any) => {
  const handleStart = () => {
    // Navigate to the BreakLeaveScreen when Start is pressed
    navigation.navigate('stopTimer');
  };

  return (
    <SafeAreaView style={[styles.container, commonStyles.offWhiteBg]}>
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>
          Good Morning,{'\n'}
          <Text style={styles.userName}>John Doe</Text>
        </Text>
        <Text style={styles.welcomeText}>
          Welcome to Our Property
        </Text>
        <Text style={styles.instructionText}>
          You can start your timer by pressing the button below!{'\n'}
          Enjoy your work.
        </Text>
      </View>
      <Button
        onPress={handleStart}
        mode="contained"
        rippleColor={commonStyles.rippleGreen.backgroundColor}
        buttonColor={commonStyles.buttonBg.backgroundColor}
      >
        Start Your Time
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userName: {
    color: colors.cherryRed, // Change the color as needed
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 10,
  },
  instructionText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default StartScreen;
