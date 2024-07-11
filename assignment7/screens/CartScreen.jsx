import { View, Image, Text, StyleSheet, Pressable, ScrollView, FlatList,Alert } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCart } from '../components/CartContext'


export default function CartScreen() {
  const { cart, setCart } = useCart();
  
  const removeFromCart = async (item) => {
    try {
      const updatedCart = cart.filter(cartItem => cartItem.key !== item.key);
      setCart(updatedCart);
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Error removing item from cart:', error);
      Alert.alert('Error', 'Failed to remove item from cart');
    }
  };


  return (
  <View style={styles.container}>
  <View style={styles.header}>
        <Image source={require('./../assets/images/Logo.png')} style={styles.logo} />
        <Image source={require('./../assets/images/Search.png')} style={styles.search} />
      </View>
      <Text style={styles.checkout}>CHECKOUT</Text>
      <FlatList
      data={cart}
      renderItem={({item})=>(
        <ScrollView contentContainerStyle={styles.cartContainer}>
        <View style={styles.cartItem}>
          <Image source={{uri:item.image}} style={styles.cartImage} />
          <View style={styles.cart}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.category}</Text>
            <Text style={styles.itemPrice}>${item.price}</Text>
            <Pressable onPress={() => removeFromCart(item)}>
              <Image source={require('./../assets/images/remove.png')} style={styles.remove} />
            </Pressable>
          </View>
        </View>
      </ScrollView>
      )}
      keyExtractor={item => item.key}/>
      <View style={styles.totalPriceContainer}>
        <Text style={styles.totalPriceText}>EST. TOTAL</Text>
        <Text style={styles.totalPrice}>$240</Text>
      </View>
      <Pressable style={styles.checkoutButton}>
        <View style={styles.checkoutButtonContent}>
          <Image source={require('./../assets/images/shoppingBag.png')} style={styles.checkoutImage} />
          <Text style={styles.checkoutText}>CHECKOUT</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 24,
    backgroundColor:'#FFFFFF'
  
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    left: 60,
  },
  search: {
    left:50,
    width: 30,
    height: 30,
  },
  checkout: {
    marginTop: 25,
    fontSize: 24,
    fontWeight: '300',
    letterSpacing: 3,
    textAlign: 'center',
    textDecorationLine:'underline',
  },
  cartContainer: {
    paddingBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 10,
  },
  cartImage: {
    width: 150,
    height: 190,
  },
  cart: {
    marginTop: 50,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 2,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 1,
    marginTop: 10,
    color:'#FFA100',
  },
  itemDescription: {
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 1,
    marginTop: 5,
    color:'#AAAAAA',
  },
  remove: {
    marginTop: 40,
  },
  totalPriceContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop: 20,
    marginBottom: 80,
  },
  totalPriceText: {
    fontSize: 22,
    fontWeight: '300',
    letterSpacing:3,
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: '400',
    letterSpacing:2,
    color:'#FFA100',
  },
  checkoutButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkoutText: {
    fontSize: 20,
    fontWeight: '300',
    letterSpacing: 2,
    color: '#ffffff',
    marginLeft: 10,
  },
  checkoutImage: {
    width: 30,
    height: 30,
    tintColor: '#FFFFFF',
  },
});
