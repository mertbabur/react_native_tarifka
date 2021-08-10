import {Dimensions, StyleSheet} from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f2f2f2'
    },
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 3
    },
    title_container: {
        flex: 1,
        padding: 5,
        borderBottomWidth: 2,
        borderColor: '#bdbdbd'
    },
    title: {
        fontSize: 35,
        color: '#a52a2a',
        fontWeight: 'bold'
    },
    strArea: {
        fontSize: 20,
        color: '#a52a2a',
        fontWeight: 'bold'
    },
    inst_container: {
        padding: 10,
    },
    inst: {
        fontSize: 20
    },
    touchable_container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingBottom: 50
    },
    touchable: {
        width:380,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#ff0000',
        alignItems: 'center',
        justifyContent: 'center'

    },
    link: {
        fontSize: 20,
        color: 'white'
    }
})