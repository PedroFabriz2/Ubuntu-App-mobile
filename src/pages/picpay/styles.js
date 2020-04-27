import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D5E8E7"
    },

    subContainer: {
        backgroundColor: "#ffffff",
        flex: 1,
        padding: 24,
        borderColor: "#000000",
        marginHorizontal: 40,
    },
 
    image: {
        width: 186.005314438,
        height: 60,
        display: "flex",
        alignItems: "center",
        marginTop: 25,
    },

    box: {
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        backgroundColor: "#D5E8E6",
        marginTop: 50,
    },

    textbox: {
        fontWeight: "bold",
        marginLeft: "auto",
        marginRight: "auto",
    },

    texthelp1: {
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 80,
    },

    texthelp2: {
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
    },

    button: {
        display: "flex",
        alignItems: "center",
        top: "10%",
       
    },

    header: {
        display: "flex",
        alignItems: "center",
    }
})