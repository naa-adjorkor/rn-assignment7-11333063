import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, ScrollView, StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Navbar from '../navigation/TopNavBar';
import Product from '../components/Product';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCart } from '../components/CartContext';


export default function HomeScreen({navigation}) {
    const [products, setProducts] = useState([]);
    const { cart, setCart } = useCart();

    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.error(error));
    }, []);

    const handlePress = (product) => {
      navigation.navigate('Details', { product });
    };

    useEffect(() => {
      const loadCart = async () => {
        try {
          const cartData = await AsyncStorage.getItem('cart');
          if (cartData) {
            setCart(JSON.parse(cartData));
          }
        } catch (error) {
          console.error('Error loading cart:', error);
          Alert.alert('Error', 'Failed to load cart items');
        }
      };
      loadCart();
    }, [setCart]);
  
    const addToCart = async (item) => {
      try {
        const updatedCart = [...cart, { ...item, key: `${item.id}-${Date.now()}` }];
        setCart(updatedCart);
        await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
      } catch (error) {
        console.error('Error adding to cart:', error);
        Alert.alert('Error', 'Failed to add item to cart');
      }
    };
  
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Navbar/>
        <View style={styles.subHeader}>
          <Text style={styles.text}>OUR STORY</Text>
          <TouchableOpacity style={styles.list}>
            <Image source={require('./../assets/images/ListView.png')} style={styles.listIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filter}>
            <Image source={require('./../assets/images/Filter.png')} style={styles.filterIcon} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={products}
          renderItem={({ item }) =>
            <Product item={item} onPress={() => handlePress(item)} addToCart={addToCart}/>
        }
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor:'#fff',
  },
  container: {
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu: {
    width: 30,
    height: 30,
  },
  logo: {
    marginLeft: 65,
  },
  search: {
    left:20,
    width: 30,
    height: 30,
  },
  bag: {
    right:10,
    width: 30,
    height: 30,
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  text: {
    fontSize: 22,
    fontWeight: '300',
    color: '#000000',
    letterSpacing: 2.5,
  },
  list: {
    left:65,
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#E8E8E8',
  },
  filter: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#E8E8E8',
  },
  listIcon: {
    height: 26,
    width: 26,
  },
  filterIcon: {
    height: 26,
    width: 26,
  },
  flatListContent: {
    paddingBottom: 20,
  },
});