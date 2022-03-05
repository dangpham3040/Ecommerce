import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    header: {
        flex: 1,
        height: 50,
        width: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    container: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 20,
        marginRight: 20,
        paddingHorizontal: 16,
    },
    title: {
        color: '#2A2D3F',
        alignContent: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',

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
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadiusr: 10,
        borderBottomRightRadius: 10,

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
        paddingTop: 0,
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
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    itemAbove: {
        flex: 1,
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
        fontSize: 15,
        color: "#2A2D3F",
        flex: 2,
    },
    imageBottom: {
        backgroundColor: "#DDDDE8",
        height: 66,
        width: 66,
        marginRight: 15,
        borderRadius: 15
    },
    imageAbove: {
        backgroundColor: "#DDDDE8",
        height: 150, width: 150,
        borderRadius: 15,
        marginBottom: 40,
        alignItems: 'flex-end',
        flexWrap: 'wrap-reverse',
        direction: 'inherit'
    },
    headerIcon: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleAbove: {
        color: '#2A2D3F',
        alignContent: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontWeight: 'bold',
        justifyContent: 'flex-start'
    },
    titleItem: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 15,
        marginBottom: 9,
        color: "#2A2D3F"
    }
});