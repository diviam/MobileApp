import React, { useState, useRef } from 'react';
import { View, StyleSheet, SafeAreaView, Animated, Easing } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { commonStyles } from '../../../styles/commonStyles';
import { colors } from '../../../colors';

const StartScreen = ({ navigation }: any) => {
  const [scaleValue] = useState(new Animated.Value(1));

  const handleStart = () => {
    // Animate the button size to be bigger
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2, // Increase the size by 20%
        duration: 200, // Animation duration in milliseconds
        useNativeDriver: false, // Set this to true if possible
        easing: Easing.circle, // You can change the easing function as needed
      }),
      Animated.timing(scaleValue, {
        toValue: 1, // Return to the original size
        duration: 200, // Animation duration in milliseconds
        useNativeDriver: false, // Set this to true if possible
        easing: Easing.circle, // You can change the easing function as needed
        delay: 100, // Delay before returning to the original size (1 second)
      }),
    ]).start(() => {
      navigation.navigate('stopTimer');
    });
  };

  return (
    <SafeAreaView style={[styles.container, commonStyles.offWhiteBg]}>
      <View style={styles.textContainer}>
        <Text variant="displaySmall">
          Good Morning,{'\n'}
          <Text style={styles.userName}>John Doe</Text>
        </Text>
        <Text variant="titleLarge">Welcome to Our Property</Text>
        <Text variant="titleLarge">
          You can start your timer by pressing the button below!{'\n'}
          Enjoy your work.
        </Text>
      </View>
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <Button
          // icon='calendar-today'
          onPress={handleStart}
          mode="contained"
          rippleColor={commonStyles.rippleGreen.backgroundColor}
          buttonColor={commonStyles.buttonBg.backgroundColor}
        >
          Start Your Time
        </Button>
      </Animated.View>
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
    alignItems: 'flex-start',
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
