import * as React from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity,Dimensions,} from 'react-native';


const devicewidth = Math.round(Dimensions.get('window').width);
const deviceheight = Math.round(Dimensions.get('window').height);
function Welcome({navigation}){
    return (
      <View style={{ flex:1, justifyContent: 'center' , alignItems:'center'}}>
        
        <Image
          style={{
            height: deviceheight-280,
            width: devicewidth,
            borderBottomLeftRadius: 60,
            borderBottomRightRadius: 60,
            bottom:95,
          }}
          source={require('../assets/chef.jpeg')}
        />
        
        <Text 
          style={
           {
            fontSize:37,
            fontWeight:"bold",
            color:"black",
            bottom:65,
            fontStyle:'italic',
           } 
          } 
           >Eat Your Heart out</Text>
        
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{"Let's  Go"}</Text>
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
    appButtonContainer: {
      
      backgroundColor: "rgb(45,175,80)",
      borderRadius: 18,
      paddingVertical: 18,
      width:"68%",
      alignItems:"center",
      bottom:30,
    },
   
    appButtonText: {
      fontSize: 16,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }


  });


  export default Welcome;