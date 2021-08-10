import React from 'react';
import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import useFetch from "../../hooks/useFetch";
import styles from './Detail.style';
import {Linking} from 'react-native';
import Loading from "../../components/Loading";
import Error from "../../components/Error";

let API_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const Detail = ({route}) => {
    const {mealId} = route.params;
    console.log(mealId);
    const {loading, data, error} = useFetch(API_URL + mealId);
//data.meals[0].strYoutube

    const goToLink = () => Linking.openURL(data.meals[0].strYoutube);

    if(loading){
        return <Loading />;
    }

    if(error){
        return <Error />
    }

    return(
        <ScrollView style={styles.container} >
            <Image style={styles.image} source={{uri: data.meals[0].strMealThumb}} />
            <View style={styles.title_container}>
                <Text style={styles.title}>{data.meals[0].strMeal}</Text>
                <Text style={styles.strArea}>{data.meals[0].strArea}</Text>
            </View>
            <View style={styles.inst_container}>
                <Text style={styles.inst}>{data.meals[0].strInstructions}</Text>
            </View>
            <View style={styles.touchable_container}>
                <TouchableOpacity style={styles.touchable} onPress={goToLink}>
                    <Text style={styles.link}>Watch On Youtube</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Detail;