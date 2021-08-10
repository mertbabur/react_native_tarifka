import React from 'react';
import {ImageBackground, Text, TouchableWithoutFeedback, View} from "react-native";
import styles from './MealsCard.style';

const MealsCard = ({meal, onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <ImageBackground style={styles.image} source={{uri: meal.strMealThumb}} >
                    <View style={styles.text_container}>
                        <Text style={styles.text}>{meal.strMeal}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>

    )
}

export default MealsCard;