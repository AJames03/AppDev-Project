// screens/HomeScreen.js
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../app/HomeScreen';
import AboutScreen from '../app/AboutScreen';
import { useNavigation } from '@react-navigation/native';

function ArtScreen({ navigation }) {
  return (
      <HomeScreen />
  );
}

const Tab = createMaterialTopTabNavigator();

function Tabs(){
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[styles.button]}>
          <Icon name="sign-out" style={styles.logoutBtn} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerTab}>
      <Text style={styles.Arts}>Arts.</Text>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
            } else if (route.name === 'Home1') {
            }
          },
        })}
       screenOptions={{
        tabBarStyle: { 
          backgroundColor: 'rgba(0,0,0,0)', 
          width: 175, 
          height: 40,
          shadowColor: 'transparent', 
          color: 'white', 
          left: 130,
          top: 10,
          marginBottom: 20,
          marginTop: 30,
        },
        tabBarIndicatorStyle: { backgroundColor: 'white', height: 1,},
        tabBarLabelStyle: { color: 'white', fontFamily: 'Poppins-Regular', fontSize: 12,},
       }}>
      <Tab.Screen name="Home" component={ArtScreen}/>
      <Tab.Screen name="About Us" component={AboutScreen} />
      </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A6866',
    height: 100,
  },
  containerTab: {
    flex: 1,
    gap: 100,
  },
  Arts: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    position: 'absolute',
    top: 40,
    left: 10,
  },
  button: {
    width: 50,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 10,
    position: 'absolute',
    top: 52,
    left: 310,
    zIndex: 1,
  },
  logoutBtn: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 25,
  },
});

export default Tabs;
