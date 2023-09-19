import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {CameraScreen} from 'react-native-camera-kit';
import {Text} from 'react-native-paper';
import {Layout} from 'react-native-reanimated';

export const Camera = ({navigation}: any) => {
  const isFocused = useIsFocused();
  const [barcode, setBarcode] = useState<string>('');
  // useEffect(() => {
  //   navigation.navigate('startTimer')
  // }, [barcode])

  const handleBarcodeScan = (e: any) => {
    setBarcode(e.nativeEvent.codeStringValue);
    navigation.navigate('startTimer')

  };
  const onBottomButtonPressed = (event: string) => {
    navigation.navigate('startTimer')
  };

  return isFocused ? (

    <>
      <CameraScreen
        actions={{rightButtonText: 'Done', leftButtonText: 'Cancel'}}
        onBottomButtonPressed={event => onBottomButtonPressed(event)}
        hideControls={false} 
        showCapturedImageCount={false}
        scanBarcode={true}
        onReadCode={handleBarcodeScan}
        showFrame={true}
        laserColor="darkorange"
        frameColor="darkorange"

      />
      <Text> {barcode}</Text>
    </>
  ) :
  null;
};
