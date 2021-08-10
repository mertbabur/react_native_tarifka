import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 15,
        borderWidth: 1,
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
        backgroundColor: '#eceff1'
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },
    text: {
        fontSize: 25,
        marginLeft: 15
    }
})