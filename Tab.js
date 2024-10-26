import * as React from 'react';
import { View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ArtScreen from './app/ArtScreen';
import HomeScreen from './app/HomeScreen';

const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Arts') {
              iconName = 'paint-brush'; // FontAwesome icon
            } else if (route.name === 'About Us') {
              iconName = 'info-circle'; // FontAwesome icon
            }
            return <Icon name={iconName} size={20} color={color} />;
          },
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#4F6866',
          tabBarActiveBackgroundColor: '#4F6866',
          tabBarInactiveBackgroundColor: '#D9D9D9',
          tabBarLabelStyle: styles.tabLabel,
          tabBarStyle: styles.tabBar,
          tabBarItemStyle: styles.tabItem,
        })}
      >
        <Tab.Screen name="Art1" component={ArtScreen} />
        <Tab.Screen name="Home2" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTab;