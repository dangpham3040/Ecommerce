import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    header: {
        height: 50,
        width: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
    },
    container: {
        backgroundColor: '#f5f6fa',
        flexDirection: 'column',
        marginLeft: 30,
        marginRight: 30,
        paddingHorizontal: 16,
    },
    title: {
        color: '#2A2D3F',
        alignContent: 'center',
        justifyContent: 'center',
    },
    searchView: {
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        borderRadius: 20,
        height: 40,
        flexDirection: "row",
        flex: 5,
        marginTop: 40,
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 20,
        justifyContent: 'center'
    },
    icon: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    searchInput: {
        flex: 8,
        fontSize: 12,
        paddingBottom: 0,
        paddingTop: 0
    },
    searchItem: {
        paddingHorizontal: 16,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",


        borderBottomWidth: 1
    },
    searchTextItem: {

        fontSize: 14,

        marginVertical: 10
    },
    component: {
        marginTop: 24
    },


    itemBottom: {
        justifyContent: 'space-between',
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    itemAbove: {

        borderRadius: 20,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: 10,
        marginHorizontal: 5,
    },
    goto: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        position: 'absolute'
    },
    searchIcon: {
        marginLeft: 15,
        marginRight: 15,
        height: "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent: "flex-start"

    },
    price:
    {
        color: "#2A2D3F", fontSize: 7, flex: 2
    }
})

