// screens/HomeScreen.js
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function AboutScreen({ navigation }) {

  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    
    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.containerScroll}>

        <View style={styles.mainImg}>
            <Image source={require('../assets/Frame2.png')} style={styles.img1}></Image>
        </View>
        <Image source={require('../assets/Circle2.png')} style={styles.circleImg}/>

        <Text style={styles.txt1}>About Us</Text>
        <Text style={styles.txt2}>Welcome to our application, a dedicated platform that focuses on various forms of art, primarily Visual Arts, Performing Arts, and Literary Arts.</Text>
        <Text style={styles.txt3}>How its made?</Text>
        <Text style={styles.txt4}>This application was designed using Figma as the foundation for the UI, emphasizing a minimalistic design approach, which was then converted into a functional mobile app with React Native, ensuring simplicity and ease of use.</Text>
        <Icon name="users" style={styles.icon} />
        <Text style={styles.txt3}>Creators:</Text>

        <View style={styles.containerPeople}>
          <View style={styles.container1}>
              <Image source={require('../assets/betinol.png')} style={styles.img2}></Image>
              <Text style={styles.txt5}>
                  “I focused with implementing react native to ensure that the design operates smoothly and functions effectively.”
                  </Text>
              <Text style={styles.txt6}>- Aron James L. Betinol</Text>
          </View>
          
          <View style={styles.container1}>
              <Image source={require('../assets/shane 1.png')} style={styles.img2}></Image>
              <Text style={styles.txt5}>
              “I utilized the concept of User Persona to centralized the design process, enabling designer to address the genuine needs of the intended users.”
              </Text>
              <Text style={styles.txt6}>   - Shane Lyka T. Tagle</Text>
          </View>
         
          <View style={styles.container1}>
              <Image source={require('../assets/valiente.png')} style={styles.img2}></Image>
              <Text style={styles.txt5}>
              “I’m a secondary backend developer who helps designed the application using react native”
                  </Text>
              <Text style={styles.txt6}>    - Kharlo A. Valiente</Text>
          </View>
          
          <View style={styles.container1}>
              <Image source={require('../assets/viovicente.png')} style={styles.img2}></Image>
              <Text style={styles.txt5}>
              “I specialized in 60-30-10 rule, to keep the visual appeal without being too overwhelming”
              </Text>
              <Text style={styles.txt6}>   - Marinella Viovicente</Text>
          </View>

          <View style={styles.container1}>
              <Image source={require('../assets/ugay.png')} style={styles.img2}></Image>
              <Text style={styles.txt5}>
              “I focused on Color Theory, implementing the correct color patterns throughout the application”
              </Text>
              <Text style={styles.txt6}>      - Jacqueline Ugay</Text>
          </View>

          <View style={styles.container1}>
              <Image source={require('../assets/crisostomo.png')} style={styles.img2}></Image>
              <Text style={styles.txt5}>
              “I expertise in typography, ensuring that the text is not only easy to read but also aligns with the overall tone of the application.”
              </Text>
              <Text style={styles.txt6}>   - Angelu Crisostomo</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  circleImg: {
    position: 'absolute',
    width: 200,
    height: 200,
    left: 280,
    top: 1150,
  },
  containerScroll: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: '100%',
  },
  mainImg: {
      paddingTop: 30,
      zIndex: 2,
  },
  img1: {
    justifySelf: 'center',
    alignSelf: 'center',
  },
  icon: {
    color: '#4A6866',
    fontSize: 25,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  txt1: {
    color: '#4A6866',
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  txt2: {
    color: '#4A6866',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  txt3: {
    color: '#4A6866',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  txt4: {
    color: '#4A6866',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  txt5: {
    color: '#4A6866',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    width: 230,
    paddingLeft: 10,
  },
  txt6: {
    left: 100,
  },
  container1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#D9D9D9',
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 20,
    width: '90%',
    justifySelf: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0,
    shadowRadius: 2,
    elevation: 5,
  },
  containerPeople:{
    gap: 30,
    paddingBottom: 70,
    paddingLeft: 5,
  },
  img2: {
    alignSelf: 'center',
    justifySelf: 'center',
  },
});

export default AboutScreen;
