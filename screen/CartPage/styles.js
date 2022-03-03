import { StyleSheet } from "react-native";
// import { Colors } from "../../Utils/Color";
// import { Fonts } from "../../Utils/Fonts";
// import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black',
        // backgroundColor: Colors.seventh,
        paddingHorizontal: 16
    },
    searchView: {
        height: 40,
        flexDirection: "row",
        marginTop: 40,
        borderWidth: 1,
        // borderColor: Colors.third,
        borderRadius: 5
    },
    icon: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    searchInput: {
        flex: 8,
        // fontFamily: Fonts.font_500,
        fontSize: 12,
        // color: Colors.third,
        paddingBottom: 0,
        paddingTop: 0
    },
    searchItem: {
        paddingHorizontal: 16,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // borderBottomColor: Colors.sixth,
        borderBottomWidth: 1
    },
    searchTextItem: {
        // fontFamily: Fonts.font_400,
        fontSize: 14,
        // color: Colors.eighth,
        marginVertical: 10
    },
    component: {
        marginTop: 24
    },
    wantToEarn: {
        // backgroundColor: Colors.third,
        borderRadius: 5,
        flexDirection: "row"
    },
    imageView: {
        // height: scale(145),
        // width: scale(145)
    },
    imageWantToEarn: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    contentWantToEarn: {
        flex: 1,
        padding: 30,
    },
    textWantToEarn: {
        // fontFamily: Fonts.font_700,
        fontSize: 14,
        // color: Colors.seventh,
        alignItems: "center"
    },
    readMoreButton: {
        alignItems: "baseline"
    },
    readMore: {
        // backgroundColor: Colors.primary,
        borderRadius: 3,
        paddingVertical: 3,
        paddingHorizontal: 15,
        // fontFamily: Fonts.font_500,
        fontSize: 10,
        // color: Colors.seventh,
    }
})
