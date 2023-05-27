import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.header}>Nature</Text>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          style={styles.scrollStyles}
        >
          <Image source={require("./assets/1.jpg")} style={styles.image} />
          <Image source={require("./assets/2.jpg")} style={styles.image} />
          <Image source={require("./assets/3.jpg")} style={styles.image} />
          <Image source={require("./assets/4.jpg")} style={styles.image} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20, // set the margin top here
    paddingHorizontal: 10, // set horizontal padding to make sure content doesn't overflow
  },
  image: {
    width: 400, // set the width here
    height: 400,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 110,
    fontSize: 50,
    marginTop: 30,
  },
  scrollStyles: {
    marginTop: 150,
  },
});
