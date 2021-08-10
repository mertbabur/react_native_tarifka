import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        alignItems: 'center'
    },
    image: {
        width: 385,
        height: 200,
        resizeMode: 'contain',
        justifyContent: 'flex-end',

    },
    text_container: {
        opacity: 0.5,
        backgroundColor: 'black',
        alignItems: 'flex-end',
        padding: 10
    },
    text: {
        opacity: 1,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,

    }
})