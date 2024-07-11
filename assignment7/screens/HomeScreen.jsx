import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import Navbar from '../navigation/TopNavBar';
import Product from '../components/Product';


export default function HomeScreen({navigation}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.error(error));
    }, []);

    const handlePress = (product) => {
      navigation.navigate('Details', { product });
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
            <Product item={item} onPress={() => handlePress(item)} />
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