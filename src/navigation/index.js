// step 1 - import LIBS
import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
// step 2 - import All Screens

// cart - screens
import CartScreen ,{screenOptions as CartScreenOptions}from '../screens/cart';
import BasketScreen,{screenOptions as BasketScreenOptions} from '../screens/cart/basket';
import PaymentsScreen ,{screenOptions as PaymentsScreenOptions}from '../screens/cart/payments';
 
//catalog - screens
import catalogScreen ,{screenOptions as CatalogScreenOptions}from '../screens/catalog';
import ProductsScreen ,{screenOptions as ProductsScreenOptions} from '../screens/catalog/products';
import ProductDetalisScreen ,{screenOptions as ProductsDetalisScreenOptions} from '../screens/catalog/productsDetalis'

//dashbord - screens
import DashbordScreen ,{screenOptions as DashbordScreenOptions}from '../screens/dashbord';
import OverviewScreen ,{screenOptions as OverviewScreenOptions}from '../screens/dashbord/overview';
import SalesScreen ,{screenOptions as SalesScreenOptions}from '../screens/dashbord/sales';

// step 3- Create Const For Each Stack

const DashbordStackNavigator = createStackNavigator();
export const DashbordStack = ()=>{
    return(
        <DashbordStackNavigator.Navigator>

            <DashbordStackNavigator.Screen name='dashboard' component={DashbordScreen} options={DashbordScreenOptions}/>
            <DashbordStackNavigator.Screen name='overview' component={OverviewScreen} options={OverviewScreenOptions}/>
            <DashbordStackNavigator.Screen name='sales' component={SalesScreen} options={SalesScreenOptions}/>

         </DashbordStackNavigator.Navigator>)
}

const CatalogStackNavigator = createStackNavigator();

export const CatalogStack =()=>{
    return(
        <CatalogStackNavigator.Navigator>

            <CatalogStackNavigator.Screen  name='catalog' component={catalogScreen} options={CatalogScreenOptions}/>
            <CatalogStackNavigator.Screen  name='products' component={ProductsScreen} options={ProductsScreenOptions}/>
            <CatalogStackNavigator.Screen  name='productsDetalis' component={ProductDetalisScreen} options={ProductsDetalisScreenOptions}/>
        
        </CatalogStackNavigator.Navigator>
    )
}

const CartStackNavigator = createStackNavigator();

export const CartStack =()=>{
    return(
        <CartStackNavigator.Navigator>

            <CartStackNavigator.Screen  name='cart' component={CartScreen} options={CartScreenOptions}/>
            <CartStackNavigator.Screen  name='basket' component={BasketScreen} options={BasketScreenOptions}/>
            <CartStackNavigator.Screen  name='payments' component={PaymentsScreen} options={PaymentsScreenOptions}/>

        </CartStackNavigator.Navigator>
    )
}



// step 4 - Create Bottom Bar

const AppBottomBarNavigator = createMaterialBottomTabNavigator();

export const AppBottomBar = ()=>{
    return(
        <AppBottomBarNavigator.Navigator>
            <AppBottomBarNavigator.Screen 
            options=
            {
                {
                    tabBarLabel :'dashbord',
                    tabBarIcon:({  }) =>(<MaterialIcons name='dashboard-customize' color="#ffaa00" size ={26}/>)
                }
            }
            name='dashboard' 
            component = {DashbordStack} 
            />

            <AppBottomBarNavigator.Screen 
            name='Catalog' 
            component = {CatalogStack}
            options=
            {
                {
                    tabBarLabel :'Catalog',
                    tabBarIcon:({  }) =>(<Entypo name='text-document-inverted' color="#ffaa00" size ={26}/>)
                }
            }
            />
            <AppBottomBarNavigator.Screen 
            name='Cart' 
            component = {CartStack}
            options=
            {
                {
                    tabBarLabel :'Cart',
                    tabBarIcon:({  }) =>(<Entypo name='shopping-cart' color="#ffaa00" size ={26}/>)
                }
            }
            />
            </AppBottomBarNavigator.Navigator>
    )
}