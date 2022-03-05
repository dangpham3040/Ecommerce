import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  container: {
    justifyContent: 'space-between',
    backgroundColor: '#f5f6fa',
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 16,
  },
  title: {
    color: "#2A2D3F",
    alignContent: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
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

    flex: 1,
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});



