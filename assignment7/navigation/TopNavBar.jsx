import { View, Image,StyleSheet,Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

export default function TopNavBar() {
    const navigation = useNavigation();

    const handleCart = () => {
        navigation.navigate('Cart');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('./../assets/images/Menu.png')} style={styles.menu} />
                <Image source={require('./../assets/images/Logo.png')} style={styles.logo} />
                <Image source={require('./../assets/images/Search.png')} style={styles.search} />
                <Pressable onPress={handleCart}>
                    <Image source={require('./../assets/images/shoppingBag.png')} style={styles.bag} />
                </Pressable>
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
