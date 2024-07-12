import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import TopNavBar from '../navigation/TopNavBar';

const exportIcon = require('./../assets/images/Export.png');
const bleachIcon = require('./../assets/images/Do Not Bleach.png');
const dryIcon = require('./../assets/images/Do Not Tumble Dry.png');
const washIcon = require('./../assets/images/Do Not Wash.png');
const ironIcon = require('./../assets/images/Iron Low Temperature.png');
const addToCart = require('./../assets/images/Plus.png')
const favIcon = require('./../assets/images/Heart.png')
const shippingIcon = require('./../assets/images/Shipping.png')
const upIcon = require('./../assets/images/Up.png')


export default function ProductDetailScreen({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentContainer}>
      <TopNavBar/>
      <View style={styles.detailsContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.header}>
          <Text style={styles.title}>{product.title}</Text>
          <Image source={exportIcon} style={styles.exportIcon} />
        </View>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>MATERIALS</Text>
        <Text style={styles.sectionSubTitle}>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.</Text>
        <View style={styles.sectionContent}>
          <View style={styles.sectionHeader}>
            <Image source={bleachIcon} style={styles.sectionIcon} />
            <Text style={styles.sectionText}>Do not use bleach</Text>
          </View>
          <View style={styles.sectionHeader}>
            <Image source={dryIcon} style={styles.sectionIcon} />
            <Text style={styles.sectionText}>Do not tumble dry</Text>
          </View>
          <View style={styles.sectionHeader}>
            <Image source={washIcon} style={styles.sectionIcon} />
            <Text style={styles.sectionText}>Dry clean with tetrachloroethylene</Text>
          </View>
          <View style={styles.sectionHeader}>
            <Image source={ironIcon} style={styles.sectionIcon} />
            <Text style={styles.sectionText}>Iron at a maximum of 110ºC/230ºF</Text>
          </View>
        </View>
          <View style={styles.sectionShipping}>
          <View style={styles.shippingDetails}>
            <View style={styles.shippingHeader}>
              <Image source={shippingIcon} style={styles.shippingIcon}/>
              <Text style={styles.shippingText}>Free Flat Rate Shipping</Text>
            </View>
            <Image source={upIcon} style={styles.shippingIcon}/>
          </View>
          <View style={styles.shippingDateContainer}>
            <Text style={styles.shippingDate}>Estimated to be delivered on </Text>
            <Text style={styles.shippingDate}>09/11/2021 - 12/11/2021.</Text>
          </View>
          </View>
      </View>
      </ScrollView>
      <TouchableOpacity style={styles.addToCartButton}>
      <View style={styles.addToCartButtonContent}>
        <View style={styles.addToCart}>
        <Image source={addToCart} style={styles.addToCartButtonPlus} />
        <Text style={styles.addToCartButtonText}>ADD TO BASKET</Text>
        </View>
        <Image source={favIcon} style={styles.addToCartButtonHeart} />
      </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
container:{
  flex: 1,
},
contentContainer: {
  flex: 1,
  paddingTop: 55,
  paddingHorizontal: 24,
  backgroundColor:'#ffffff'
},
detailsContainer:{
  top:20,
},
image: {
  width: '100%',
  height: 200,
  resizeMode: 'contain',
},
header: {
  flexDirection: 'row',
  alignItems: 'center',
},
exportIcon: {
  width: 24,
  height: 24,
},
title:{
  flex:1,
  fontSize:18,
  fontWeight:'400',
  color:'#000',
},
description:{
  top:6,
  fontSize:16,
  fontWeight:'400',
  color:'#AAAAAA',
},
price:{
  top:12,
  fontSize:20,
  fontWeight:'300',
  color:'#FFA100',
},
section: {
  top:40,
},
sectionTitle: {
  fontSize: 18,
  fontWeight: '400',
},
sectionSubTitle:{
  fontSize:14,
  fontWeight:'300',
  color:'#AAAAAA',
},
sectionContent:{
  top:8,
  borderBottomWidth: 1.5,
  width: '90%',
  borderBottomColor: '#E8E8E8',
},
sectionHeader:{
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 6,
},
sectionIcon:{
  width:30,
  height:30,
  tintColor:'#AAAAAA'
},
sectionText:{
  marginLeft:5,
  fontSize:14,
  fontWeight:'300',
  color:'#AAAAAA',
},
sectionShipping:{
  top:20,
},
shippingHeader:{
  flexDirection:'row',
  alignItems:'center',
},
shippingDetails:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
},
shippingText:{
  marginLeft:8,
  fontSize:15,
  fontWeight:'300',
  color:'#000000',
},
shippingIcon:{
  width:26,
  height:26,
},
shippingDateContainer:{
  left:34,
  marginVertical:5,
  gap:10,
},
shippingDate:{
  fontSize:15,
  fontWeight:'300',
  color:'#AAAAAA',
},
addToCartButton: {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  height: 70,
  backgroundColor: '#000',
  justifyContent: 'center',
  alignItems: 'center',
},
addToCartButtonContent: {
  flexDirection: 'row',
  alignItems: 'center',
},
addToCart:{
  flexDirection:'row',
  marginRight:110,
},
addToCartButtonText: {
  fontSize: 20,
  fontWeight: '300',
  letterSpacing: 2,
  color: '#ffffff',
  marginLeft: 10,
},
addToCartButtonPlus: {
  width: 30,
  height: 30,
  tintColor: '#ffffff',
},
addToCartButtonHeart: {
  width: 30,
  height: 30,
  tintColor: '#ffffff',
},
});
