import React from 'react';
import {FlatList, SafeAreaView, Text} from "react-native";
import styles from './Meals.style';
import useFetch from "../../hooks/useFetch";
import MealsCard from "../../components/MealsCard";
import {useNavigation} from "@react-navigation/native";

let API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

const Meals = ({route}) => {
    const {categoryName} = route.params;
    const {loading, data, error} = useFetch(API_URL + categoryName);
    const navigation = useNavigation();

    const handleMealSelect = (mealId) => {
        navigation.navigate('DetailPage', {mealId});
    }

    const renderMeals = ({item}) => <MealsCard meal={item} onSelect={() => handleMealSelect(item.idMeal)} />;

    return(
        <SafeAreaView style={styles.container}>
            <FlatList data={data.meals} renderItem={renderMeals}/>
        </SafeAreaView>
    );
}

export default Meals;