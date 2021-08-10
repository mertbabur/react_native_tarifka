import React from 'react';
import {Text} from "react-native";

const Detail = ({route}) => {
    const {mealId} = route.params;
    console.log(mealId);
    return(
        <Text>Detail</Text>
    );
}

export default Detail;