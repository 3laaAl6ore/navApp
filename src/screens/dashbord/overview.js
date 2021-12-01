import React from 'react';
import { Text, View , TouchableOpacity} from 'react-native';
import Style from '../../utility/appStyle';

const OverviewScreen  = (props) => {

    return (
        <View style={Style.container}>
            <Text>Dashboard</Text>
            </View>
    )

}
// {} return a object

export const screenOptions = navData =>{
    return{
        headerTile:'Overview Dashboard'
    }
}

export default OverviewScreen;