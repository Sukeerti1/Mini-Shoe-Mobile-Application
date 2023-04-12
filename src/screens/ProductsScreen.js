import { useNavigation } from '@react-navigation/native';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    FlatList, 
    Pressable 
} from 'react-native';
//import products from '../data/products';

import { useSelector, useDispatch } from 'react-redux';
import { productSlice } from '../store/productSlice';

const ProductsScreen = ({navigation}) => {
    //const navigation = useNavigation()
   
    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch()
    return (
        <FlatList
        data={products} 
        renderItem={({item}) => (
        //  <View style={styles.itemContainer}>
        //  <Image source={{ uri: item.image }} style={styles.image}/>
        //  </View>
        <Pressable 
         onPress ={() => {
            dispatch(productSlice.actions.setSelectedProduct(item.id))
            navigation.navigate('Product Details')
        } }
         style={styles.itemContainer}>
            <Image source={{uri: item.image}} style={styles.image}/>
        </Pressable>

        )}
        numColumns={2}
       /> 
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        aspectRatio: 1,
      },
      itemContainer: {
        width: '50%',
        padding: 1,
      }
})

export default ProductsScreen