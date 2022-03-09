import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
    top: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f5f6fa',
    flexDirection: 'column',
  },
  title: {
    color: "#2A2D3F",
    alignContent: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    fontWeight: "bold",
  },
  searchView: {
    height: 40,
    flexDirection: "column",
    marginTop: 40,
    borderWidth: 1,
    borderRadius: 5
  },
  icon: {
    height: 40,
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


  contentWantToEarn: {
    flex: 1,
    padding: 30,
  },
  textWantToEarn: {

    fontSize: 14,

    alignItems: "center"
  },
  readMoreButton: {
    alignItems: "baseline"
  },
  readMore: {

    borderRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 15,
    fontSize: 10,
  },

  item: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: '##F5F6FA',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  bottomCheckout: {
    flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10, paddingTop: 10,
  },
  line: {
    borderBottomColor: '#e1e1ea',
    borderBottomWidth: 1,
  },
  CheckOutButton:
  {
    backgroundColor: '#2A2D3F',
    width: '100%',
    height: '30%',
    borderRadius: 50,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    bottom: 20,
  },
  add_del: {
    margin: 5,
    borderWidth: 3,
    borderColor: "#dddde8",
    alignContent: "center",
    marginLeft: 10,
    marginTop: 5,
    backgroundColor: '#fff',
    width: '35%',
    height: '70%',
    borderRadius: 50,
    borderColor: '#DDDDE8',
  },
  backgroundBottom: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingHorizontal: 30,
    paddingVertical: 30,

  }
});



