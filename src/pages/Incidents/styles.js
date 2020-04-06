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
        justifyContent: 'space-between',
    },

    countText: {
        textAlign: "center",
        color: "#51964F",
        marginBottom: 10,
    },
/** 
    welcomeText: {
        textAlign: "center",
        paddingTop: 30,
        fontSize: 25,
    },
*/
    incidentsList: {
        paddingTop: 20,
    },

    incident: {
        padding: 24,    
        borderRadius: 8,
        backgroundColor: "#D5E8E7",
        marginBottom: 20,
    },

    incidentUp: {
        fontWeight: "bold",
    },

    incidentDown: {
        marginTop: 8,
        marginBottom: 24,
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    detailsButtonText: {
        fontWeight: "bold",
        color: "#51964F",
    },
});