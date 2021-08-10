import React from 'react';
import {FlatList, SafeAreaView, Text} from "react-native";
import useFetch from "../../hooks/useFetch";
import styles from './Categories.style';
import CategoriesCard from "../../components/CategoriesCard";
import {useNavigation} from "@react-navigation/native";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

let API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

const Categories = () => {
    const {loading, data, error} = useFetch(API_URL);
    const navigation = useNavigation();

    const handleMealSelect = (categoryName) => {
        navigation.navigate('MealsPage', {categoryName});
    }

    const renderCategories = ({item}) => <CategoriesCard category={item} onSelect={() => handleMealSelect(item.strCategory)}/>;

    if(loading){
        return <Loading />;
    }

    if(error){
        return <Error />
    }

    return(
        <SafeAreaView style={styles.container}>
            <FlatList data={data.categories} renderItem={renderCategories} />
        </SafeAreaView>
    );
}

export default Categories;