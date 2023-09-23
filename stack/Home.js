import * as React from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity,Dimensions} from 'react-native';

const devicewidth = Math.round(Dimensions.get('window').width);
const deviceheight = Math.round(Dimensions.get('window').height);
function HomeScreen({navigation}){
  
    return (
      
      <View style={{ flex:1, justifyContent: 'center' , alignItems:'center' ,backgroundColor:'rgb(255,215,100)'}}>
        
        <Text style={styles.welcome}>W E L C O M E !</Text>

        <Image
          style={styles.Imagewelcome}
          source={require('../assets/chef.jpeg')}
        />
        
        <TouchableOpacity onPress={() => navigation.navigate('Menu')} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{"Menu"}</Text>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.appButtonContainer2}>
            <Text style={styles.appButtonText}>{"About Us"}</Text>
         </TouchableOpacity>

      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    welcome: {
      fontSize:25,
      bottom:30,
     shadowColor : '#000',
  shadowOffset: {
      width: 10,
      
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 1,
    },
    Imagewelcome:{
      height: 500,
      width: devicewidth,
      borderBottomLeftRadius: 60,
      borderBottomRightRadius: 60,
      bottom:30
    },
    appButtonContainer: {
      bottom:20,
      elevation: 8,
      backgroundColor: "rgb(45,165,70)",
      borderRadius: 20,
      paddingVertical: 9,
      paddingHorizontal: 18,
      width:"30%",
    },
    appButtonContainer2: {
      bottom:10,
      elevation: 8,
      backgroundColor: "rgb(45,165,70)",
      borderRadius: 20,
      paddingVertical: 9,
      width:"40%",
    },
    appButtonText: {
      fontSize: 16,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }


  });


  export default HomeScreen;