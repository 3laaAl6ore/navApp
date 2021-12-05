import React from "react";
import { Text, View, TouchableOpacity,FlatList } from "react-native";
import Style from "../../utility/appStyle";
const fakeData = [
  {
    id : 1,
    language: "React Native",
    description: "Developing mobile application",
  },
  {
    id : 2,
    language: "Python",
    description: "Just Shity Language",
  },
  {
    id : 3,
    language: "Swift4",
    description: "Build IOS Applications",
  },
];
const DashboardScreen = (props) => {
  return (
    <View style={Style.container}>
      <Text>Dashboard</Text>
      <FlatList
      data={fakeData}
      keyExtractor = {item=>item.id}
      renderItem = {langItem => 
    
    <View style={{width: '100%', paddingVertical:20}}>
        <Text>{langItem.item.language}</Text> 
        <Text>{langItem.item.description}</Text>
        <TouchableOpacity onPress={()=>{props.navigation.navigate('overview',{nextPage:langItem.item})}}>
            <Text>Show Me</Text>
            </TouchableOpacity> 
        
    </View>
    }

      />
    </View>
  );
};
// {} return a object

export const screenOptions = (navData) => {
  return {
    headerTitle: "Dashborad",
  };
};

export default DashboardScreen;
