import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Image ,TouchableOpacity } from 'react-native';
import { createStackNavigator  } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';




const ResturantCard = (Item) =>{

    
    const navigation=useNavigation();
    const DishName=Item.info.dish_name;
    const ImageDish=Item.info.image_url;
    const Rating=Item.info.rating;
    const Description=Item.info.description;
    const Price=Item.info.price;

    return (

    <View style={styles.container}>
        
         <View style = {styles.cardContainer} >
              <TouchableOpacity onPress={() => navigation.navigate('DetailCard', {DishName,ImageDish,Rating,Description,Price}  )} style={styles.appButtonContainer}>
                     <Image style = {styles.imageStyle} 
                        source={ImageDish} />
                <View style={styles.infoStyle}>
                 <Text style={styles.titleStyle}>{DishName}</Text>
                 <Text style={styles.priceStyle}>{Price}</Text>
                </View>
                 </TouchableOpacity>
         </View>
        
    </View>
    );
}

const devicewidth = Math.round(Dimensions.get('window').width);
const radius = 20;
const offset = 40;
const styles = StyleSheet.create({
    container:{
        width: devicewidth,
        alignItems:'center',
        marginTop:5
    },
    cardContainer:{
        width : devicewidth - offset,
        backgroundColor : 'rgb(255,215,100)',
        borderRadius : radius,
        shadowColor : 'black',
        shadowOffset: {
            width: 0.5,
            height: 2,
          },
          shadowOpacity: 0.6,
          shadowRadius: 2.3,
          marginVertical:10,
          alignItems:'center',
    },
    imageStyle : { 
        resizeMode:'center',
        height : 190,
        width : devicewidth - offset,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9,
        alignContent: 'center',
        alignSelf: 'center',
    },
    titleStyle:{
        fontSize : 20,
        fontWeight : '800',
    },
    priceStyle:{
        fontWeight : 200,
        fontSize:22,
        // color:
        padding:6
    },
    infoStyle : {
        marginHorizontal: 10,
        marginVertical: 5,
    },
});


const Stack=createStackNavigator();

export default ResturantCard;