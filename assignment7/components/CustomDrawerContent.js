import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
        <View style={styles.header}>
            <Text style={styles.title}>Naa Adjorkor</Text>
            <Pressable onPress={() => props.navigation.closeDrawer()}>
                <Image source={require('../assets/images/Close.png')} style={styles.closeButton} />
            </Pressable>
        </View>
        <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
},
closeButton: {
    width: 24,
    height: 24,
},
});
