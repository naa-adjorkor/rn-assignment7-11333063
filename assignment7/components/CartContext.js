import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
        try {
            const storedCart = JSON.parse(await AsyncStorage.getItem('cart')) || [];
            setCart(storedCart);
        } catch (error) {
            console.error('Error fetching cart:', error);
        }
        };
        fetchCart();
    }, []);

    useEffect(() => {
        const saveCart = async () => {
        try {
            await AsyncStorage.setItem('cart', JSON.stringify(cart));
        } catch (error) {
            console.error('Error saving cart:', error);
        }
        };
        saveCart();
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
        {children}
        </CartContext.Provider>
    );
    };

export const useCart = () => useContext(CartContext);
