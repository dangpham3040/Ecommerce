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
        backgroundColor: '#f5f6fa',
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
        height: 40,
        flexDirection: "row",
        flex: 5,
        marginTop: 60,
        borderWidth: 1,
        borderRadius: 10,
        marginRight: 10,
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadiusr: 10,
        borderBottomRightRadius: 10,
        marginBottom: 30,


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
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginVertical: 10,
    },
    itemAbove: {
        height: 300,
        width: 200,
        borderRadius: 10,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginHorizontal: 5,
        marginLeft: 20,
        alignContent: "center",
        alignItems: 'center',
        marginVertical: 10,
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
        fontSize: 15, color: '#2A2D3F', flex: 1
    },
    imageBottom: {

        justifyContent: "center",
        height: 66,
        width: 66,
        marginRight: 15,
        borderRadius: 10
    },
    imageAbove: {

        marginLeft: 20,
        marginRight: 20,
        height: 180, width: 180,
        borderRadius: 10,
        alignItems: 'flex-end',
    },
    headerIcon: {

        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleAbove: {
        alignItems: 'center',
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
        marginBottom: 10,
        color: "#2A2D3F",
 
    },
    list_bottom:
    {
        flex: 1.75,
        width: '85%',
        height: '15%',
        left: 25,
        right: 25,

    },

    margin_layout: {
        marginLeft: 25,
        marginRight: 25,
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
    numberCart:
    {
        left: 27, position: 'absolute', top: 7, backgroundColor: '#e65c51', borderRadius: 50, height: 15, width: 15, alignItems: 'center'
    },
    title_num: {
        color: '#fff', fontSize: 10, fontWeight: 'bold'
    },
    view_top:
    {
        flexDirection: "row", marginLeft: 25,
        marginRight: 25,
    },
    shop_cart: {
        marginTop: 50, flexDirection: 'row'
    },
    Heart:
    {
        flex: 1,
        top: 5,
        right: 5,
    },
    item_body:
    {
        marginBottom: 20, marginTop: 20, alignSelf: 'flex-start'
    },
    addicon:
    {
        flex: 1, alignItems: "flex-end"
    }
});