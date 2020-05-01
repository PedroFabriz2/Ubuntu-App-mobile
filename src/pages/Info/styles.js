import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 8,
        backgroundColor: "#ffffff",
        paddingBottom: Constants.statusBarHeight + 8,
    },

    header: {
        display: "flex",
        alignItems: "center",
    },

    image: {
       width: "30%" 
    },

    subHeader: {
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        marginRight: 10,
        marginTop: 10,
    },

    middleContainer: {
        backgroundColor: "#D5E8E7",
        padding: 10,
        borderRadius: 15,
    },

    imagemiddle: {
        display: "flex",
        width: "92%",
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 9,
    },

    end: {
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        height: 130,
    },

    textmiddle: {
        
        fontSize: 15,
        padding: 15,
        marginTop: 8,
        textAlign: "justify",
        fontWeight: "500", 
    },

});