import * as React from 'react';
import {  StyleSheet, Dimensions, ScrollView,View,Text,TouchableOpacity, } from 'react-native';
import Card from '../ResturantCards/ResturantCard';
import { FlatList } from 'react-native-gesture-handler';


const menu=[{
  dish_name: 'Simple',
  description: "Relish the comforting simplicity of our Hotdog Sandwich, a classic favorite featuring juicy hotdog nestled in a soft bun, delivering pure satisfaction with every bite.",
  price: "2 $",
  rating: 4.8,
  image_url: require('../photos/simpleHot.jpg'),
  Path:"",
  id:"1"
},
{
  dish_name: 'Veggie',
  description: "Delight in the wholesome goodness of our Veggie Hotdog, crafted with plant-based ingredients and nestled in a fluffy bun, offering a flavorful and guilt-free experience.",
  price: "5 $",
  rating: 4.2,
  image_url: require('../photos/Veggie.jpg'),
  Path:" ",
  id:"2"

},
{
  dish_name: 'Monster Hot Dog',
  description: "Embark on a monstrous flavor adventure with our Monster Hotdog, a colossal creation loaded with an array of mouthwatering toppings, guaranteed to satisfy even the heartiest of appetites.",
  price: "7 $",
  rating: 4.9,
  image_url: require('../photos/Monster.jpg'),
  Path:" ",
  id:"3"
},
{
  dish_name: 'Dog of the House',
  description: "Unleash your taste buds with the Dog of the House Hot Dog, a signature creation packed with premium ingredients and a burst of flavors that will make it the top dog in your heart.",
  price: "5 $",
  rating: 4.9,
  image_url: require('../photos/top-view-delicious-hot-dogs.jpg'),
  Path:" ",
  id:"4"
}];




function HotDogs({}){
    return (
        <View style={styles.container}>
          <ScrollView style={styles.scrollView}>
          </ScrollView>
          <FlatList 
               data={menu}
                renderItem={({item}) =>{
                return <Card info={item} /> 
              }}
  
              keyExtractor={(card) => card.id } 
              showsVerticalScrollIndicator={false}
            />
           
        </View>
        
      );
  }

  const deviceheight = Math.round(Dimensions.get('window').height);
const styles = StyleSheet.create({
    container:{
        alignItems : 'center',
        height: deviceheight-1000,
        
    },
  });


  export default HotDogs;