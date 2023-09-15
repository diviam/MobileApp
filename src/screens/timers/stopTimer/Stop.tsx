import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { commonStyles } from '../../../styles/commonStyles';

interface TimerProps {}

interface TimerState {
  totalSeconds: number;
  isActive: boolean;
  isBreak: boolean;
}

const TimerComponent: React.FC<TimerProps> = () => {
  const [state, setState] = useState<TimerState>({
    totalSeconds: 0,
    isActive: false,
    isBreak: false,
  });
  const [resume, setResume] = useState<boolean>(false)


  let interval: NodeJS.Timeout | null = null;

  useEffect(() => {
    if (state.isActive) {
      interval = setInterval(() => {
        setState((prevState) => ({
          ...prevState,
          totalSeconds: prevState.totalSeconds + 1,
        }));
      }, 1000);
    } else {
      if (interval !== null) {
        clearInterval(interval);
      }
    }

    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [state.isActive]);
  
  useEffect(() => {
    setState({ ...state, isActive: true });
  }, []);

  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0'
    )}:${String(seconds).padStart(2, '0')}`;
  };

  const handleStop = () => {
      setState({ ...state, isActive: false});
      setResume(!resume)
  };

  const handleReset = () => {
    setState({ totalSeconds: 0, isActive: false, isBreak: false });
  };
  const handleStart = () => {
    setState({ ...state, isActive: true });
    setResume(!resume)
  };

  return (
    <View style={[styles.container, commonStyles.offWhiteBg]}>
        <View style={{ alignContent: 'center', alignItems: 'center' }}>
          <Text style={styles.timerText}>
            Timer: {formatTime(state.totalSeconds)}
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              onPress={resume ? handleStart :handleStop}
              mode="contained"
              rippleColor={commonStyles.rippleGreen.backgroundColor}
              buttonColor={commonStyles.buttonBg.backgroundColor}
            >{resume ? "Resume Work" : "Break Time"}
             
            </Button>
            <Button
              onPress={handleReset}
              mode="contained"
              rippleColor={commonStyles.rippleRed.backgroundColor}
              buttonColor={commonStyles.redbg.backgroundColor}
            >
              Leave Time
            </Button>
          </View>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  timerText: {
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 20,
  },
});

export default TimerComponent;
