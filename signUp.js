// screens/HomeScreen.js
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function LoginScreen({ navigation }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(true);

  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    
    <SafeAreaView style={styles.container}>
        <ImageBackground
            source={require('../assets/arts 1.png')} // Local image path
            style={styles.bckimage}
        />
        <View>
            <Text style={styles.SU}>Sign Up,</Text>
        </View>

        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            placeholder="First Name"
            />
        </View>

        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            placeholder="Last Name"
            />

        </View>
        <View style={styles.inputContainer}>
            <Icon name="user" style={styles.icon} />
            <TextInput
            style={styles.input}
            placeholder="Enter Username"
            />
        </View>

        <View style={styles.inputContainer}>
            <Icon name="lock" style={styles.icon} />
            <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry={isPasswordVisible} />
            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon name={isPasswordVisible ? "eye-slash" : "eye"} size={24} color="lightgray" style={styles.iconSecurity} />
            </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
            <Icon name="lock" style={styles.icon} />
            <TextInput style={styles.input} placeholder="Re-enter Password" secureTextEntry={isConfirmPasswordVisible} />
            <TouchableOpacity onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
            <Icon name={isPasswordVisible ? "eye-slash" : "eye"} size={24} color="lightgray" style={styles.iconSecurity} />
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity onPress={() => alert('Sign Up Successful')} style={[styles.button]}>
            <Text style={styles.loginBtn}>Sign Up</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.signupContainer}>
            <Text style={styles.signUp}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signUp1}>Login Now</Text>
            </TouchableOpacity>
        </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
    gap: 20,
  },
  title: {
    fontSize: 24,
  },
  SU: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    display: 'flex',
    justifySelf: 'center',
    alignSelf: 'flex-start',
    color: 'white',
  },
  loginText: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    display: 'flex',
    justifySelf: 'center',
    alignSelf: 'center',
    color: 'white',
  },
  bckimage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
    width: 300,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },
  icon: {
    marginRight: 10,
    fontSize: 20,
  },
  forget: {
    fontSize: 12,
    display: 'flex',
    alignSelf: 'flex-end',
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
  },
  button: {
    backgroundColor: '#4A6866',
    borderRadius: 10,
    width: 300,
    height: 47,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  loginBtn: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  signupContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  signUp: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
  },
  signUp1: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    textDecorationLine: 'underline',
  },
  icon1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
  },
});

export default LoginScreen;
