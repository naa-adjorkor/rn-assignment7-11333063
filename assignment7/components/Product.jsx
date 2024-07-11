import { View, Text, Image, StyleSheet, TouchableOpacity,Pressable } from 'react-native'
import React from 'react'


const addIcon = require('./../assets/images/add_circle.png');
export default function Product({item, onPress}) {
    return (
    <View style={styles.container}>
    <View style={styles.body}>
        <View style={styles.imageContainer}>
            <Pressable onPress={onPress}><Image source={{uri:item.image}} style={styles.image}/></Pressable>
            <TouchableOpacity style={styles.addIcon}><Image source={addIcon} style={styles.add}/></TouchableOpacity>
        </View>
    </View>
    <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description} numberOfLines={3}>{item.description}</Text>
            <Text style={styles.price}>${item.price}</Text>
    </View>
    
    </View>
)
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    margin: 10,
    overflow: 'hidden',
},
body:{
    top:20,
},
imageContainer:{
    position:'relative',
    width: '100%',
    height: 200,
},
image:{
    marginRight:12,
    width: '100%',
    height: '100%',
},
addIcon:{
    position:'absolute',
    bottom: 8,
    right: 8,
},
add:{
    width:30,
    height:30,
},
textContainer:{
    top:12,
    padding:10,
},
title:{
    fontSize:18,
    fontWeight:'400',
    color:'#000',
},
description:{
    fontSize:14,
    fontWeight:'300',
    color:'#AAAAAA',
},
price:{
    fontSize:20,
    fontWeight:'300',
    color:'#FFA100',
},





})