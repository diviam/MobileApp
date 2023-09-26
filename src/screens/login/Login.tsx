import axios from 'axios';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Modal,
  Dimensions,
  Alert,
} from 'react-native';
import {ToggleButton} from 'react-native-paper';
import { colors } from '../../colors';
const screenHeight = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/FontAwesome';
// import { useDispatch } from 'react-redux';
// import { updateUserInfo } from '../../redux/mainSlice';

export const Login = ({navigation}: any) => {
  const [firstName, setFirstName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  // const dispatch = useDispatch()

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    console.log(firstName);
    if (!firstName || !email) {
      return Alert.alert('Login Failed', 'Please fill all the details');
    }
    const formData = new FormData();
    formData.append('email', `${firstName}`);
    formData.append('password', email);
    axios
      .post('https://test.dealsfordell.com/Laurent@Lalit/login.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => {
        const status = res.data.id;
        // dispatch(updateUserInfo(res.data))
        console.log("first", res.data.id)

        if (status) {
          navigation.navigate('home');
        } else {
          Alert.alert('Login Failed', 'Something is not right! Please contact your manager at hi@precision.house');
        }
      })
      .catch(err => {
        Alert.alert('Something Went Wrong');
      });
  };

  const handleGetStartedPress = () => {
    handleSubmit();
  };

  const styles = StyleSheet.create({
    parent: {
      flex: 1,
      padding: 20,
      backgroundColor: isDarkMode ? '#222' : '#fff',
      height: screenHeight,
      justifyContent: 'center', // Center items along the primary axis (vertically)
      alignItems: 'center',
    },
    container: {
      borderRadius: 8,
      width: '100%',
    },
    passwordInput: {
      flexDirection: 'row',
    },
    eyeIcon: {
      position: 'absolute', // Step 2: Set position to absolute
      top: '50%', // Step 2: Vertically center the component at 50% from the top of the parent
      transform: [{translateY: -20}], // Step 3: Move the component up by half of its own height

      right: 15,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: isDarkMode ? '#fff' : '#333',
    },
    forgot: {
      alignSelf: 'flex-end',
      color: isDarkMode ? '#fff' : '#333',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 6,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginBottom: 15,
      width: '100%',
      color: isDarkMode ? '#fff' : '#333',
    },
    submitButton: {
      backgroundColor: colors.oliveGreen,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 15,
    },
    submitButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    closeButton: {
      marginTop: 10,
      padding: 10,
      backgroundColor: '#ccc',
      borderRadius: 6,
      alignSelf: 'flex-end',
    },
    closeButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    toggleButton: {
      backgroundColor: isDarkMode ? '#444' : '#ccc',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    buttonText: {
      color: isDarkMode ? '#fff' : '#333',
      fontWeight: 'bold',
    },
    darkMode: {
      position: 'absolute',
      top: 0,
      right: 15,
    },
  });

  return (
    <View style={styles.parent}>
      <ToggleButton
        icon={isDarkMode ? 'weather-sunny' : 'theme-light-dark'}
        iconColor={isDarkMode ? 'white' : 'black'}
        value="bluetooth"
        onPress={toggleDarkMode}
        style={styles.darkMode}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={firstName}
          onChangeText={setFirstName}
          placeholderTextColor={isDarkMode ? 'white' : 'black'}
          
        />

        <View style={styles.passwordInput}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={email}
            onChangeText={setEmail}
            secureTextEntry={!showPassword}
            placeholderTextColor={isDarkMode ? 'white' : 'black'}
            
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={handleTogglePasswordVisibility}>
            <Icon
              name={showPassword ? 'eye' : 'eye-slash'}
              size={20}
              // color="#000"
              color={isDarkMode ? 'white' : 'black'}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleGetStartedPress}
        >
          <Text style={styles.submitButtonText}>Login</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};
