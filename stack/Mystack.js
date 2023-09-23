import * as React from 'react';
import {Image} from 'react-native';
import { createStackNavigator  } from '@react-navigation/stack';
import HomeScreen from './Home';
import MenuScreen from './Menu';
import AboutUs from './About';
import DetailsCard from '../ResturantCards/DetailsCard';
import Welcome from './welcome';


 
  function MyStack() {
    return(
      <Stack.Navigator  screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen name="Welcome" component={Welcome}  />
      <Stack.Screen name="Home" component={HomeScreen}   />
           
      <Stack.Screen name="Menu" component={MenuScreen}   />
      <Stack.Screen name="About" component={AboutUs}   />
      <Stack.Screen name="DetailCard" component={DetailsCard}    />

    </Stack.Navigator>

    );
  }
  
  
  const Stack=createStackNavigator();
  

  export default MyStack;