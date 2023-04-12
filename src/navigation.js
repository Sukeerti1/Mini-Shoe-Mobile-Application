import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductsScreen from "./screens/ProductsScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { Pressable, Text } from "react-native";
import { useSelector } from "react-redux";
import { selectNumberofItems } from "./store/cartSlice";

import {FontAwesome5} from "@expo/vector-icons"

const Stack = createNativeStackNavigator() 

const Navigation = () => {
    const numberofItems = useSelector(selectNumberofItems)
    return (
        <NavigationContainer>
            <Stack.Navigator 
              screenOptions={{contentStyle: {backgroundColor: 'white'}}}>
                <Stack.Screen 
                  name='Products' 
                  component={ProductsScreen} 
                  options={({navigation}) => ({
                    headerRight: () => (
                    <Pressable 
                    onPress={() => navigation.navigate('Cart')} 
                    style={{flexDirection: 'row'}}
                    >
                       <FontAwesome5 name='shopping-cart' size={18} color="gray" />
                       <Text style={{marginLeft: 5, fontWeight: '500'}}>{numberofItems}</Text>
                    </Pressable>
                    ),
                  })}
                />
                <Stack.Screen 
                  name='Product Details' 
                  component={ProductDetailScreen} 
                  options={{presentation: 'modal'}} 
                />
                <Stack.Screen 
                  name='Cart' 
                  component={ShoppingCart}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation