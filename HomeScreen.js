// screens/HomeScreen.js
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen({ navigation }) {

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
      <ImageBackground source={require('../assets/Circle.png')} style={styles.bckimage1} />
      <ImageBackground source={require('../assets/Circle2.png')} style={styles.bckimage2} />

      <ScrollView style={styles.containerScroll}>
        <Text style={styles.txt1}>What is Arts?</Text>
        <Text style={styles.txt2}>Art is a way people express their feelings, ideas, or experiences through creative activities like drawing, painting, music, dance, or writing. It can be anything made to show beauty, emotions, or tell a story, and it helps others feel or think about things in a new way.</Text>
        <Image source={require('../assets/visualarts 1.png')} style={styles.bckimage3} />
        
        <Text style={styles.txt3}>Visual Arts</Text>
        <Text style={styles.txt4}>Visual arts are any forms of art that you can see, like paintings, drawings, sculptures, or photographs. It’s when artists use things like colors, shapes, and textures to create something that looks nice or expresses feelings and ideas.</Text>
        <Text style={styles.txt5}>Some Examples:</Text>
        <Text style={styles.txt6}>Paintings</Text>
        <Image source={require('../assets/spoliarium.png')} style={styles.bckimage4} />
        <Text style={styles.txt7}>Spoliarium 1884 Juan Luna</Text>
        <Text style={styles.txt8}>Sculpture</Text>
        <Image source={require('../assets/sculpture.png')} style={styles.bckimage5} />
        <Text style={styles.txt9}>Portrait of a Filipina Anastacio Caedo</Text>
        <Image source={require('../assets/perform.png')} style={styles.bckimage6} />
        
        <Text style={styles.txt10}>Performing Arts</Text>
        <Text style={styles.txt11}>Performing arts are types of art where people perform in front of others. This includes things like acting in plays, dancing, or playing music. It’s all about using your body, voice, or instruments to entertain or share a story with an audience.</Text>
        <Text style={styles.txt12}>Some Examples:</Text>
        <Text style={styles.txt13}>Music</Text>
        <Image source={require('../assets/music.png')} style={styles.bckimage7} />
        <Text style={styles.txt14}>Singing</Text>
        <Text style={styles.txt15}>Dance</Text>
        <Image source={require('../assets/dance.png')} style={styles.bckimage8} />
        <Text style={styles.txt14}>Ballet</Text>
        
        <Image source={require('../assets/whatisliterart.png')} style={styles.bckimage9} />
        <Text style={styles.txt15}>Literary Arts</Text>
        <Text style={styles.txt16}>Literary arts are all about writing. It includes things like stories, poems, and plays that people read or perform. Writers use words to share ideas, feelings, or tell stories in creative ways.</Text>
        <Text style={styles.txt17}>Some Examples:</Text>
        <Text style={styles.txt18}>Poetry</Text>
        <Image source={require('../assets/poetry.png')} style={styles.bckimage10} />
        <Text style={styles.txt19}>“to create are means to be crazy alone forever.”</Text>
        <Text style={styles.txt20}>Plays</Text>
        <Image source={require('../assets/play.png')} style={styles.bckimage11} />
        <Text style={styles.txt21}>Hamlet</Text>
        <Text style={styles.txt22}>by William Shakespeare</Text>

        <View style={styles.bottomPart}>
          <Icon name="copyright" style={styles.icon1} />
          <Text style={styles.copyright}>Copyright 2024</Text>
        </View>
        <View>
        <ImageBackground source={require('../assets/Circle2.png')} style={styles.bckimage12} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  bckimage1:{
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    top: -50,
    bottom: 0,
    left: 280,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 149,
  },
  bckimage2:{
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    top: -80,
    bottom: 0,
    left: 220,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 115,
    height: 114,
  },
  bckimage3:{
    marginTop: 100,
    width: '100%',
  },
  bckimage4:{
    position: 'relative',
    top: 20,
    width: 320,
    height: 200,
    marginLeft: 23,
  },
  bckimage5:{
    position: 'relative',
    top: 50,
    marginLeft: 75,
  },
  bckimage6:{
    position: 'relative',
    top: 100,
  },
  bckimage7:{
    position: 'relative',
    top: 10,
    width: 320,
    height: 200,
    marginLeft: 23,
  },
  bckimage8:{
    position: 'relative',
    top: 10,
    marginLeft: 75,
  },
  bckimage9:{
    position: 'relative',
    top: 50,
  },
  bckimage10:{
    height: 200,
    width: 300,
    borderRadius: 20,
    marginLeft: 30,
  },
  bckimage11:{
    position: 'relative',
    top: 10,
    marginLeft: 75,
  },
  bckimage12:{
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    top: -70,
    bottom: 0,
    left: -40,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 135,
    height: 134,
  },

  containerScroll: {
    flex: 1,
    padding: 0,
    position: 'relative',
  },
  txt1: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    color: '#4A6866',
    paddingTop: 70,
    paddingLeft: 10,
  },
  txt2: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    textAlign: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    color: '#4A6866',
  },
  txt3: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 25,
    paddingLeft: 10,
    paddingRight: 15,
    position: 'absolute',
    top: 380,
    color: 'white',
  },
  txt4: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    position: 'relative',
    top: 10,
    color: '#4A6866',
  },
  txt5: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    top: 10,
    color: '#4A6866',
    paddingTop: 50,
  },
  txt6: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 15,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    top: 10,
    color: '#4A6866',
  },
  txt7: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    textAlign: 'center',
    paddingLeft: 100,
    paddingRight: 100,
    top: 30,
    color: '#4A6866',
  },
  txt8: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 15,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    top: 50,
    color: '#4A6866',
  },
  txt9: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    textAlign: 'center',
    paddingLeft: 70,
    paddingRight: 70,
    top: 55,
    color: '#4A6866',
  },
  txt10: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 25,
    paddingLeft: 10,
    paddingRight: 15,
    position: 'absolute',
    top: 1530,
    color: 'white',
  },
  txt11: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    textAlign: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    top: 100,
    color: '#4A6866',
  },
  txt12: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    color: '#4A6866',
    paddingTop: 130,
  },
  txt13: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 15,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    color: '#4A6866',
  },
  txt14: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    color: '#4A6866',
  },
  txt15: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 15,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    color: '#4A6866',
  },
  txt15: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 25,
    paddingLeft: 10,
    paddingRight: 15,
    position: 'absolute',
    top: 2780,
    color: 'white',
  },
  txt16: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    textAlign: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    top: 50,
    color: '#4A6866',
  },
  txt17: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    color: '#4A6866',
    paddingTop: 100,
  },
  txt18: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 15,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    color: '#4A6866',
  },
  txt19: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    textAlign: 'center',
    paddingLeft: 35,
    paddingRight: 35,
    color: '#4A6866',
    paddingTop: 10,
  },
  txt20: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 15,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 25,
    color: '#4A6866',
  },
  txt21: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#4A6866',
    paddingTop: 10,
  },
  txt22: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#4A6866',
  },

  bottomPart: {
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignContent: 'center',
    flexDirection: 'row',
    margin: 10,
    paddingTop: 50,
    gap: 5,
  },
  copyright: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: '#4A6866',
  },
  icon1: {
    fontSize: 20,
    color: '#4A6866',
    paddingTop: 1,
  }
});

export default HomeScreen;
