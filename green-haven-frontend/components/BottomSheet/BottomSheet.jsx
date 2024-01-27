import "react-native-gesture-handler";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { gardenDataSource } from "../../core/dataSource/remoteDataSource/garden";
import styles from "./sheet.styles";
import Toast from "react-native-simple-toast";
import {useNavigation} from "@react-navigation/native"

const BottomSheet = ({ plant, garden }) => {
  const navigation = useNavigation();

  const addPlantToGarden = async () => {
    const data = new FormData();
    // Append each piece of information to the form data
    data.append("plant_name", plant.plant_name);
    data.append("plant_description", plant.plant_description);
    data.append("file", {
      uri: plant.plant_image,
      type: "image/jpeg",
      name: "user.jpg",
    });
    const response = gardenDataSource.addPlantToGarden(data);

    navigation.navigate("HomePage")

    Toast.show("Plant Added", Toast.LONG);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {plant.plant_name == "" ? (
        <View style={styles.emptyResult}>
          <Text style={styles.emptyResultText}>Plant Not Found</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={{}}>
          <Text style={styles.title}>{plant.plant_name}</Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descTitle}>About the Plant :</Text>
            <Text style={styles.description}>{plant.plant_description}</Text>
          </View>

          {garden ?? (
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.optionBtn}
                onPress={() => addPlantToGarden()}
              >
                <Text style={styles.optText}> + Garden</Text>
              </TouchableOpacity>
              
            </View>
          )}
        </ScrollView>
      )}
    </ScrollView>
  );
};

export default BottomSheet;
