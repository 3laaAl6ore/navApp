import React,{useState,useEffect} from 'react';
import { Text, View , TouchableOpacity} from 'react-native';
import Style from '../../utility/appStyle';

const OverviewScreen  = (props) => {

    const [data , setData] = useState([]);
    const loadData = async () => {

        const url='http://www.breakingbadapi.com/api/quotes'
        const response = await fetch(url,{
            method: 'GET'
        });
        const serverData = await response.json();
        setData(serverData);
    }
    useEffect(()=>{
        loadData();
    },[]);
    return (
        <View style={Style.container}>
            <Text>Dashboard</Text>
            </View>
    )

}
// {} return a object

export const screenOptions = navData =>{
    return{
        headerTitle:navData.route.params.nextPage.language
    }
}

export default OverviewScreen;