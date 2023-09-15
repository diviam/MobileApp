import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

const App = () => {
  const [isCameraVisible, setCameraVisible] = useState(false);
  const [cameraPermission, setCameraPermission] = useState<any>();

  useEffect(() => {
    (async () => {
      const cameraPermissionStatus = await Camera.requestCameraPermission();
      setCameraPermission(cameraPermissionStatus);
    setCameraVisible(true);

    })();
  }, []);
  const devices = useCameraDevices();
  const device = devices.back;

  // const showCamera = () => {
  //   setCameraVisible(true);
  // };

  return (
    <>
      {/* <Button title="Open Camera" onPress={showCamera} /> */}
      {isCameraVisible && (
        <Camera device={device as any} isActive={isCameraVisible} style={{ flex: 1 }} />
      )}
    </>
  );
};

export default App;
