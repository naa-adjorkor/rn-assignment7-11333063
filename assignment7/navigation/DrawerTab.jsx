import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import StoreScreen from '../screens/StoreScreen';
import LocationsScreen from '../screens/LocationsScreen';
import BlogScreen from '../screens/BlogScreen';
import JewelryScreen from '../screens/JewelryScreen';
import ElectronicScreen from '../screens/ElectronicScreen';
import ClothingScreen from '../screens/ClothingScreen';
import CustomDrawerContent from '../components/CustomDrawerContent';
import StackTab from './StackTab';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Home" component={StackTab} />
      <Drawer.Screen name="Store" component={StoreScreen} />
      <Drawer.Screen name="Location" component={LocationsScreen} />
      <Drawer.Screen name="Blog" component={BlogScreen} />
      <Drawer.Screen name="Jewelry" component={JewelryScreen} />
      <Drawer.Screen name="Electronic" component={ElectronicScreen} />
      <Drawer.Screen name="Clothing" component={ClothingScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
