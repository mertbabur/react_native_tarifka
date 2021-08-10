import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from "react-native";
import styles from './CategoriesCard.style';

const CategoriesCard = ({category, onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image source={{uri: category.strCategoryThumb}} style={styles.image}/>
                <Text style={styles.text}>{category.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>

    );
}

export default CategoriesCard;