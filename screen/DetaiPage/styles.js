import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 50,
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        direction: 'inherit',
      },
      container: {
        backgroundColor: '#f5f6fa',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      },
      title: {
        color: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: 25
    
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
      },
      checkoutBottom:
      {
        flex: 2.25,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
      }
    });