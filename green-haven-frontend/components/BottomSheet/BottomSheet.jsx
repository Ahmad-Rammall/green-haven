import "react-native-gesture-handler";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import styles from "./sheet.styles";
const BottomSheet = () => {
  const snapPoints = ["70%"];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Plant Name</Text>
      <Text style={styles.genre}>Plant Genre</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descTitle}>About the Plant :</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          asperiores, maxime, dicta incidunt itaque magni nostrum eum inventore,
          magnam maiores dolor illum? Voluptatem maxime accusantium quas iusto
          quos quibusdam, voluptates placeat nobis id, officia odit eligendi
          nulla rerum itaque facilis aliquam veritatis magnam qui perspiciatis
          velit. Labore assumenda vel exercitationem?Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Provident, velit explicabo. Eveniet
          dignissimos, quaerat ullam quis nisi suscipit rerum, repellat labore
          dolorum doloremque deserunt nemo, praesentium pariatur dolore
          aspernatur! Reiciendis a aperiam soluta minus magni, eaque nisi
          mollitia, molestias optio, quibusdam at ab in assumenda! Accusantium
          magni molestiae in, eveniet et repellendus assumenda nam, maiores
          veniam facilis ratione eum neque hic cupiditate. Nihil, sequi
          reprehenderit aut nisi ad aspernatur deleniti? Sequi, accusamus
          ratione tenetur eos ea ipsum aut cum, tempore dolorum minus facere ut
          iste neque labore eaque perferendis fuga possimus blanditiis quam. Sit
          fugiat ab repellendus sequi quisquam? Recusandae.
        </Text>
      </View>

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
    </ScrollView>
  );
};

export default BottomSheet;
