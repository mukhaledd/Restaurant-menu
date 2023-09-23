import * as React from 'react';
import {View,Text,Image,SafeAreaView,FontAwesome, Pressable,Dimensions, } from 'react-native';



const devicewidth = Math.round(Dimensions.get('window').width);
const radius = 20;
const offset = 40;



function DetailCard({navigation,route}){
  const Iitem =route.params;

    return (
      <View style={{ flex:1, justifyContent: 'center' ,alignItems:'center' ,backgroundColor:"rgb(45,175,80)"}}>
        
         {/* Logo */}

         <Image
                 style={{
                    height:50,
                    width:50,
                    top:50,
            }}
            source={require('../assets/duck.png')}/>

          <SafeAreaView>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                 style={{
                    height:25,
                    width:25,
                   
                    right:170
            }}
            source={require('../assets/left.png')}/>

          </Pressable>
          </SafeAreaView>

          {/* DishName */}
          <Text style={{ fontSize:25,color:'black',top:30,}}>{Iitem.DishName}</Text>


        <View style={{backgroundColor:'white',
          flex:1, justifyContent: 'center' , alignItems:'center',
          marginTop:40,
          borderTopLeftRadius : 56,
          borderTopRightRadius : 56,
           }}>
            <View style={{
                  height:250,
                  width:300,
                  position:'absolute',
                  alingItem:'center',
                  top:20,
                 
          }}>
             <Image
          style={{
           resizeMode:'center',
           height : 200,
           width : devicewidth - offset,
           borderRadius: radius,
           opacity: 0.9,
           alignContent: 'center',
           alignSelf: 'center',
          }}
          source={Iitem.ImageDish}/>

            </View>

            


            {/* Description */}
            <View style={{marginHorizontal:30,paddingVertical:1,}}>
            <Text style={{fontSize:19,marginVertical:20,}}>{Iitem.Description}</Text>
            </View>


            {/* Rating&&Price */}
          <View style={{ flexDirection:'row',alignContent: 'space-around',paddingHorizontal:40,paddingVertical:5,borderRadius:10,top:50}}>

            {/* Rating */}
            <View style={{ justifyContent: 'center' , alignItems:'center',backgroundColor:'orange',paddingHorizontal:18,paddingVertical:5,borderRadius:10,right:10}}>
                 <Image style={{ height:25,width:25 , }}  source={require('../assets/rating.png')}/>
                 <Text style={{ fontSize:18,color:'black', }}>Rating : {Iitem.Rating}</Text>
            </View>

            {/* Price */}
            <View style={{ justifyContent: 'center' , alignItems:'center',backgroundColor:'orange',paddingHorizontal:18,paddingVertical:5,borderRadius:10,left:10}}>
                 <Image style={{ height:25,width:25 , }}  source={require('../assets/low-cost.png')}/>
                 <Text style={{ fontSize:18,color:'black', }}>Price : {Iitem.Price}</Text>
            </View>
          </View>  
          </View>
      </View>
    );
  }

  export default DetailCard;