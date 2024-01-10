import { StyleSheet } from "react-native";
import { COLORS } from "../../assets/constants";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: COLORS.offwhite,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  cancelButton: {
    backgroundColor: COLORS.gray2,
  },
  deleteButton: {
    backgroundColor: COLORS.red,
  },
  buttonText: {
    color: COLORS.offwhite,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default styles;
