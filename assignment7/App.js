import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './components/CartContext';
import DrawerNavigator from './navigation/DrawerTab';


export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
    </CartProvider>
        
      );
    }
