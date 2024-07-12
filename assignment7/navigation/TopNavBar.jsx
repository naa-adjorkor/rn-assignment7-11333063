import { View, Image,StyleSheet,TouchableOpacity, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

export default function TopNavBar() {
    const navigation = useNavigation();

    const handleCart = () => {
        navigation.navigate('Cart');
    };

    const handleMenu = () => {
        navigation.toggleDrawer();
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={handleMenu}><Image source={require('./../assets/images/Menu.png')} style={styles.menu} /></Pressable>
                <Image source={require('./../assets/images/Logo.png')} style={styles.logo} />
                <Image source={require('./../assets/images/Search.png')} style={styles.search} />
                <TouchableOpacity onPress={handleCart}>
                    <Image source={require('./../assets/images/shoppingBag.png')} style={styles.bag} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
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
})
