import "react-native-gesture-handler";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import styles from "./sheet.styles";
const BottomSheet = ({ plant, garden }) => {
  const snapPoints = ["70%"];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {plant.name === "" ? (
        <View style={styles.emptyResult}>
          <Text style={styles.emptyResultText}>Plant Not Found</Text>
        </View>
      ) : (
        <ScrollView>
          <Text style={styles.title}>{plant.plant_name}</Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descTitle}>About the Plant :</Text>
            <Text style={styles.description}>{plant.plant_description}</Text>
          </View>

          {garden ?? (
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.optionBtn}>
                <Text style={styles.optText}> + Garden</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionBtn}>
                <Text style={styles.optText}>Post</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionBtn}>
                <Text style={styles.optText}>Send to</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      )}
    </ScrollView>
  );
};

export default BottomSheet;
