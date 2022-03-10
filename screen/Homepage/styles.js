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
        marginTop: 30,
        justifyContent: "center",
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10,
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
        marginTop: 60,
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 20,
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadiusr: 10,
        borderBottomRightRadius: 10,
        marginBottom: 30,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 2,
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
        flex: 1,
        justifyContent: 'space-between',
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 10,
        marginVertical: 8,
        borderRadius:25,
  
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 1,

    },
    itemAbove: {
        backgroundColor:'red',
        height: 300,
        width:200,
        borderRadius: 20,
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 10,
        marginHorizontal: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 2,
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
        justifyContent: "center",
        height: 66,
        width: 66,
        marginRight: 15,
        borderRadius: 20
    },
    imageAbove: {
    
        height: 180, width: 180,
        borderRadius: 15,
        alignItems: 'flex-end',
        flexWrap: 'wrap-reverse',
        direction: 'inherit'
    },
    headerIcon: {
        marginTop: 30,
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
        marginTop: 50,
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 20,
        marginBottom: 9,
        color: "#2A2D3F"
    }
});