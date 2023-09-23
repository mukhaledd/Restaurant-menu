import * as React from 'react';
import {View,Text,Image,SafeAreaView, Pressable,Dimensions,Linking,StyleSheet } from 'react-native';


const devicewidth = Math.round(Dimensions.get('window').width);
const radius = 20;
const offset = 40;

const arrLinks=[{
  link:'https://www.facebook.com/profile.php?id=100008251870246',
  name:'FaceBook',
},
{
  link:'https://www.instagram.com/',
  name:'Instagram',
},
{
  link: 'https://twitter.com/?lang=en',
  name:'Twitter'
},
];

function Link() {
  return (
    
   <View style={styles.continar1}>
   </View>
  );
}


function AboutUs({navigation}){
    
      return (
        <View style={styles.continar}>
           {/* Logo */}

         <Image
                 style={styles.logo}
            source={require('../assets/duck.png')}/>
          <SafeAreaView>
              <Pressable onPress={() => navigation.goBack()}>
                <Image
                   style={styles.Esc}
                source={require('../assets/left.png')}/>
              </Pressable>
          </SafeAreaView>
  
            <View style={styles.continar2}>
              <View style={styles.continar3}>
               <Image
                 style={styles.resto}
                source={require('../assets/ResturantImage.png')}/>

                  <Text style={{fontSize:28,bottom:80,color:'rgb(255,215,100)',}}>WELCOME</Text>

                {/* Description */}
                  <Text style={{fontSize:20,bottom:100,}}>{'                               to our Restaurant, where culinary excellence meets warm hospitality. Our passion for outstanding food and memorable dining experiences has made us a beloved destination for food enthusiasts and connoisseurs alike.'}</Text>


                {/* Contact  */}
                <View style={{alignSelf:"flex-start",marginVertical:22,bottom:100}}>
                  <Text style={{fontSize:28,color:'rgb(255,215,100)',}}>CONTACT: </Text>
                  <View style={{top:20,}}>
                  {
                    arrLinks.map((arrLinks)=>{
                      return(
                      <View>
                        <Link/>
                        <Text
                           style={{left:40,bottom:30,fontSize:20,color:'blue'}}
                              onPress={() => {
                            Linking.openURL(arrLinks.link);
                          }}>
                          {arrLinks.name}
                        </Text>
                      </View>
                    )}
                  )}
                  
                  </View>
                  
                </View>
                
              </View>
              
              <Text style={{ fontSize:30,bottom:410,color:'black',}}>About Us</Text>

            </View>
            
        </View>
      );
  }



  const styles = StyleSheet.create({
    continar1:{
      backgroundColor:'black',width:12,height:12,borderRadius:10,marginVertical:10,left:20,
    },
    continar:{ flex:1, justifyContent: 'center' ,backgroundColor:'rgb(255,215,100)'},

    logo:{
      height:40,
      width:40,
      top:50,
      left:170
    },
    Esc:{
      height:25,
      width:25,
      paddingTop:30,
      left:5
    },
    continar2:{backgroundColor:'white',
    flex:1, justifyContent: 'center' , alignItems:'center',
    marginTop:160,
    borderTopLeftRadius : 56,
    borderTopRightRadius : 56,
   },
   continar3:{
                
    height:250,
    width:300,
    position:'absolute',
    alingItem:'center',
    top:20,
   
  },
  resto:{
    resizeMode:'center',
    height : 200,
    width : devicewidth - offset,
    borderRadius: radius,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
    top:-100,
  }


  });

  export default AboutUs;