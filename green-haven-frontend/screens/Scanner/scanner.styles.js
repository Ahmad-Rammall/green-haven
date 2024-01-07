import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: COLORS.gray2,
    paddingTop: -Constants.statusBarHeight,
  },
  controls: {
    flex: 0.5,
  },
  button: {
    height: 40,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#E9730F",
    marginLeft: 10,
  },
  camera: {
    flex: 3.5,
  },
  topControls: {
    flex: 1,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  modalOpen: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    width: SIZES.width,
    height: 1100,
    zIndex: 9999,
  },
  modalClose: {
    display: "none",
  },
  resultBottomContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 50,
  },
  resultBtn: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 100,
    width: "40%"
  },
  resultBtnText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#E9730F",
    marginLeft: 10,
    textAlign: "center",
  },
});

export default styles;
