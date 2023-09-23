import * as React from 'react';
import {  StyleSheet, Dimensions, ScrollView,View,Text,TouchableOpacity, } from 'react-native';
import Card from '../ResturantCards/ResturantCard';
import { FlatList } from 'react-native-gesture-handler';



const menu=[{
  dish_name: 'Water',
  description: "Experience our pure, mountain-sourced Spring Water. Crisp, refreshing, and mineral-rich for your health and enjoyment.",
  price: "1 $",
  rating: 4.8,
  image_url: require('../photos/water.jpeg'),
  Path:"",
  id:"1"
},
{
  dish_name: 'Soda',
  description: "Quench your thirst with our refreshing Soda Can, a fizzy and invigorating beverage that's the perfect companion to any meal or moment of relaxation.",
  price: "1 $",
  rating: 4.2,
  image_url: require('../photos/Soda.jpg'),
  Path:" ",
  id:"2"

},
{
  dish_name: 'Juice',
  description: "Indulge in the pure goodness of our freshly squeezed Juice, a vibrant and invigorating elixir bursting with the natural flavors of sun-kissed fruits, providing a refreshing and nutritious treat.",
  price: "2 $",
  rating: 4.9,
  image_url: require('../photos/Juice.jpg'),
  Path:" ",
  id:"3"
}];





function Drinks({}){
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


  export default Drinks;