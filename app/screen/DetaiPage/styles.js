import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    marginTop: 20,
    flexWrap: 'wrap',
    direction: 'inherit',
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 25,
    alignItems: 'center'
  },
  headericon: {
    marginTop: 20,
    backgroundColor: '#f5f6fa',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: 45,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    direction: 'inherit',
    height: '100%',
    width: '100%',

  },
  container: {
    backgroundColor: '#f5f6fa',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  titleProduct: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: 25,
    textAlign: "center",
  },
  title: {
    marginTop: 15,
    color: '#2A2D3F',
    alignContent: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 20, fontWeight: 'bold', lineHeight: 20,
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

  price:
  {
    color: "#2A2D3F", fontSize: 7, flex: 2
  },
  checkoutBottom:
  {
    backgroundColor: '#f5f6fa',
    marginTop: 30,
    marginLeft: 20,
    flexDirection: 'column',
    alignContent: 'space-between',
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  AddCartIcon: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#2A2D3F',
    borderTopLeftRadius: 200,

    alignContent: 'center',
    alignItems: "center",
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 20,
    width: "55%",
    height: "18%",
  },
  HeartLike: {
    flexDirection: 'column',
    alignContent: 'flex-end',
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flex: 1,
    position: 'absolute',
    bottom: -30,
    right: 20,

    borderRadius: 50,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 15,
    marginHorizontal: 10,
    padding: 0,
    margin: 0,
  },
  describe: {
    width: 350, fontWeight: '400', color: "#B8B8CD", top: 10, right: 20, fontFamily: 'PoppinsVN-400', fontSize: 15, left: 5
    ,
  },
  price: {
    flex: 1, justifyContent: 'center', color: "#F26B6B", fontSize: 25, fontWeight: 'bold', lineHeight: 25, fontFamily: 'Poppins'
  },
  SliderBox: {
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    paddingBottom: 40,
  },
  LinearGradient: {
    height: "25%", width: "100%",
    position: "absolute",
    top: 410,
    bottom: 0,
    opacity: 0.49,
  }

});