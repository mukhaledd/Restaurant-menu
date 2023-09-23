import * as React from 'react';
import {  StyleSheet, Dimensions, ScrollView,View,Text,TouchableOpacity, } from 'react-native';
import Card from '../ResturantCards/ResturantCard';
import { FlatList } from 'react-native-gesture-handler';



const menu=[{
  dish_name: 'Classic Cheese Pizza',
  description: "Savor the timeless perfection of our Classic Pizza, featuring a harmonious blend of traditional flavors on a crisp, golden crust.",
  price: "5.5 $",
  rating: 4.8,
  image_url: require('../photos/classic-cheese-pizza.jpg'),
  Path:"",
  id:"1"
},
{
  dish_name: 'Veggie Pizza',
  description: "Indulge in the irresistible allure of our Salami Pizza, adorned with savory slices of premium salami atop a delectably thin and crispy crust.",
  price: "6 $",
  rating: 4.2,
  image_url: require('../photos/Veggie-Pizza.jpg'),
  Path:" ",
  id:"2"

},
{
  dish_name: 'Salami Pizza',
  description: "Experience the garden-fresh delight of our Veggie Pizza, a symphony of vibrant vegetables atop a wholesome crust, delivering a burst of flavors that will leave you craving for more.",
  price: "7.5 $",
  rating: 4.9,
  image_url: require('../photos/Salami-Pizza.jpg'),
  Path:" ",
  id:"3"
},
];





function Pizzas({}){
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


  export default Pizzas;