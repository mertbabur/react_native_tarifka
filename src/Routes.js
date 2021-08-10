import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Categories from "./pages/Categories";
import Detail from "./pages/Detail";
import Meals from "./pages/Meals";

const Stack = createStackNavigator();

const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"CategoriesPage"} component={Categories} options={{
                    title: 'Categories',
                    headerTitleStyle:{color: '#ffa500'},
                    headerTitleAlign: 'center'
                }}/>
                <Stack.Screen name={"MealsPage"} component={Meals} options={{
                    title: 'Meals',
                    headerTitleStyle:{color: '#ffa500'},
                    headerTitleAlign: 'center'
                }}/>
                <Stack.Screen name={"DetailPage"} component={Detail} options={{
                    title: 'Detail',
                    headerTitleStyle:{color: '#ffa500'},
                    headerTitleAlign: 'center'
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;