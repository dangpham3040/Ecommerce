import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 40, alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 20,
    flex: 1,
    paddingBottom: 45,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    direction: 'inherit',
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f5f6fa',
    flexDirection: 'column',

  },
  _title: {
    color: "#2A2D3F",
    alignContent: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    top: 5,
    color: "#2A2D3F",
    alignContent: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 15,
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
    backgroundColor: '#F5F6FA',
    padding: 20,
    marginHorizontal: 10,
    flex: 4, flexDirection: 'row', alignItems: 'center' 
  },
  item_dim: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: '#3c3c3c',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    flex: 4, flexDirection: 'row', alignItems: 'center' 
  },
  itemModal: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: '#F5F6FA',
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' 
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
  closeButton:
  {
    marginLeft: 40,
    backgroundColor: '#2A2D3F',
    width: '80%',
    height: '8%',
    borderRadius: 50,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    bottom: 20,

  },
  add_del: {
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 3,
    borderColor: "#dddde8",
    alignContent: "center",
    marginLeft: 10,
    backgroundColor: '#fff',
    width: '30%',
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
    paddingVertical: 10,
    overflow: "hidden",
  },
  Shadow: {
    shadowColor: "#e2e5eb",

    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  MainContainer: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: (Platform.OS == 'ios') ? 20 : 0

  },

  Alert_Main_View: {

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
    height: 200,
    width: '90%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 7,

  },

  Alert_Title: {

    fontSize: 25,
    color: "#fff",
    textAlign: 'center',
    padding: 10,
    height: '28%'

  },

  Alert_Message: {

    fontSize: 22,
    color: "#fff",
    textAlign: 'center',
    padding: 10,
    height: '42%'

  },

  buttonStyle: {

    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'

  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 22,
    marginTop: -5
  },
  titleCheckOut:
  {
    marginTop: 20,
    marginLeft: 85,
    color: "#2A2D3F",
    alignContent: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    fontWeight: "bold",
  },
  numberCart:
  {
    left: 27, position: 'absolute', top: 7, backgroundColor: '#e65c51', borderRadius: 50, height: 15, width: 15, alignItems: 'center'
  },
  numberCart_dim:
  {
    left: 27, position: 'absolute', top: 7, backgroundColor: '#3c3c3c', borderRadius: 50, height: 15, width: 15, alignItems: 'center'
  },
  title_checkout: {
    color: '#fff', fontWeight: 'bold', fontWeight: '500', fontSize: 20
  },
  total:
  {
    color: "#F26B6B", flex: 4,
    textAlign: 'right'
  },
  ship: {
    color: "#F26B6B", flex: 4,
    textAlign: 'right'
  },
  totalMoney: {
    color: "#F26B6B", flex: 3.5,
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'right'
  },
  Confirm:
  {
    marginRight: 30, marginLeft: 30, color: '#fff', fontWeight: 'bold', fontWeight: '500', fontSize: 20
  },
  Subtotal: {
    color: "#2A2D3F", flex: 2, fontWeight: 'bold', fontSize: 20
  },
  Shipping_Fee: {
    color: "#2A2D3F", flex: 2
  },
  view_Subtotal:
  {
    flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', left: 30, bottom: 150
  },
  blur:
  {
    backgroundColor: '#3c3c3c'
  },
  top:
  {
    flex: 2
  },
  title_mony: {
    color: "#2A2D3F", flex: 2
  },
  view_checkout: {
    flex: 1, justifyContent: 'flex-end'
  },
  modal_view:
  {
    flex: 1, margin: 30, borderRadius: 50
  },
  modal_header: {
    flexDirection: 'row', backgroundColor: '#f5f6fa'
  },
  modal_goback:
    { marginLeft: 20, marginTop: 20, },
  modal_body:
  {
    flex: 1, flexDirection: 'column', backgroundColor: '#f5f6fa'
  },
  flatList_top:
  {
    flex: 1,
    marginLeft: 25,
    marginRight: 25,

  },
  flatList_bottom: {
    borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 20
  },
  modal_monney:
  {
    color: "#2A2D3F", flex: 1, fontWeight: 'bold', fontSize: 20
  },
  modal_totalmoney:
  {
    color: "#F26B6B", 
    flex: 2,
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'right'
  },
  check:{
    marginRight: 15 
  },
  Image:{
    flex: 1, height: 70, width: 70, marginRight: 15, borderRadius: 20 
  },
  view_item:
  {
    flex: 2, flexDirection: 'column', marginLeft: 15, justifyContent: 'center' 
  },
  item_body:
  {
    flexDirection: 'row', alignContent: 'space-between', top: 15
  },
  item_price:
  {
    flex: 1, color: "#F26B6B", fontSize: 15, fontWeight: '400' 
  },
  item_quantity:
  {
    marginLeft: 5, marginRight: 5 
  },
  checkout_quantity:
  {
    flex: 1, marginLeft: 5, marginRight: 5, marginTop: 10, textAlign: 'right'
  },
  modal_title:
  {
    color: "#2A2D3F", flex: 2, fontWeight: 'bold', fontSize: 20 
  }
});



