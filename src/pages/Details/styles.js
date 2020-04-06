import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 8,
        backgroundColor: "#ffffff"
    },

    header: {
        flexDirection: 'row',
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
    },

    subHeader: {
        paddingBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        marginRight: 10,
        marginTop: 10,
    },

    incidentInfo: {
        marginBottom: 20,
        borderRadius: 8,
        backgroundColor: "#D5E8E7",
        padding: 24,
    },


    incidentUp: {
        marginTop: 8,
        marginBottom: 10,
        fontWeight: "bold",
    },

    contactBox: {
        marginBottom: 20,
        borderRadius: 8,
        backgroundColor: "#D5E8E7",
        padding: 24,
    },

    contactAction: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 30,
    },

    contactText: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10,
    },

    contactTextDois: {
        fontSize: 15,
    },

    imageUbuntu: {
        
        marginLeft: "auto",
        marginRight: "auto",
    },


})