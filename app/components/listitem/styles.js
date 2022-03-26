import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    margin_layout: {
        marginLeft: 25,
        marginRight: 25,
    },
    titleItem: {
        marginTop: 50,
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 20,
        marginBottom: 10,
        color: "#2A2D3F",

    },
    itemBottom: {
        flex: 1,
        justifyContent: 'space-between',
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginVertical: 10,
    },
    ShadowItem: {
        shadowColor: "#e3e5ea",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
    },
    imageBottom: {

        justifyContent: "center",
        height: 66,
        width: 66,
        marginRight: 15,
        borderRadius: 10
    },
    title: {
        color: '#2A2D3F',
        alignContent: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',

    },
    price:
    {
        fontSize: 15,
        color: "#2A2D3F",
        flex: 2,
    },
})