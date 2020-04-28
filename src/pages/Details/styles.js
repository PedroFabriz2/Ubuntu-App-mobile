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

    all1: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-between"
        
    },
    all2: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between"
        
    },

    contactText: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10,
    },

    contactTextDois: {
        fontSize: 15,
    },

    button: {
        backgroundColor: "#51964F",
        borderRadius: 8,
        height: 50,
        width: "48%",
        justifyContent: "center",
        alignItems: "center"
    },

    buttonPicpay: {
        backgroundColor: "#ffffff",
        borderRadius: 8,
        borderColor: "#51964F",
        height: 50,
        width: "48%",
        justifyContent: "center",
        alignItems: "center"
    },

    helptext: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: "bold"
    },

    picpay: {
        width: 100,
        height: 32,
        
    }
})