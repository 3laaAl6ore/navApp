import React from 'react';
import { Text, View , TouchableOpacity} from 'react-native';
import Style from '../../utility/appStyle';

const ProductsScreen  = (props) => {

    return (
        <View style={Style.container}>
            <Text>Dashboard</Text>
            </View>
    )

}
// {} return a object

export const screenOptions = navData =>{
    return{
        headerTile:'Products'
    }
}

export default ProductsScreen;